// define global scope
SM = {}


SM.getImageUrl = function (imageId) {
  if (Meteor.isCordova) {
    return Meteor.absoluteUrl.defaultOptions.rootUrl + "/cfs/files/images/" + imageId;
  } else {
    return "/cfs/files/images/" + imageId;
  }
}

SM.isAdmin = function () {
  if (!Meteor.userId()) {
    return false;
  }
  let result = Roles.userIsInRole(Meteor.userId(), 'admin', 'default-group')
  return result;
};
SM.userId = function () {
  let userId = Meteor.userId();
  return userId;
};


if (Meteor.isClient) {

  Template.registerHelper('isCordova', () => {
    return Meteor.isCordova;
  });
  Template.registerHelper('isClient', () => {
    return Meteor.isClient;
  });

  // register all methods in SM to Template
  for (let k in SM) {
    if (typeof SM[k] === 'function') {
      Template.registerHelper(k, SM[k]);
    }
  }

}