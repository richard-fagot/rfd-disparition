 window.angular && (function (angular) {

 'use strict';

 angular.module('myapp')
      .controller('HelloController', function($scope) {
       $scope.title = 'World, look if your mobile phone provider interfere with HTML code.<br/> If the first image display "Oups" you are parasitised.';
    } );

}) (window.angular);