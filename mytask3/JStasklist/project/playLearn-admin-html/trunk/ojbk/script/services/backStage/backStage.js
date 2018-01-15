angular.module("app")
    .factory("backConstant", function () {

    })




































    .factory('steps',function () {
        return [
            {
                name:'图片',
                id:1
            },
            {
                name:'文本',
                id:2
            },
            {
                name:'文字&音频',
                id:3
            },
            {
                name:'视频',
                id:4
            },
            {
                name:'音频',
                id:5
            }
        ]
    })
    .factory('subject_type',function () {
        return [
            {
                id:0,
                name:'全部'
            },
            {
                id:1,
                name:'自有'
            },
            {
                id:2,
                name:'校内'
            },
            {
                id:3,
                name:'合作'
            }
        ]
    })
    .factory('subject_status',function () {
        return [
            {
                id:2,
                name:'全部'
            },
            {
                id:0,
                name:'下架'
            },
            {
                id:1,
                name:'上架'
            }
        ]
    })
    .factory('subject_grade',function () {
        return [
            {
                id:0,
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
    .factory('subjectLists',function (Course_service) {
        return Course_service.get_TechSubject({
            page:1,
            size:10
        })
    })
    //出版社
    .factory('Press',function () {
        return [
            {
                id:1,
                name:'人教版'
            },
            {
                id:2,
                name:'苏教版'
            },
            {
                id:3,
                name:'沪教版'
            },
            {
                id:4,
                name:'语文社'
            },
            {
                id:5,
                name:'北师大版'
            },
            {
                id:6,
                name:'湘教版'
            },
            {
                id:7,
                name:'西师版'
            },
            {
                id:8,
                name:'教版'
            },
            {
                id:9,
                name:'长春版'
            },
            {
                id:10,
                name:'其他版本'
            }
        ]

    })