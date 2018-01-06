angular.module('app')
    .filter('lessonPeriodStatus',function () {
        return function (params) {
            switch(params){
                case 0 :
                    return '未完成';
                case 1 :
                    return '进行中';
                case 2 :
                    return '已完成'
            }
        }
    })
    .filter('lessonPeriodClass',function () {
        return function (params) {
            switch (params) {
                case 0 :
                    return 'mission_unbegun';
                case 1 :
                    return 'mission_studying';
                case 2 :
                    return 'mission_finish'
            }
        }

    })