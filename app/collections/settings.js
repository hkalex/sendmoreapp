Settings = new Mongo.Collection('settings');

Settings.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

SettingSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	value: {
		type: String,
		label: "Value"
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	updateSetting: function(id, value){
		Settings.update(id, {
      $set: {
        value: value
      }
    });
	},
});

Settings.attachSchema(SettingSchema);