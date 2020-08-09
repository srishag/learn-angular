angular.module("moreDirectives", [])
.controller("Ctrl", MoreDirectivesCtrl);

function MoreDirectivesCtrl() {
    this.myList = [
        {'name': 'Foo', 'age': 21},
        {'name': 'Bar', 'age': 23},
        {'name': 'Buz', 'age': 59},
        {'name': 'Bass', 'age': 14},
        {'name': 'Rock', 'age': 56},
    ]
}