/**
* activitydate.js
* @NApiVersion 2.x

* @NModuleScope Public

*/

define(["N/record", "N/format", "N/currentRecord"], function(record, format, currentRecord){

  return({

    updateActivity: function() {
      var rec= currentRecord.get(); //try to remove this if it doesn't work
      var record_id= rec.id; //and place currentRecord.id here instead
      var record_type= rec.type; //**

      var contactDate= rec.getValue({
        fieldId: 'custentity118'
      });

      var parsedDate= format.parse({
        value: contactDate,
        type: format.Type.DATE
      });

      record.submitFields({
        type:  record_type,
        id: record_id,
        values: {
          custentity117: parsedDate
        }
      });
      
    }
  });

});
