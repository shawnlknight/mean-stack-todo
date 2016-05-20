'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, dataService){
  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

  $scope.todoName = '';

  $scope.addTodo = function() {
    var todoName = $scope.todoName;

    if (todoName) {
      $scope.todos.unshift({name: todoName, completed: false});
      $scope.todoName = '';
    } else {
      return;
    }
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.completed ? 0 : 1;
    });
    return count;
  };
})
