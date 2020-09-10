/**
* sourceContactActivity.js
* @NApiVersion 2.x
* @NScriptType UserEventScript
* @NModuleScope Public

*/

define(["N/record", "N/log", "N/search"], function(record, log, search){


    function beforeSubmit(context){
      if(context.type==context.UserEventType.CREATE){
          var noteRecord= context.newRecord ;

          var customForm= noteRecord.getValue({
            fieldId: 'customform'
          });

          var author=noteRecord.getValue({
            fieldId: 'custrecord30'
          });

          noteRecord.setValue({
            fieldId: 'author',
            value: author
          });

      }
    }

    function afterSubmit(context) {
        if(context.type!=context.UserEventType.DELETE){
              var noteRecord= context.newRecord ;
              var noteID= noteRecord.id;
              var noteType= noteRecord.type;

              noteRecord= record.load({
                type: noteType,
                id: noteID
              });

              var title= noteRecord.getValue({
                fieldId: 'title'
              });

              if(title!='Activity Description') return;


              var recentDate= noteRecord.getValue({
                fieldId: 'notedate'
              });

              var entityID= noteRecord.getValue({
                fieldId: 'entity'
              });

             var resultLead= search.lookupFields({
               type: search.Type.LEAD,
               id: entityID,
               columns: 'isperson'
             });

             var resultContact= search.lookupFields({
               type: search.Type.CONTACT,
               id: entityID,
               columns: 'firstname'
             });

             if(resultLead.isperson ) var recordType='lead';

             else if(resultContact.firstname) var recordType='contact';

             else var recordType= '';

             if(recordType==='lead'){

                var leadRecord= record.load({
                  type: record.Type.LEAD,
                  id: entityID
                });

                var leadDate= leadRecord.getValue({
                  fieldId: 'custentity119'
                });

                if(leadDate<recentDate){

                  leadRecord.setValue({
                    fieldId: 'custentity119',
                    value: recentDate
                  });

                  leadRecord.save({
                    ignoreMandatoryFields: true
                  });
                }
              }

              else if (recordType==='contact'){
                var contactRecord= record.load({
                  type: record.Type.CONTACT,
                  id: entityID
                });

                var customerID= contactRecord.getValue({
                  fieldId: 'company'
                });

                var contactDate= contactRecord.getValue({
                  fieldId: 'custentity117'
                });

                if(contactDate<recentDate){

                  contactRecord.setValue({
                    fieldId: 'custentity117',
                    value: recentDate
                  });


                  contactRecord.save();

                  var customerRecord= record.load({
                    type: record.Type.CUSTOMER,
                    id: customerID
                  });

                  var customerType= customerRecord.type;

                  var customerDate= customerRecord.getValue({
                    fieldId: 'custentity119'
                  });

                  if(customerDate < recentDate){
                    record.submitFields({
                      type:  customerType,
                      id: customerID,
                      values: {
                        custentity119: recentDate
                      }
                    });
                  }
                }

              }

        }

    }

    return{
      afterSubmit : afterSubmit
    };

});
