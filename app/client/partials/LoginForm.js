Template.LoginForm.events({
  'submit form': function(e, template) {
    e.preventDefault();

    let email = template.find('#loginEmail').value;
    let pwd = template.find('#loginPassword').value;

    Meteor.loginWithPassword({email}, pwd, function(err) {
      if (err) {
        alert(err);
      }
      FlowRouter.go('home');
    })

    return false;
  }
})