var evaluator = new GlideScopedEvaluator();
evaluator.putVariable('var1', 'value1');
evaluator.putVariable('var2', 'value2');
evaluator.evaluateScript(grObj, 'script_field', null);
var result= evaluator.getVariable('result');
