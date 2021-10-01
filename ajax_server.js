/**
 * Purpose: server side code for GlideAjax function that's defined inside client callable Script Include class
 * Description:
 * @funciton Function name that's being called in the ajax script:   scriptIncludeFunction
 * @param    Parameters that are passed from client side:            sysparm_custom_parameter
 * @param    the table that's being queried:                         table
 * @param    the encoded query string for GlideRecord:               query_string 
 * one can replace the gs.addErrorMessage with gs.log or remove once the development and testing is completed 
 */

scriptIncludeFunction: function () {
  try {
    var parms = this.getParameter('sysparm_custom_parameter');

    var parm_obj = JSON.parse(parms);
    var result_obj = {};
    var gr = new GlideRecord('table');
    gr.addEncodedQuery('query_string');
    gr.query();
    while (gr.next()) {

      gs.addInfoMessage("Testing: ");
    }

    return JSON.stringify(result_obj);
  } catch (error) {
    gs.addErrorMessage("Error from Server: " + error.getMessage());
  }
},
