var app = angular.module("ngModelExamples", []);
app.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl($scope) {
    $scope.textboxChange = () => {
        console.log("Textbox input changed");
    }
}