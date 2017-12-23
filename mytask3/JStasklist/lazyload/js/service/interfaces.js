angular.module('myApp')
    .factory('login1',function ($http,ajax) {
        return {
            login_in:function (params) {
                return $http.post(ajax.login_url,params).then(function (res) {
                    if (res.data.code === 0) {
                        $state.go('backStage')
                    }else {
                        alert('failed')
                    }
                })
            },
            articleList_in:function () {
                return $http.get(ajax.articleList_url)
            },
            logOut_in:function () {
                return $http.post(ajax.logOut_url)
            }

        }
    })

    .factory('ajax',function () {
        return {
            login_url:"/carrots-admin-ajax/a/login",

            articleList_url: '/carrots-admin-ajax/a/article/search',

            logOut_url: '/carrots-admin-ajax/a/logout'
        }
    })