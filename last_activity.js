/**
* last_activity.js
* @NApiVersion 2.x
* @NModuleScope Public

*/

define(["N/currentRecord", "N/format"], function(currentRecord, format){

  return({

    onClickButton: function(context) {
      var record= currentRecord.get();
      var today= new Date();
      var parsedDate= format.parse({
        value: today,
        type: format.Type.DATE
      });
      record.setValue({
        fieldId: 'custentity117',
        value: parsedDate
      });

    }
  });

});
