angular.module('starter')

.controller('writeC', function($scope, $state, MultipleViewsManager) {
	if (MultipleViewsManager.isActive()) {
			console.log("multiple view is active")
		}
	else{
		console.log("wfh")
	}
	
})

.controller('postC',function($scope, $state, MultipleViewsManager){

})