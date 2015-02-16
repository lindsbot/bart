'use strict'

BartApp = angular.module 'BartApp', ['ngRoute']
  
BartApp.config ['$routeProvider', ($routeProvider)->
    $routeProvider.when '/', {templateUrl: 'app/view.html'}
  ]