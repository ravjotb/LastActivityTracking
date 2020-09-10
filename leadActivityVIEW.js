/**
* activitydate.js
* @NApiVersion 2.x

* @NModuleScope Public

*/

define(["N/record", "N/format", "N/currentRecord"], function(record, format, currentRecord){

  return({

    onClickButton: function() {
      var rec= currentRecord.get();

      var record_id= rec.id;
      var record_type= rec.type;

      var today= new Date();
      var parsedDate= format.parse({
        value: today,
        type: format.Type.DATE
      });

      var leadRecord= record.load({
        type:  record_type,
        id: record_id
      });

      leadRecord.setValue({
        fieldId: 'custentity119',
        value: parsedDate
      });

      leadRecord.save({
        ignoreMandatoryFields: true
      });

      window.location.reload();
    }
  });

});
