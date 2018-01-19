angular.module('app')
    .filter('subject_type',function () {
        return function (params) {
            switch (params){
                case 1:
                    return '自有';
                case 2:
                    return '校内';
                case 3:
                    return '合作'
            }
        }
    })
    .filter('subject_status',function () {
        return function (params) {
            switch (params){
                case 0:
                    return '下架';
                case 1:
                    return '上架'
            }
        }
    })
    .filter('subject_status_operation',function () {
        return function (params) {
            switch (params){
                case 0:
                    return '上架';
                case 1:
                    return '下架'
            }
        }
    })
.filter('grade',function () {
    return function (params) {
        switch (params){
            case 1:
                return '一年级';
            case 2:
                return '二年级';
            case 3:
                return '三年级';
            case 4:
                return '四年级';
            case 5:
                return '五年级';
            case 6:
                return '六年级'
        }
    }
})
    .filter('freeze',function () {
        return function (params) {
            switch (params){
                case 0:
                    return '冻结';
                case 1:
                    return '解冻'
            }
        }
    })
    .filter('freezes',function () {
        return function (params) {
            switch (params){
                case 0:
                    return '解冻';
                case 1:
                    return '冻结'
            }
        }
    })