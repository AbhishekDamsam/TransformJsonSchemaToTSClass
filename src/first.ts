import { EntriesValueType, Records, Tuples } from "./types";

function convertToTuple(key: string, object: Records): [string, EntriesValueType] {
  return [key, object[key]];
}

function convertToRecord(key: string, value: EntriesValueType): Records {
  return { [key]: value };
}

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
  let tuples: Tuples = Object.keys(input).map((key: string) => convertToTuple(key, input));
  return tuples;
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
  let records: Records[] = input.map(([key, value]) => convertToRecord(key, value))
  let response = Object.assign({}, ...records);
  return response;
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
  let duplicates: number[] = [];
  input.forEach((ele) => {
    duplicates.push(ele, ele);
  })
  return duplicates;
}

/* ---------------------------------------------------------------------- */

/**
 * reverseWords method takes a parameter which is a string and returns a string
 * where each word of input string is reversed order.
 *
 *   Input - "skcirT oyoY"
 *   Output - "oyoY skcirT"
 */

function reverseWords(reverseText: string): string {
  return reverseText.split(' ').reverse().join(' ');
}

/**
 * reverse method takes a parameter which is a string and returns a string
 * where each word of input string is reversed in place.
 *
 *   Input - "Yoyo Tricks"
 *   Output - "oyoY skcirT"
 */

export function reverse(input: string): string {
  let reverseText = input.split('').reverse().join(''); //Reverse the characters in the input
  return reverseWords(reverseText); //Reverse the words
}
