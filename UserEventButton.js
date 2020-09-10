/**
@NApiVersion 2.x
@NScriptType UserEventScript
@NModuleScope Public
*/

define(["N/record"], function (record){

  var exports= {};

  function beforeLoad(context){
    context.form.addButton({
      id: "custpage_activityButton",
      label: "Update Last Activity",
      functionName: "onClickButton"
    });

    if(context.newRecord.type== record.Type.LEAD){

      if( context.type== context.UserEventType.VIEW){
        context.form.clientScriptModulePath= "SuiteScripts/leadActivityVIEW.js";
      }
      else context.form.clientScriptModulePath= "SuiteScripts/leadActivityEDIT.js";
    }
    else {
      if( context.type== context.UserEventType.VIEW){
        context.form.clientScriptModulePath= "SuiteScripts/ActivityDateVIEW.js";
      }
      else context.form.clientScriptModulePath= "SuiteScripts/ActivityDateEDIT.js";
    }
  }

  exports.beforeLoad= beforeLoad;
  return exports;

});
