Template.AdminPage.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.AdminPage.events({
	'click .showProductList': function() {
		FlowRouter.go('productList');
	}
})