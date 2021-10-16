
// create Script function which can be accessed from both Server side and Client side scripts (GlideAjax)

functionName: function (param1,param2) {	
	try{
		var pVar1 = (param1) ? param1 : this.getParameter('sysparm_param1');
		var pVar2 = (param2) ? param2 : this.getParameter('sysparm_param2');
		
		var result;
		var gr1 = new GlideRecord("tableName");
		gr1.addQuery("field", "value");
		gr1.query();
		if (gr1.next()) {			
			result = gr1.getValue("fieldName");			
		}else{
			result = '';
		}
		return result;
	}
	catch(err){
		gs.info('Exception found in function functionName : '+err);
	}
},
