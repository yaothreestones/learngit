angular.module('app')
    .filter('lessonPeriodStatus', function () {
        return function (params) {
            switch (params) {
                case 0 :
                    return '未开始';
                case 1 :
                    return '进行中';
                case 2 :
                    return '已完成'
            }
        }
    })
    .filter('lessonPeriodClass', function () {
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
    .filter('grade', function () {
        return function (params) {
            switch (params) {
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
    .filter('studyStatus', function () {
        return function (status) {
            switch (status) {
                case 1:
                    return '立即解锁';
                case 2:
                    return '开始学习';
                case 3:
                    return '继续学习'
            }
        }
    })
    .filter('time', function () {
        return function (params) {
            switch (params) {
                case 1:
                    return '一';
                case 2:
                    return '二';
                case 3:
                    return '三';
                case 4:
                    return '四';
                case 5:
                    return '五';
                case 6:
                    return '六'
            }
        }
    })
    .filter('data', function () {
        return function (param) {
            if (param === 1) {
                return '资料';
            } else {
                return '已购'
            }
        }
    })