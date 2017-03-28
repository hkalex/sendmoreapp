Template.BarcodeScanner.helpers({
  isCordova() {
    return Meteor.isCordova;
  },
  isClient() {
    return Meteor.isClient;
  }
})


if (Meteor.isCordova) {

  Template.BarcodeScanner.events({
    'click .cordovaButton': function () {

      cordova.plugins.barcodeScanner.scan(
        function (result) {
          if (!result.cancelled && result.text) {
            FlowRouter.go('productDetail', { barcode: result.text });
          }
          /*
          alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);*/
        },
        function (error) {
          alert("Scanning failed: " + error);
        }
      );
    }
  });
}

let searchEventHandler = function (event, template) {
  event.preventDefault();
  let barcode = template.find(".txtBarcode").value;
  if (barcode) {
    FlowRouter.go('productDetail', { barcode });
  }
  return false;
}

Template.BarcodeScanner.events({
  'click .clientButton, submit .clientSearchForm': function (event, template) {
    return searchEventHandler(event, template);
  }
})