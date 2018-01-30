angular.module('app').controller('hotCtrl',
    function($scope, $stateParams, $rootScope, $state, $http,Course_service,hot){
    var vm=this;
    vm.hot=hot;
    vm.hots=function (id) {
        $state.go("backStage.contentManage.groom",{id:id,size:8}, {reload: true});
    }
    });