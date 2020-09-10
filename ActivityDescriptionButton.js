/**
@NApiVersion 2.x
@NScriptType UserEventScript
@NModuleScope Public
*/

define(["N/record"], function (record){

  var exports= {};

  function beforeLoad(context){
    context.form.addButton({
      id: "custpage_descriptionButton",
      label: "Update Last Activity",
      functionName: "createDescription"
    });
    if(context.newRecord.type=='contact'){
      context.form.clientScriptModulePath= "SuiteScripts/createDescriptionCONTACT.js";
    }
    else context.form.clientScriptModulePath= "SuiteScripts/createDescriptionLEAD.js";
  }

  exports.beforeLoad= beforeLoad;
  return exports;

});
