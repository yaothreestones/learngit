angular.module("app")
    .factory('Course_service',function ($http,pathProject) {
        return {
            //贝贝
            //资料管理lest
            get_Admin:function (params) {
                return $http.get(pathProject.getAdmin_url(),params)
            },

            //萌萌哒
            get_Party:function (params) {
                return $http.get(pathProject.getParty_url(),params)
            },


            //姚磊

        }
    });