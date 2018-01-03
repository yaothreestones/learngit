angular.module('app')
    .factory('classes',function () {
        return [
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