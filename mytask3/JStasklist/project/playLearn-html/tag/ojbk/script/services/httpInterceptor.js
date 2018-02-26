angular.module("app")
    .factory('HttpInterceptor', ['$q', "$timeout",HttpInterceptor]);

function HttpInterceptor($q, $location) {
    return {
        request: function (config) {
            return config;
        },
        requestError: function (err) {
            return $q.reject(err);
        },
        response: function (res) {
            if (-2 === res.data.code) {
                console.log(res)
                //远程服务器无响应
                var dialog = bootbox.dialog({
                    message: '<p class="text-center" style="margin: auto">用户未登陆.请先登陆。</p>',
                    closeButton: false
                });
                setTimeout(function () {
                    dialog.modal('hide');
                },3000)
                $location.path('/being');
            } else if (-3 === res.data.code) {
                // 处理各类自定义错误
                var dialog = bootbox.dialog({
                    message: '<p class="text-center" style="margin: auto">您的账户已被冻结，若要继续使用，请联系工作人员。</p>',
                    closeButton: false
                });
                setTimeout(function () {
                    dialog.modal('hide');
                },3000)
                $location.path('/being');
            }
            return res;
        },
        responseError: function (err) {

            return $q.reject(err);
        }
    };
}

// 添加对应的 Interceptors
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(HttpInterceptor);
}]);
