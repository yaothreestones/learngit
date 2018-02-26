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
                case 0:
                    return '全部';
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
                case 0:
                    return '开始学习';
                case 1:
                    return '继续学习';
                case 2:
                    return '学习完成';
                case 3:
                    return '立即解锁'
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
            if (param === 0) {
                return '资料';
            } else {
                return '已购'
            }
        }
    })
    .filter('lockImg',function () {
        return function (lock) {
            switch (lock){
                case 0:
                    return null;
                case 1:
                    return "image/app/lock.png";
                case 2:
                    return "image/app/clear.png"
            }

        }
    })
    //判断播放按钮的数字过滤成文字
    .filter('playMusic',function () {
        return function (param) {
            if(param === 1){
                return '播放'
            }else if(param === 0){
                return '暂停'
            }
        }
    })
    .filter('task_status',function () {
        return function (param) {
            if(param === 0){
                return "已完成"
            } else if(param === 1){
                return "进行中"
            } else if(param === 2){
                return "未开始"
            }
        }
    })
    .filter('getStar',function () {
        return function (x) {
            switch (x){
                case 1:
                    return "image/app/study1.png";
                case 2:
                    return "image/app/study2.png";
                case 3:
                    return "image/app/study3.png";
                case 4:
                    return "image/app/study4.png";
                case 5:
                    return "image/app/study5.png"
            }
        }
    })
    .filter('gotStar',function () {
        return function (x) {
            switch (x){
                case 1:
                    return "image/app/isStudy1.png";
                case 2:
                    return "image/app/isStudy2.png";
                case 3:
                    return "image/app/isStudy3.png";
                case 4:
                    return "image/app/isStudy4.png";
                case 5:
                    return "image/app/isStudy5.png"
            }
        }
    })

    .filter('payType',function () {
        return function (param) {
            switch (param){
                case 1:
                    return '学习星解锁';
                case 2:
                    return '微信支付';
            }

        }
    })
.filter('stepBackColor',function () {
    return function (x) {
        switch (x){
            case 0:
                return '#ffc107';
            case 1:
                return '#03a9f3';
            case 2:
                return '#f36c5e';
            case 3:
                return '#8ec351';
            case 4:
                return '#ffce58'
        }
    }
})