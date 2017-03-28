if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


getUserLanguage = function () {
  // Put here the logic for determining the user language
  return "zh";
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
  });

  Meteor.isAdmin = function () {
    let userId = Meteor.userId();
    if (!userId) {
      return false;
    }

    return Roles.userIsInRole(userId, 'admin', 'default-group');
  }

  Meteor.setPageTitle = function(pageTitle) {
    Session.set('pageTitle', pageTitle);
  }
  Meteor.getPageTitle = function() {
    return Session.get('pageTitle');
  }

  Meteor.setPageTitle("主页");
}