# First task

In the first task you are required to write the implementation for any 4 methods
that you can find within `src/first.ts` file.

## 1. toEntries

`toEntries` method takes a parameter which is a key value pair, and returns the
list of tuples, in which a tuple is the representation of key and value.

The output is exactly the same which you would expect `Object.prototype.entries`
to give. Which means you are not allowed to use `Object.prototype.entries` of course.

Input -

```js
{
  "key1": "value1",
  "key2": "value2"
}
```

Expected output -

```js
[
  ["key1", "value1"],
  ["key2", "value2"]
];
```

## 2. fromEntries

`fromEntries` method takes a parameter which is a list of tuples, and returns the
key value pair, in which key & value are represented by first & second values in
the tuple.

The output is exactly the same which you would expect `Object.prototype.fromEntries`
to give. Which means you are not allowed to use `Object.prototype.fromEntries` of course.

Input -

```js
[
  ["key1", "value1"],
  ["key2", "value2"]
];
```

Expected output -

```js
{
  "key1": "value1",
  "key2": "value2"
}
```

## 3. duplicate

`duplicate` method takes a parameter which is a list of numbers and returns the
list of numbers where each number is duplicated and inserted besides original
element.

Input -

```
[1, 2, 3]
```

Output -

```
[1, 1, 2, 2, 3, 3]
```

## 4. reverse

`reverse` method takes a parameter which is a string and returns a string where
each word of input string is reversed in place.

Input -

```js
"Yoyo Tricks";
```

Output -

```js
"oyoY skcirT";
```

# Validate the solution

We have basic test cases written inside `src/first.spec.ts` file. Once you are
done with the implementation, just run the following command to check if the test cases are passing or not -

```sh
$ yarn test:first || npm run test:first
```
