module.exports = decisionTreeEval

var booleanJSONEval = require('boolean-json-eval')

function decisionTreeEval(tree, variables) {
  return (
    ( 'result' in tree ) ?
      tree.result :
      ( booleanJSONEval(tree.condition, variables) ?
          decisionTreeEval(tree.true, variables) :
          decisionTreeEval(tree.false, variables) ) ) }
