Template.Header.helpers({
  'pageTitle': function () {
    return Meteor.getPageTitle();
  },

  showBackButton: function () {
    let parent = FlowRouter.current().route.options.parent;
    console.log(!!parent);
    return !!parent;
  }
})

Template.Header.events({
  'click .backButton': function (event, template) {
    event.preventDefault();
    let parent = FlowRouter.current().route.options.parent;
    if (parent === 'history.back()') {
      history.back();
    } else if (parent) {
      FlowRouter.go(parent);
    }
    return false;
  }
})
