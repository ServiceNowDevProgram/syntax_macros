## Concise way of doing a GlideAJAX call

new GlideAjax('ScriptInclude').getXMLAnswer(onAnswer(), { 'sysparm_name': '<methodToCall>', 'sysparm_param_1': '<value 1>', ..., 'sysparm_param_n': '<value n>' });
