app.controller('myCtrl', function($scope, myFactory, Auth) {
	console.log(myFactory.getData())
	console.log(myFactory.myData)
})

// Factory has to return a value
// Use to bundle a bunch of functionality
// Uses: wrappers for APIs, Authentications 
app.factory('myFactory', function) {
	var myData = "this is some other data"
	var myFunc = function() {} 
	return {
		getData: function() {
			return this.myData
		}
	}
})

// Authentication Example
app.factory('Auth', function() {
	var current_user = {}
	return {
		setUser: function() {},
		login: function() {},
		logout:
	}
})
