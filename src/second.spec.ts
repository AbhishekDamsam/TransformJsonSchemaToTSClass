import "jest";
import { format, Options } from "prettier";

import schemaWithBasicFields from "./data/basic.json";
import schemaWithEnumField from "./data/enum.json";
import schemaWithNestedField from "./data/nested.json";
import schemaWithNestedField1 from "./data/nested1.json";

import { convert } from "./second";
import { IMongooseSchema } from "./types";

describe("second task", function() {
  const testCases: Array<[string, IMongooseSchema, string]> = [
    [
      "basic schema",
      schemaWithBasicFields,
      `export interface Listing {
        __v?: number;
        _id?: ObjectID;
        apartmentName?: string;
        availableFrom?: Date;
        availableTo?: Date;
        createdAt?: Date;
        deleted?: boolean;
        deposit?: number;
        description?: string;
        floor?: number;
        geoBookings?: any;
        images?: string[];
        landlord: ObjectID;
        lastPublishedAt?: Date;
        price?: number;
        published?: boolean;
        rooms?: number;
        score?: number;
        titleDE: string;
        titleEN: string;
        updatedAt?: Date;
      }`
    ],

    [
      "schema with enum",
      schemaWithEnumField,
      `export interface Listing {
        __v?: number;
        _id?: ObjectID;
        apartmentName?: string;
        availableFrom?: Date;
        availableTo?: Date;
        createdAt?: Date;
        deleted?: boolean;
        deposit?: number;
        description?: string;
        floor?: number;
        geoBookings?: any;
        images?: string[];
        landlord: ObjectID;
        lastPublishedAt?: Date;
        price?: number;
        published?: boolean;
        rooms?: number;
        score?: number;
        status?: "UNPUBLISHED" | "INACTIVE" | "DELETED" | "PUBLISHED" | "0";
        titleDE: string;
        titleEN: string;
        updatedAt?: Date;
      }`
    ],

    [
      "nested schema",
      schemaWithNestedField,
      `export interface Listing {
        __v?: number;
        _id?: ObjectID;
        address?: {
          city?: string;
          districts?: string[];
          location?: any;
          street?: string;
          streetNumber?: string;
          zipCode?: string;
        };
        apartmentName?: string;
        availableFrom?: Date;
        availableTo?: Date;
        createdAt?: Date;
        deleted?: boolean;
        deposit?: number;
        description?: string;
        floor?: number;
        geoBookings?: any;
        images?: string[];
        landlord: ObjectID;
        lastPublishedAt?: Date;
        price?: number;
        published?: boolean;
        rooms?: number;
        score?: number;
        status?: "UNPUBLISHED" | "INACTIVE" | "DELETED" | "PUBLISHED" | "0";
        titleDE: string;
        titleEN: string;
        updatedAt?: Date;
      }`
    ],

    [
      "nested1 schema",
      schemaWithNestedField1,
      `export interface Listing {
        __v?: number;
        _id?: ObjectID;
        address?: {
          districts?: string[];
          location?: any;
          street?: { street1?: string; street2?: string;
          },
          streetNumber?: string;
        },
        apartmentName?: string;
      }`
    ]

  ];

  it.each(testCases)("%s", function(
    _: string,
    input: IMongooseSchema,
    expectedOutput: string
  ) {
    const rawOutput = convert(input, "Listing");

    const formattingOptions: Options = {
      parser: "typescript"
    };

    const output = format(rawOutput, formattingOptions);
    const expectedFormattedOutput = format(expectedOutput, formattingOptions);

    expect(output).toBe(expectedFormattedOutput);
  });
});
