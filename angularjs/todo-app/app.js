angular.module("todoApp", [])
.controller("ToDoCtrl", ToDoCtrl);

function ToDoCtrl() {
    this.todoList = [];
    this.editMode = false;

    this.addItem = function() {
        this.todoList.push(this.newItem);
        this.newItem = "";
    }

    this.deleteItem = function(index) {
        this.todoList.splice(index, 1);
    }

    this.changeMode = function() {
        this.editMode = !this.editMode;
    }
}