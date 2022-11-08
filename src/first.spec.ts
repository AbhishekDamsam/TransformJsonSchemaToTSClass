import "jest";

import { toEntries, fromEntries, duplicate, reverse } from "./first";
import { Records, Tuples } from "./types";

describe("first task", function() {
  describe("entries", function() {
    const testCases: Array<[string, Records, Tuples]> = [
      [
        "basic input",
        { a: "1", b: "2" },
        [
          ["a", "1"],
          ["b", "2"]
        ]
      ],

      [
        "mixed values input",
        { a: "1", b: true, c: 123 },
        [
          ["a", "1"],
          ["b", true],
          ["c", 123]
        ]
      ]

      /**
       * You may add your own test cases if you want here
       *
       * the structure is a tuple where
       *   - first element is the name for the test case
       *   - second element is the input which would be given to your implementation
       *   - third element is the expected output
       *
       * Note - for `fromEntries` method, seccond elements becomes the expected
       * output and thir element becomes the input
       */
    ];

    describe("toEntries", function() {
      it.each(testCases)("%s", function(
        _: string,
        input: Records,
        expectedOutput: Tuples
      ) {
        const output = toEntries(input);

        expect(output).toMatchObject(expectedOutput);
      });
    });

    describe("fromEntries", function() {
      it.each(testCases)("%s", function(
        _: string,
        expectedOutput: Records,
        input: Tuples
      ) {
        const output = fromEntries(input);

        expect(output).toMatchObject(expectedOutput);
      });
    });
  });

  describe("duplicate", function() {
    const testCases: Array<[string, number[], number[]]> = [
      ["basic input", [1, 2, 3], [1, 1, 2, 2, 3, 3]],
      ["empty list", [], []],
      [
        "unsorted list",
        [1, 5, 3, 2, 6, 4],
        [1, 1, 5, 5, 3, 3, 2, 2, 6, 6, 4, 4]
      ],
      [
        "list with duplicates",
        [1, 1, 2, 10, 5, 5],
        [1, 1, 1, 1, 2, 2, 10, 10, 5, 5, 5, 5]
      ]

      /**
       * You may add your own test cases if you want here
       *
       * the structure is a tuple where
       *   - first element is the name for the test case
       *   - second element is the input which would be given to your implementation
       *   - third element is the expected output
       */
    ];

    it.each(testCases)("%s", function(
      _: string,
      input: number[],
      expectedOutput: number[]
    ) {
      const output = duplicate(input);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe("reverse", function() {
    const testCases: Array<[string, string, string]> = [
      ["basic input", "John", "nhoJ"],
      ["empty string", "", ""],
      ["multi word string", "js is awesome", "sj si emosewa"],
      ["multi word string with punctuation", "Hello, World!", "olleH, dlroW!"]

      /**
       * You may add your own test cases if you want here
       *
       * the structure is a tuple where
       *   - first element is the name for the test case
       *   - second element is the input which would be given to your implementation
       *   - third element is the expected output
       */
    ];

    it.each(testCases)("%s", function(
      _: string,
      input: string,
      expectedOutput: string
    ) {
      const output = reverse(input);

      expect(output).toEqual(expectedOutput);
    });
  });
});
