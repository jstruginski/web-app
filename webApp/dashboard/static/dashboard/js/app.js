var webApp = angular.module('webApp', ['ui.router','ngResource']);

webApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/static/dashboard/templates/start.html',
        controller: 'mainCtrl'
    });

    $urlRouterProvider.otherwise('/');
}])