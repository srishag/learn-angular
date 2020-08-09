angular.module("myHelloModule", [])
.controller("HelloCtrl", HelloCtrl);

function HelloCtrl() {
    this.helloMessage = "I'm from the myHelloModule module"
}