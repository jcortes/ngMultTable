angular.module('multTable', [])

.controller('MultiplicationCtrl', function ($scope) {
    
    $scope.numbers = [];
    for(var i=0; i<10; i++){
        $scope.numbers.push(i+1);
    }
});