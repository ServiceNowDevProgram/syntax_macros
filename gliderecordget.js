findValue();
function findValue(){
  var getgr = new GlideRecord('Table_name');
  getgr.get('sys_id');
  gs.info('Message: '  );
} 
