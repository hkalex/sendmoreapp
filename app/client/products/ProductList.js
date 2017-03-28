Template.ProductList.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('products');
		self.subscribe('images');
	});
});

Template.ProductList.helpers({
	products: ()=> {
		return Products.find({});
	},
	getImage: function(images) {
		if (images && images.length && images[0]) {
			return SM.getImageUrl(images[0]);
		}
	}
});

Template.ProductList.events({
	'change .searchText': function(event, template) {
		event.preventDefault();
		let search = template.find('.searchText');
		console.log(search);
		Session.set('productSearch', search);
		return false;
	}
});