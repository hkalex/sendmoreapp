Template.HomePage.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('settings');
	});
});