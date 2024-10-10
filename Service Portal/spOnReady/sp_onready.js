//add keyup event listener
  jQuery(window).on('keyup', fn);
  
  //populate macrosObj with records from the Syntax Editor Macro table
  var requestBody = "";
  var client=new XMLHttpRequest();
  client.open("get","/api/now/table/syntax_editor_macro?sysparm_fields=name%2Ctext");
  
  client.setRequestHeader('Accept','application/json');
  client.setRequestHeader('Content-Type','application/json');
  client.setRequestHeader('X-UserToken',window.g_ck);
  
  var rsc = function(){
    if(this.readyState == this.DONE) {
      var rspObj=JSON.parse(this.response).result;
      for(var macro in rspObj){
        if(!rspObj.hasOwnProperty(macro))
          continue;
        
        var currentMacro=rspObj[macro];
        macrosObj[currentMacro.name]=currentMacro;
      }
    }
  };
  
  client.onreadystatechange = rsc;
  client.send(requestBody);
