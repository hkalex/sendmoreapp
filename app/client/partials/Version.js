Template.Version.helpers({
  getServerVersion: function() {
    return Meteor.settings.public.SERVER_VERSION;
  },
  getAppVersion: function() {
    return Meteor.settings.public.APP_VERSION;
  }
})