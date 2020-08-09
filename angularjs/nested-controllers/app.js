var app = angular.module("nestedControllers", []);
app.controller("CtrlOne", CtrlOne);
app.controller("CtrlTwo", CtrlTwo);

function CtrlOne() {
    this.testProp = "From CtrlOne";
}

function CtrlTwo() {
    // this.testProp = "From CtrlTwo";
}