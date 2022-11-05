import { IMongoosePath, IMongooseSchema } from "./types";

const typeMapping = {
  Number: "number",
  String: "string",
  Boolean: "boolean",
  Date: "Date",
  Mixed: "any",
  ObjectID: "ObjectID",
  Array: "Array"
};

type transform = {
  key: string,
  value: string
}

function getDataType(path: IMongoosePath): string {
  let dataType = typeMapping[path.instance as keyof typeof typeMapping] ?? 'unknown'; //To set a default data type

  if (path.options.enum) {
    dataType = `'${path.options.enum.join("' | '")}'`;
  }

  if (dataType == typeMapping.Array) {
    //setting any data type if caster is missing
    dataType = path.caster ? `${typeMapping[path.caster.instance as keyof typeof typeMapping]}[]` : `${typeMapping.Mixed}[]`;
  }

  return dataType;
}

function getKeyName(key: string, path: IMongoosePath): string {
  if (key.includes('.')) {
    // conditions can be added it nexted object is required or optional
    // Default is optional
    key = key.replaceAll('.', '?.');
  }
  return key + (!path.options ? '?' : path.options.required ? '' : '?'); // Assign property with optional/required
}

function transformSchema(input: IMongooseSchema): transform[] {
  return Object.keys(input.paths).sort().map((key: string) => {
    return { key: getKeyName(key, input.paths[key]), value: getDataType(input.paths[key]) + ';' }
  });
}

function createOrGetObjectReference(previousObject: Record<string, any>, CurrentPropertyName: string): any {
  return previousObject[CurrentPropertyName] = previousObject[CurrentPropertyName] || {};
}

/**
 * @param input a representation of a mongoose model's schema
 * @param entity is a string specifying the name of the Interface
 *
 * The goal of this method would be to convert a given mongoose schema into an
 * equivalent typescript interface
 */
export function convert(input: IMongooseSchema, entity: string = "Listing") {

  let transformSchemaArray = transformSchema(input);

  let transformedTSobject = transformSchemaArray.reduce(function (prevTransformSchemaObject, currentSchemaObject) {
    const paths = currentSchemaObject.key.split('.');
    const propertyName = <string>paths.pop();
    const objectReference = paths.reduce(createOrGetObjectReference, prevTransformSchemaObject);

    objectReference[propertyName] = currentSchemaObject.value;

    return prevTransformSchemaObject;
  }, {});

  return `export interface ${entity}
  ${JSON.stringify(transformedTSobject).replace(/["]/g, "").replace(/(;,)/g, ';')}`;
}
