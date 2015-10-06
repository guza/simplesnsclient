angular.module('starter.services', ['ngResource'])

.factory('Entry',function($resource){
	return $resource('http://52.27.196.151:3000/wall/write/:content',
		{content:'@_content'},{
			get:{
				method:'GET'
			}
		});
})

// http://52.27.196.151:3000/wall/write?content=12