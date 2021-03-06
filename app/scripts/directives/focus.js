'use strict';

var angular = require('angular');

/* Directive to set focus for accessibility */
angular.module('todoListApp')
    .directive('focusMe', function($timeout) {
        return {
            link: function(scope, element, attrs) {
                scope.$watch(attrs.focusMe, function(value) {
                    if (value === true) {
                        $timeout(function() {
                            element[0].focus();
                            scope[attrs.focusMe] = false;
                        }, 100);
                    }
                });
            }
        };
    });
