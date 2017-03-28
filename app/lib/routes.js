if (Meteor.isClient) {
	/*Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});*/
}
/*
FlowRouter.triggers.enter([function (context, redirect) {
	if (!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);
*/

FlowRouter.route('/', {
	name: 'home',
	action() {
		//GAnalytics.pageview();
		let title = TAPi18n.__("nav.homePage");
		if (title === "nav.homePage") {
			title = '主页'
		}
		Meteor.setPageTitle(title);
		BlazeLayout.render('MainLayout', { main: 'HomePage' });
	},
	parent: '' // no parent, back button will not be shown
});

FlowRouter.route('/scan', {
	name: 'scan',
	action() {
		//GAnalytics.pageview();
		Meteor.setPageTitle(TAPi18n.__("nav.scanPage"));
		BlazeLayout.render('MainLayout', { main: 'ScanPage' });
	},
	parent: ''
});

FlowRouter.route('/productDetail/:barcode', {
	name: 'productDetail',
	action() {
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: 'ProductDetail' });
	},
	parent: 'scan'
});

FlowRouter.route('/me', {
	name: 'me',
	action() {
		//GAnalytics.pageview();
		Meteor.setPageTitle(TAPi18n.__("nav.mePage"));
		BlazeLayout.render('MainLayout', { main: 'MePage' });
	},
	parent: ''
});

FlowRouter.route('/productList', {
	name: 'productList',
	action() {
		//GAnalytics.pageview();
		if (!Meteor.isAdmin()) {
			FlowRouter.go('home');
			return false;
		}

		Meteor.setPageTitle(TAPi18n.__("nav.productList"));
		BlazeLayout.render('MainLayout', { main: 'ProductList' });
	},
	parent: 'admin'
});

FlowRouter.route('/newProduct', {
	name: 'newProduct',
	action() {
		//GAnalytics.pageview();
		if (!Meteor.isAdmin()) {
			FlowRouter.go('home');
			return false;
		}

		Meteor.setPageTitle(TAPi18n.__("nav.newProduct"));
		BlazeLayout.render('MainLayout', { main: 'NewProduct' });
	},
	parent: 'productList'
});

FlowRouter.route('/editProduct/:id', {
	name: 'editProduct',
	action() {
		//GAnalytics.pageview();
		if (!Meteor.isAdmin()) {
			FlowRouter.go('home');
			return false;
		}

		Meteor.setPageTitle(TAPi18n.__("nav.editProduct"));
		BlazeLayout.render('MainLayout', { main: 'EditProduct' });
	},
	parent: 'productList'
});


FlowRouter.route('/admin', {
	name: 'admin',
	action() {
		if (!Meteor.isAdmin()) {
			FlowRouter.go('me');
			return false;
		}

		Meteor.setPageTitle(TAPi18n.__("nav.adminPage"));

		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: 'AdminPage' });
	},
	parent: ''
});
