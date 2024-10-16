var obj = { name: 'John', age: 30 };
var keys = GlideUtils.getKeys(obj);
gs.info('Keys: ' + keys.join(', '));  // Output: name, age
