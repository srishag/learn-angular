var app = angular.module("nestedControllers", []);
app.controller("CtrlOne", CtrlOne);
app.controller("CtrlTwo", CtrlTwo);

function CtrlOne($scope) {
    this.testProp = "From CtrlOne";
}

function CtrlTwo($scope) {
    // this.testProp = "From CtrlTwo";
}