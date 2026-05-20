# Examples — QA-First in the Age of AI

Demo code for the **Spec-Driven Development** talk.

## Flow

```
spec/cart.spec.md   ← 1. Write the spec first
src/cart.js         ← 2. Implement to satisfy the spec
tests/cart.test.js  ← 3. Tests derived from the spec (all pass ✅)
broken/cart.js      ← 4. Careless refactor → tests fail ❌ → PR blocked
```

## Running

```bash
npm install
npm test
```

## Demo script

1. Run `npm test` with `src/cart.js` → all 5 tests pass.
2. Replace `src/cart.js` with `broken/cart.js` and run again → 2 tests fail.
3. Show the PR check failing in CI — the spec caught the regression.
