/**
* @NApiVersion 2.x
* @NModuleScope Public
*/

define(['N/record', 'N/url', 'N/currentRecord'], function(record, url, currentRecord) {

  return({
    createDescription: function() {
      var rec= currentRecord.get();
      var contactID= rec.id;
      var timestamp= Date.now();

      var link= url.resolveRecord({
        recordType: 'note',
        isEditMode: true
      }).replace('compid=3737138', '');

      link= link+'l=T&refresh=usernotes&perm=LIST_CONTACT&entity='+contactID+'&_ts='+timestamp ;

      window.open(link, 'popup', 'width=600, height=600');
    }
  });
});
