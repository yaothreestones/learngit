// angular.module('myApp',[])
//     .factory('article',function(){
//         return {
// //Article列表接口
//             getArticlelist_url: "/a/article/search",
//             // 获取article
//             getArticle_url: function (id) {
//                 return "/a/article/" + id;
//             },
// // 新增article
//             addArticle_url: "/a/u/article",
//             // 删除article
//             delArticle_url: function (id) {
//                 return "/a/u/article/" + id;
//             },
// // 编辑article
//             editArticle_url: function (id) {
//                 return "/a/u/article/" + id;
//             },
// //修改article的上架/下架
//             changeArticleStatus_url: function (id, status) {
//                 return "/a/u/article/status?id=" + id + "&status=" + status;
//             }
//         }
//     })

angular.module('myApp',[])
.config(function($httpProvider){

    $httpProvider.defaults.transformRequest = function(obj){
        var str = [];
        for(var p in obj){
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }

    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

})
.controller('myCtrl',['$scope','login1',function ($scope,login1) {
    $scope.user = {};
    $scope.submit = function () {
         var params = {
            name: $scope.user.name,
            pwd: $scope.user.pwd
        }
        login1.login(params).then(function (res) {
            if (res.data.code === 0) {
                alert('success')
                }else {
                    alert('failed')
                }
            })
        }

    }])
    .factory('id',function () {
        return {
            Login_url:'/carrots-admin-ajax/a/login'
        }
    })
    .factory('login1',function ($http,id) {
        return {
            login:function (params) {
                return $http.post(id.Login_url,params)
            }
        }
    })