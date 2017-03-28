import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.startup(function () {
    let init_user = Assets.getText('init_user.json');
    if (init_user) {
      let users = JSON.parse(init_user);
      _.each(users, function (user) {
        var id;
        var userFound = Accounts.findUserByEmail(user.email);
        if (!userFound) {
          id = Accounts.createUser({
            email: user.email,
            password: user.password,
            profile: { name: user.name }
          });

          if (user.roles.length > 0) {
            // Need _id of existing user record so this call must come
            // after `Accounts.createUser` or `Accounts.onCreate`
            Roles.addUsersToRoles(id, user.roles, 'default-group');
          }
        }
      });

    }
  });
}


Accounts.registerLoginHandler("password", function (options) {
  console.log("***Accounts.registerLoginHandler-password");
  console.log(options);
});