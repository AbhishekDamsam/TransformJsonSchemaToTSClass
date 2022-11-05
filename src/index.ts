import { format } from "prettier";

import schemaWithBasicFields from "./data/basic.json";
import schemaWithEnumField from "./data/enum.json";
import schemaWithNestedField from "./data/nested.json";

import { toEntries, fromEntries, duplicate, reverse } from "./first";
import { convert } from "./second";

/**
 * You can test your implementation for the first task within this method
 */
function first() {
  // toEntries
  const toEntriesOutput = toEntries({
    a: 1
  });
  console.info(toEntriesOutput);

  // fromEntries
  const fromEntriesOutput = fromEntries(toEntriesOutput);
  console.info(fromEntriesOutput);

  /* ----------------------- */

  // duplicate
  const duplicateOutput = duplicate([1, 2]);
  console.info(duplicateOutput);

  /* ----------------------- */

  // reverse
  const reverseOutput = reverse("John Doe");
  console.info(reverseOutput);
}

/**
 * You can test your implementation for the second task within this method
 */
function second() {
  /**
   * You can change the input as per need
   */
  const input = schemaWithBasicFields;

  const rawOutput = convert(input);

  try {
    const output = format(rawOutput, {
      parser: "typescript"
    });

    console.info(output);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Comment out the method call based on your need
 */
first();
second();
