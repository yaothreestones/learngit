angular.module('app')
    .controller("mail", ["$state", "$stateParams", "$http", function ($state, $stateParams, $http) {
        var vm = this;
        var data = [];
        vm.send = function () {
        // 相同的代码省略
        //             $.ajax({
        //                 method:"POST",
        //                 url:"/a/u/email/send?email=785361174@qq.com",
        //                 data:'[1]',
        //                 contentType: 'application/json',
        //                 success: function (res) {
        //                     console.log(res)
        //                 }
        //             })
            $http({
                url: '/a/u/email/send?email=785361174@qq.com',
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                data: "[1,2]"
            })
                alert('发送成功')
        }

    }])