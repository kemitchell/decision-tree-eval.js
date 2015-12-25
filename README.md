The package exports a single function of two arguments

1. A [Decision Tree](https://www.npmjs.com/packages/decision-tree-schema) object

2. An object with key-value pairs of variables used in decision tree conditions

that returns a value.

```javascript
var evaluate = require('decision-tree-eval')
var assert = require('assert')

assert.equal(
  evaluate(
    { condition: 'English',
      true: { result: 'Hello!' },
      false: { result: 'Allo!' } },
    { English: true }),
  'Hello!')

assert.equal(
  evaluate(
    { condition: 'English',
      true: { result: 'Hello!' },
      false: { result: 'Allo!' } },
    { English: false }),
  'Allo!')

assert.equal(
  evaluate(
    { condition: { or: [ 'USA', 'UK' ] },
      true: { result: 'Hello!' },
      false: { result: 'Allo!' } },
    { USA: true }),
  'Hello!')
```
