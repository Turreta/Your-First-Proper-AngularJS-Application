(function () {
    'use strict';

    var main_module = angular.module('app');
    main_module.controller('MainController', ['$scope', MainController]);
    function MainController($scope) {
        $scope.website = 'www.turreta.com';
    }

})();