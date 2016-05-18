'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, dataService){
  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    var todoLength = $scope.todos.length;
    var todoName = "";

    if (todoLength) {
      todoName = "Another TODO";
    } else {
      todoName = "New TODO";
    }

    $scope.todos.unshift(
      {
        name: todoName,
        completed: false
      }
    );
  };

})
