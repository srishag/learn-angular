var clockApp = angular.module("clockApp", []);
clockApp.controller("MainCtrl", Main);

function Main($scope) {
    var currentDate = new Date();
    $scope.timeString = currentDate.toLocaleString();
    $scope.updateTime = () => {
        var currentDate = new Date();
        $scope.timeString = currentDate.toLocaleString();
    }
}