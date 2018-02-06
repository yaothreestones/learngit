angular.module("app")
    .factory('Course_service', function ($http, pathProject) {
        return {
            //上传图片
            getFile: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getFile(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (params) {
                        return $.param(params);
                    },
                    data: params
                })
            },
            //贝贝
            //前台手机登录接口
            get_phone: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPhone_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })

            },
            //第三方登录
            get_Open: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getOpen_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //微信绑定已有账号
            get_Bind: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getBind_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })

            },
             //微信基础接口授权   公用接口
            get_Wxconfig: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getWxconfig_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (params) {
                        return $.param(params);
                    },
                    data: params
                })
            },
            //微信绑定新账号
            //注册接口
            get_Enroll: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getEnroll_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //短信验证
            get_Send: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getSend_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: params
                })
            },
            //语音验证
            get_Call: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getCall_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: params
                })
            },
            //找回密码
            get_Forget: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getForget_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //填写个人资料
            get_Detail: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getDetail_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //是否注册验证
            get_Status: function (phones) {
                return $http({
                    method: 'post',
                    url: pathProject.getStatus_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: phones
                })
            },
            //搜索 课程
            get_Course: function (params) {
                return $http.get(pathProject.getCourse_rel(), params)
            },
            //搜索 课时
            get_lessonPeriod: function (params) {
                return $http.get(pathProject.getlessonPeriod_rel(), params)
            },
            //首页 学习星  用户击败
            get_StudyInformation: function (params) {
                return $http.get(pathProject.getStudyInformation_rel(), params)
            },
            //用户击败
            get_Studyinfo: function (params) {
                return $http.get(pathProject.getStudyinfo_rel(), params)
            },

            //首页热门推荐（8个展示）
            get_Recommend: function (params) {
                return $http.get(pathProject.getRecommend_rel(), params)
            },
            //首页 我的课程
            get_RecordList: function (params) {
                return $http.get(pathProject.getRecordList_rel(), params)
            },
            //科目list
            get_SubjectList: function (params) {
                return $http.get(pathProject.getSubjectList_rel(), params)
            },
            //同步预习接口
            //查看用户绑定教材详情
            get_BookLink: function (params) {
                return $http.get(pathProject.getBookLink_url(), params)
            },
            //获取教材列表
            get_BookList: function (params) {
                return $http.get(pathProject.getBookList_url(), params)
            },
            // 查看教材详情
            get_Books: function (id) {
                return $http.get(pathProject.getBook_url(id))
            },
            //-同步预习-教材-课时列表接口
            get_BookLessonPeriod: function (params) {
                return $http({
                    method: "GET",
                    url: pathProject.getBookLessonPeriod_url(),
                    headers: {'Content-Type': 'application/json'},
                    params: params
                })

            },
            //同步预习-换帮教材接口put    //同步预习-添加用户绑定教材接口post        一个接口 方法不同
            get_BookBind: function (id) {
                return $http.post(pathProject.getBookBind_url(id))
            },
            //同步预习-课时列表的资料统计接口

            get_LessonPeriod: function (id) {
                return $http.get(pathProject.getLessonPeriod_url(id))
            },


            //萌萌哒
            //我的/修改密码
            get_ChangePwd: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getChangePwd_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                });
            },
            //我的/课程记录列表
            get_Record: function (params) {
                return $http.get(pathProject.getRecord_url(), params)
            },
            //我的/课程记录/删除多个
            get_DeleteAll: function (params) {
                return $http({
                    method: 'delete',
                    url: pathProject.getDeleteAll_url(),
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: params
                });
            },
            //我的/课程记录/删除单个
            idDelet: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.idDelet(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                });
            },
            getUserFavLessonList: function () {
                return $http.get(pathProject.getUserFavLessonList());
            },
            getUserFavPeriodList: function () {
                return $http.get(pathProject.getUserFavPeriodList());
            },
            putSuggetByUser: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.putSuggetByUser(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    params: params
                });
            },
            resetUserDetail: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.resetUserDetail(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                });
            },
            //我的 签到
            getSign: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getSign(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function (data) {
                        return $.param(data)
                    },
                    data: data
                });
            },
            //我的  用户信息
            userinfo: function (params) {
                return $http.get(pathProject.userinfo(), params);
            },
            //我的 消息列表
            userMessage: function (params) {
                return $http.get(pathProject.userMessage(), params);
            },
            //我的消息详情
            userMessageSee:function (id) {
                return $http.get(pathProject.userMessageSee(id));
            },
            //我的资料列表
            myProfile: function (params) {
                return $http.get(pathProject.myProfile(), params);
            },
            //确认邮箱
            changeMail: function (email, dataIds) {
                return $http({
                    method: 'post',
                    url: pathProject.changeMail(email),
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: dataIds
                });
            },
            //修改用户信息
            edit_userInfo: function (params) {
                return $http({
                    method: "put",
                    url: pathProject.editUserInfo(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //资讯列表
            seeklist: function (params) {
                return $http({
                    method: "get",
                    url: pathProject.seeklist(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: params
                })
            },
            //资讯详情
            seekDetails: function (id) {
                return $http.get(pathProject.seekDetails(id))
            },
            //使用帮助列表
            usingHelp: function (params) {
                return $http.get(pathProject.usingHelp(), params)
            },
            //使用帮助详情
            HelpDetails: function (id) {
                return $http.get(pathProject.HelpDetails(id))
            },
            //收藏课程接口
            courseCollect: function (params) {
                return $http.get(pathProject.courseCollect(), params)
            },
            //收藏课时接口
            lessonCollect: function (params) {
                return $http.get(pathProject.lessonCollect(), params)
            },


            //姚磊
            //获取课程列表接口
            get_course_list: function (params) {
                return $http.get(pathProject.getCourse_url(), params)
            },
            //获取单个课程详情接口
            get_course_detail: function (id) {
                return $http.get(pathProject.getCourseDetail_url(id))
            },
            //获取课时列表接口
            get_period_list: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPeriodList_url(),
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data)
                    },
                    data: data
                });
            },
            //解锁课程
            get_course_unlock: function (params) {
                return $http.get(pathProject.getCourseUnlock_url(params))
            },
            //课程价格展示
            get_course_price: function (id) {
                return $http.get(pathProject.getCoursePrice_url(id))
            },
            //获取单个课时详情
            get_period_detail: function (data) {
                return $http.get(pathProject.getPeriodDetail_url(data))
            },
            //课时解锁
            get_period_unlock: function (id) {
                return $http.get(pathProject.getPeriodUnlock_url(id))
            },
            //课时下任务列表
            get_mission_list: function (id) {
                return $http.get(pathProject.getMissionList_url(id))
            },
            //获取任务详情接口
            get_task_list: function (params) {
                return $http.get(pathProject.getMissionDetail_url(params))
            },
            //学习星解锁课程
            get_pay_course_by_star: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPayCourseByStar_url(),
                    data: data,
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data)
                    }
                })
            },
            //学习星解锁课时
            get_pay_period_by_star: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPayPeriodByStar_url(),
                    data: data,
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data)
                    }
                })
            },
            //教材价格展示
            get_book_unlock: function (id) {
                return $http.get(pathProject.getBookUnlock_url(id))
            },
            //学习星解锁教材
            get_pay_book_by_star: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getPayBookByStar_url(),
                    data: data,
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data)
                    }
                })
            },
            //微信预下单接口
            get_wx_prepay: function (params) {
                return $http.post(pathProject.getWXPrepay_url(), params)
            },

            //课程开始接口
            get_course_start_study: function (id) {
                return $http.post(pathProject.getCourseStartStudy_url(id))
            },
            //课程完成接口
            get_course_end_study: function (id) {
                return $http.put(pathProject.getCourseEndStudy_url(id))
            },
            //课时开始接口
            get_period_start_study: function (id) {
                return $http.get(pathProject.getPeriodStartStudy_url(id))
            },
            //课时完成接口
            get_period_end_study: function (id) {
                return $http.get(pathProject.getPeriodEndStudy_url(id))
            },
            //相关课程接口
            get_course_about: function (id) {
                return $http.get(pathProject.getCourseAbout_url(id))
            },
            //下一课时接口
            get_next_period: function (id) {
                return $http.get(pathProject.getNextPeriod_url(id))
            },
            //任务开始接口
            get_task_start_study: function (id) {
                return $http.get(pathProject.getTaskStartStudy_url(id))
            },
            //任务完成接口
            get_task_end_study: function (id) {
                return $http.get(pathProject.getTaskEndStudy_url(id))
            },
            //购买资料接口
            get_data_buy: function (params) {
                return $http.get(pathProject.getDataBuy_url(), params)
            },
            //收藏课程接口
            get_courseCollect: function (data, params) {
                return $http.post(pathProject.getCourseCollect_url(), data, params)
            },
        }
    });