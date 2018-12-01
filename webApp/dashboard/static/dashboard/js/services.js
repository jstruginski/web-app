webApp.factory('Countries',['$resource', function($resource) {
    return $resource('/api/', {});
}])