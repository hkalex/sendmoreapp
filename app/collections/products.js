Products = new Mongo.Collection('products');

Products.allow({
	insert: function(userId, doc) {
		return !!userId && SM.isAdmin();
	},
	update: function(userId, doc) {
		return !!userId && SM.isAdmin();
	},
	remove: function() {
		// product is not allowed to be deleted!!
		return false;
	}
});


BarcodeSchema = new SimpleSchema({
	barcode: {
		type: String,
		label: "条码"
	},
	isActive: {
		type: Boolean,
		label: "还生效吗?",
		defaultValue: true
	}
});

ProductSchema = new SimpleSchema({
	name: {
		type: String,
		label: "产品名字"
	},
	manufactor: {
		type: String,
		label: "生产商"
	},
	desc: {
		type: String,
		label: "产品介绍",
		autoform: {
			afFieldInput: {
				type:'textarea'
			}
		}
	},
	usage: {
		type: String,
		label: "使用方法",
		autoform: {
			afFieldInput: {
				type:'textarea'
			}
		}
	},
	images: {
		type: [String],
		label: "图片"
	},
	"images.$": {
		type: String,
		autoform: {
			afFieldInput : {
				type: 'fileUpload',
				collection: 'Images',
				accept: "image/*",
				//uploadProgressTemplate: 'myUploadProgressTemplate',
				//previewTemplate: 'FilePreviewer',
				label: 'Choose image'
			}
		}
	},
	barcodes: {
		type: [BarcodeSchema],
		label: "条码"
	},
	isActive: {
		type: Boolean,
		defaultValue: true,
		optional: false,
		label: "还生效吗?",
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
	deleteProduct: function(id) {
		Products.remove(id);
	}
});

Products.attachSchema(ProductSchema);