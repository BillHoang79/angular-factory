app.controller('myCtrl', function($scope, myFactory, Auth) {
	console.log(myFactory.getdata())
	console.log(myFactory.mydata)
})

// Factory has to return a value
// Use to bundle a bunch of functionality
// Uses: wrappers for APIs, Authentications 
app.factory('myFactory', function) {
	var mydata = "this is some other data"
	var myfunc = function() {} 
	return {
		getdata: function() {
			return this.mydata
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
