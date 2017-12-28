angular.module("app")
    .controller("personalCtrl",["$stateParams",function ($stateParams) {
        var vm = this;
        vm.data={
            img:"image/mine/drawing.png",
            nike:"萌宝儿",
            grade:"三年级",
            mail:"mengbaoer@163.com",
        }

        vm.picker = function () {
            weui.picker([{
                    label: '幼升小',
                    value: '幼升小'
                }, {
                    label: '一年级',
                    value: '一年级'
                }, {
                    label: '二年级',
                    value: '二年级'
                }, {
                    label: '三年级',
                    value: '三年级'
                }, {
                    label: '四年级',
                    value: '四年级'
                }, {
                    label: '五年级',
                    value: '五年级'
                }, {
                    label: '六年级',
                    value: '六年级'
                }]
                )
        }
    }])