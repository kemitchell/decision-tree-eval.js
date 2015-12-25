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
