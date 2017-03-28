Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {})]
});


Images.allow({
	insert: function(userId, doc) {
		return true;
	},
	download: function(userId, doc) {
		return true;
	},
  update: function() {
    return true;
  }
});

