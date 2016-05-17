'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, dataService){
  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift(
      {
        name: "New Task",
        completed: false
      }
    );
  };

})
