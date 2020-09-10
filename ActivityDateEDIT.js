/**
* activitydate.js
* @NApiVersion 2.x

* @NModuleScope Public

*/

define(["N/record", "N/format", "N/currentRecord"], function(record, format, currentRecord){

  return({

    onClickButton: function() {
      var rec= currentRecord.get(); //try to remove this if it doesn't work
      var record_id= rec.id; //and place currentRecord.id here instead
      var record_type= rec.type; //**
      var today= new Date();
      var parsedDate= format.parse({
        value: today,
        type: format.Type.DATE
      });
      rec.setValue({
        fieldId: 'custentity117',
        value: parsedDate
      });


    }
  });

});
