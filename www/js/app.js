// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionicMultipleViews'])
//'starter.controllers','starter.services'

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('write',{
    url:'/write',
    templateUrl:'templates/write.html',
    controller:'writeC'
  })

  .state('post',{
    url:'/post',
    templateUrl:'templates/post.html',
    controller:'postC'
  })

  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html',
    abstract: true
  })

  .state('home.write',{
    url:'/write',
    views:{
          'write_layout':{
            templateUrl:'templates/write.html',
            controller:'writeC'
          },
          'post_layout':{
            templateUrl:'templates/post.html',
            controller:'postC'
          }
    }
  })

  $urlRouterProvider.otherwise('/home/write');

});