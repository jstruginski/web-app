webApp.controller('mainCtrl', ['$scope','Countries', function ($scope, Countries) {
    $scope.getData = function() {
        Countries.query(function(response) {
            $scope.countries = response;
        }, function(error) {
            console.log(error);
        })
    }
}])