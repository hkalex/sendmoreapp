Template.ProductDetail.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var barcode = FlowRouter.getParam('barcode');
    self.subscribe('productsByBarcode', barcode);
  });
});

Template.ProductDetail.helpers({
  getProducts: function () {
    var barcode = FlowRouter.getParam('barcode');
    return Products.find({ barcodes: { $elemMatch: { barcode } } });
  },

  barcode: function() {
    return FlowRouter.getParam('barcode');
  },

  hasImage: function(images) {
    return images && images.length && images[0];
  },

  getImageUrl: function(images) {
    return SM.getImageUrl(images[0]);
  }
});