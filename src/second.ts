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
  const dataType = typeMapping[path.instance as keyof typeof typeMapping] ?? 'unknown'; //To set a default data type

  if (dataType == typeMapping.Array) {
    //setting any data type if caster is missing
    return path.caster ? `${typeMapping[path.caster.instance as keyof typeof typeMapping]}[]` : `${typeMapping.Mixed}[]`;
  }

  if (path.options.enum) {
    return `'${path.options.enum.join("' | '")}'`;
  }

  return dataType;
}

function getKeyName(key: string, path: IMongoosePath): string {
  if (key.includes('.')) {
    // conditions can be added it nexted object is required or optional
    // Default is optional
    key = key.replaceAll('.', '?.');
  }
  const isRequired = path.options?.required;
  return key + (isRequired ? "" : "?")
}

function transformIntoKeyValueObjects(input: IMongooseSchema): transform[] {
  return Object.keys(input.paths).sort().map((key: string) => {
    return { key: getKeyName(key, input.paths[key]), value: getDataType(input.paths[key]) + ';' }
  });
}

/**
 * @param input a representation of a mongoose model's schema
 * @param entity is a string specifying the name of the Interface
 *
 * The goal of this method would be to convert a given mongoose schema into an
 * equivalent typescript interface
 */
export function convert(input: IMongooseSchema, entity: string = "Listing") {

  const transformSchemaArray = transformIntoKeyValueObjects(input);

  const transformedTSobject = transformSchemaArray.reduce(function (prevTransformSchemaObject, currentSchemaObject) {
    const paths = currentSchemaObject.key.split('.');
    const propertyName = paths.pop()!; // As object cannot be undefined
    const objectReference = paths.reduce(function (previousObject: Record<string, any>, CurrentPropertyName: string): any {
      return previousObject[CurrentPropertyName] = previousObject[CurrentPropertyName] || {}; //Get the object reference
    }, prevTransformSchemaObject);

    objectReference[propertyName] = currentSchemaObject.value;

    return prevTransformSchemaObject;
  }, {});

  return `export interface ${entity}
  ${JSON.stringify(transformedTSobject, null, 2).replace(/["]/g, "").replace(/(;,)/g, ';')}`;
}
