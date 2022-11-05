export type EntriesValueType = number | string | boolean;

export type Records = Record<string, EntriesValueType>;
export type Tuples = Array<[string, EntriesValueType]>;

export interface IMongooseSchema {
  paths: {
    [key: string]: IMongoosePath;
  };
}

export interface IMongoosePath {
  path: string;
  instance: string;
  options: IMongoosePathOption;
  caster?: {
    instance: string;
  };
}

export interface IMongoosePathOption {
  default?: any;
  type?: any[];
  required?: boolean;
  ref?: string;
  auto?: boolean;
  enum?: any[];
}
