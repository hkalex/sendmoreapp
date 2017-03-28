Template.LogoutButton.events({
'click .logoutButton': function(e) {
    e.preventDefault();
    console.log('logout');
    Meteor.logout(function() {
      FlowRouter.go('home');
    })

    return false;
  }
})