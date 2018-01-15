angular.module('app').controller('hotCtrl',
    function($scope, $stateParams, $rootScope, $state, $http,Course_service,hot){
    var vm=this;
    vm.hot=hot;
    });