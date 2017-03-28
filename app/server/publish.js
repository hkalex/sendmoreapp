Meteor.publish('recipes', function () {
	return Recipes.find({ author: this.userId });
});

Meteor.publish('SingleRecipe', function (id) {
	check(id, String);
	return Recipes.find({ _id: id });
});

Meteor.publish('settings', function () {
	return Settings.find({});
});

Meteor.publish('SingleProduct', function (id) {
	check(id, String);
	return Products.find({ _id: id });
});

Meteor.publish('productsByBarcode', function (barcode) {
	check(barcode, String);
	return Products.find({ barcodes: { $elemMatch: { barcode } } });
});

Meteor.publish('products', function () {
	return Products.find({});
});

Meteor.publish('images', function() {
	return Images.find({});
})