angular.module('app')
    .factory('classes',function () {
        return [
            {
                id:null,
                name:'全部'
            },
            {
                id:1,
                name:'一年级'
            },
            {
                id:2,
                name:'二年级'
            },
            {
                id:3,
                name:'三年级'
            },
            {
                id:4,
                name:'四年级'
            },
            {
                id:5,
                name:'五年级'
            },
            {
                id:6,
                name:'六年级'
            }
        ]
    })
    .factory('subjects',function () {
        return [
            {
                id:null,
                name:'全部'
            },
            {
                id:1,
                name:'语文'
            },
            {
                id:2,
                name:'数学'
            },
            {
                id:3,
                name:'英语'
            },
            {
                id:4,
                name:'逻辑思维'
            },
            {
                id:5,
                name:'常春藤芽'
            }
        ]
    })

.factory('range',function () {
        return [
            {
                id:1,
                name:'课程'
            },
            {
                id:2,
                name:'课时'
            }
        ]
    })
    .factory('getStar',function () {
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
    .factory('gotStar',function () {
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






