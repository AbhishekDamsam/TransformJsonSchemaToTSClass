# Coding exercise for Backend

Welcome to the future of housing. It all starts with adding types. Nobody wants
an untyped apartment.

# Instructions for this project

## Initialize the project

This project makes use of `yarn` over `npm` but just to install dependencies.
You are free to make use of either of `npm` or `yarn`

```sh
$ yarn install || npm install
```

## Validate your solutions

To check if your solutions are working fine, you can run the standard tests that we have
already made available as part of this project.

You can include your own test cases there if you want.

To run all the tests

```sh
$ yarn test || npm run test
```

To run test for only first task

```sh
$ yarn test:first || npm run test:first
```

Similarly to run test for only second task

```sh
$ yarn test:second || npm run test:second
```

Add `--watch` to make them rerun automatically while you develop.

## Run for development / debugging purpose

We understand not everybody is comfortable with `TDD`. Hence we have included a
template file i.e. `index.ts` inside `src` directory, in which you can write
your own code to test your implementation. The implementation you need to write
in `src/first.ts` and `src/second.ts`.

We have created a command that you can run once and leave it as it is. It
watches any changes made to `index.ts` file and will rerun the script on every
file save, which saves you from rerunning it manually.

```sh
$ yarn dev || npm run dev
```

# What we're looking for


* Functionally correct code -> Tests pass.
* Readable code -> We don't need to clone the repo to understand how it works.
* Maintainable code -> Anticipate requirement changes and write the code accordingly.
* Inline Documentation -> Explain the why, not the what.
* Your submission is rated by functionality, readability and maintainability in that order.
 
# What we're not looking for

* Clever code we need to run through a debugger or trace with `console.log`s to understand it.
* Shortened or general variable names (e.g. `res` instead of `result` or `response`), be specific and don't be afraid of long variable names. We all have code editors with autocomplete.

# Closing words

* Done is better than perfect. Don't be afraid to submit if you have already spent a lot of time on the challenge but still think that there is a lot you could show. In that case make sure to include a comment with your submission explaining what you would like to improve if you could afford to spend more time on the challenge.
* That said, you have 2 weeks. We highly suggest to sleep over the solution and reread it with a fresh mind to catch things that may confuse a reviewer.
* Good luck 🍀, we look forward to hear back from you 😊

# Tasks

You can find your tasks below

[First task](./TASK-1.md)

[Second task](./TASK-2.md)
