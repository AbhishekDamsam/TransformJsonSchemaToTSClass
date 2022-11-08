import { Records, Tuples } from "./types";

/* ---------------------------------------------------------------------- */

/**
 * `toEntries` method takes a parameter which is a key value pair and returns
 * the list of tuples, in which a tuple is the representation of key and value.
 *
 * The output is exactly the same which you would expect
 * `Object.prototype.entries` to give.
 *
 *   Input - { "key1": "value1", "key2": "value2" }
 *   Output - [ [ "key1", "value1" ], [ "key2", "value2" ] ]
 *
 */
export function toEntries(input: Records): Tuples {
  return Object.keys(input).map((key: string) => [key, input[key]]);
}

/* ---------------------------------------------------------------------- */

/**
 * `fromEntries` method takes a parameter which is a list of tuples and returns
 * the key value pair, in which key & value are represented by first & second
 * values in the tuple.
 *
 * The output is exactly the same which you would expect
 * `Object.prototype.fromEntries` to give.
 *
 *   Input - [ [ "key1", "value1" ], [ "key2", "value2" ] ]
 *   Output - { "key1": "value1", "key2": "value2" }
 *
 */
export function fromEntries(input: Tuples): Records {
  return Object.assign({}, ...input.map(([key, value]) => ({ [key]: value })));
}

/* ---------------------------------------------------------------------- */

/**
 * duplicate method takes a parameter which is a list of numbers and returns
 * the list of numbers where each number is duplicated and inserted besides
 * original element.
 *
 *   Input - [ 1, 2, 3 ]
 *   Output - [ 1, 1, 2, 2, 3, 3 ]
 */
export function duplicate(input: number[]): number[] {
  return input.flatMap((num) => [num, num]);
}

/* ---------------------------------------------------------------------- */

/**
 * reverse method takes a parameter which is a string and returns a string
 * where each word of input string is reversed in place.
 *
 *   Input - "Hello, World!"
 *   Output - "olleH, dlroW!"
 */

export function reverse(input: string): string {
  return input.replace(/[a-z]+/gi, function (word) {
    return word.split('').reverse().join('');
  });
}
