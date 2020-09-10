/**
* @NApiVersion 2.x
* @NScriptType ClientScript
* @NModuleScope Public
*/

define(['N/record', 'N/url', 'N/currentRecord'], function(record, url, currentRecord) {

  return({
    createDescription: function() {
      var rec= currentRecord.get();
      var leadID= rec.id;
      var timestamp= Date.now();

      var link= url.resolveRecord({
        recordType: 'note',
        isEditMode: true
      }).replace('compid=3737138', '');

      link= link+'l=T&refresh=usernotes&perm=LIST_CUSTJOB&entity='+leadID+'&_ts='+timestamp+ '&cf=95&whence=' ;

      window.open(link, 'popup', 'width=600, height=600');
    }
  });
});
