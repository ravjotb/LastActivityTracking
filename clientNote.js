/**
* @NApiVersion 2.x
* @NScriptType ClientScript
* @NModuleScope Public
*/

define([], function() {

  function pageInit(context){
    var currentRecord= context.currentRecord;

    var customForm= currentRecord.getValue({
      fieldId: 'customform'
    });

    var title= currentRecord.getValue({
      fieldId: 'title'
    });

    var titleField= currentRecord.getField({
      fieldId: 'title'
    });

    if(context.mode== 'create') {
      var formField = currentRecord.getField({
        fieldId: 'customform'
      });
      formField.isDisabled=true;

      if(customForm=='95'){
        currentRecord.setValue({
          fieldId: 'title',
          value: 'Activity Description'
        });
        titleField.isDisabled=true;
      }
    }

    else if(context.mode=='edit'){
      if(customForm=='95') {
        titleField.isDisabled=true;
        return;
      }

      if(title=='Activity Description'){
        currentRecord.setValue({
          fieldId: 'customform',
          value: '95'
        });
      }
    }

  }
  return {
    pageInit: pageInit
  }

});
