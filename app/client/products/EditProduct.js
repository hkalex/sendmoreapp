Template.EditProduct.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var id = FlowRouter.getParam('id');
    self.subscribe('SingleProduct', id);
  });
});

Template.EditProduct.helpers({
  'theProduct': function () {
    let id = FlowRouter.getParam('id');
    let product = Products.findOne({ _id: id });
    return product;
  },
  'productId': function () {
    return FlowRouter.getParam('id');
  }
})

Template.EditProduct.events({
  'click .fa-close': function (event, template) {
    history.back();
  },
  'click .fa-trash': function (event, template) {
    let msg = TAPi18n.__("msg.deleteProductConfirm");
    let title = TAPi18n.__("msg.deleteProductTitle");
    let cancel = TAPi18n.__("dialog.cancel");
    let ok = TAPi18n.__("dialog.ok");

    new Confirmation({
      message: msg,
      title: title,
      cancelText: cancel,
      okText: ok,
      success: true, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, function (ok) {
      // ok is true if the user clicked on "ok", false otherwise
      if (ok) {
        Meteor.call('deleteProduct', FlowRouter.getParam('id'), function (err, result) {
          history.back();
        })
      }
    });
  }
})