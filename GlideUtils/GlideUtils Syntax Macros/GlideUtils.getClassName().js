var obj = new GlideRecord('incident');
var className = GlideUtils.getClassName(obj);
gs.info('Class Name: ' + className);  // Output: 'GlideRecord'
