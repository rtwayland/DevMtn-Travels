angular.module('devmtnTravel')
    .controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
        var locations = mainSrv.travelInfo;

        for (var i = 0; i < locations.length; i++) {
            if (locations[i].id == $stateParams.id) {
                $scope.location = locations[i];
            }
        }
    });
