angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $locationProvider.hashPrefix("!");
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {serie: true});
            }
        };
        $locationProvider.hashPrefix("");
        $urlRouterProvider.otherwise("app/begin");
        $stateProvider
            .state("app", {
                url: "/app",
                templateUrl: 'view/app/app.html',
                controller: 'appCtrl',
                abstract: true, // true 表明此状态不能被显性激活，只能被子状态隐性激活
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/app/app.css",
                        "style/app/coping.css",//顶部
                        "style/app/base.css",//底部
                        "script/directives/modalData/modalData.css",//提示模态框
                        "script/controllers/app/app.js",
                    ]),
                }
            })
            //前台开始页面
            .state("app.begin", {
                url: "/begin",
                templateUrl: 'view/app/begin.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/app/app.css",
                        // "script/controllers/app/begin.js"
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.isShow = false;
                        $rootScope.config.footNav.isShow = false;

                    }
                }

            })
            //登录
            .state("app.login", {
                url: "/login",
                templateUrl: 'view/app/login.html',
                controller: 'loginCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/app/login.js"
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '登录';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                },

            })
            //微信授权
            .state("app.wechat", {
                url: "/wechat",
                templateUrl: 'view/app/wechat.html',
                // controller: 'wechatCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        // "script/controllers/app/wechat.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '微信授权';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //关联回家学习账号
            .state("app.binding", {
                url: "/binding",
                templateUrl: 'view/app/binding.html',
                // controller: 'bindingCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        // "script/controllers/app/bingding.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '关联回家学习账号';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            // 注册并绑定回家学习账号
            .state("app.newAccount", {
                url: "/newAccount",
                templateUrl: 'view/app/newAccount.html',
                // controller: 'newAccountCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        // "script/controllers/app/newAccount.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '绑定回家学习账号';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //前台注册页面
            .state("app.enroll", {
                url: "/enroll",
                templateUrl: 'view/app/enroll.html',
                controller: 'enrollCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/app/enroll.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '注册';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //找回密码
            .state("app.retrieve", {
                url: "/retrieve",
                templateUrl: 'view/app/retrieve.html',
                controller: 'retrieveCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/app/retrieve.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '找回密码';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.isSteep = false;
                    }
                }
            })
            //个人资料
            .state("app.profile", {
                url: "/profile",
                templateUrl: 'view/app/profile.html',
                controller: 'profileCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/app/profile.js",
                        "style/communal/mobileSelect.css",
                        "script/communal/mobileSelect.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '个人资料';
                        $rootScope.config.headNav.Skip.isShow = true;
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //首页
            .state("app.page", {
                url: "/page",
                templateUrl: 'view/homePage/page.html',
                controller: 'pageCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/homePage/page.js",
                        'style/course/course.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '玩转学习';
                        $rootScope.config.headNav.search.isShow = true;
                        $rootScope.config.footNav.isShow = true;
                    }
                }
            })

            //排行榜
            .state("app.ranking", {
                url: "/ranking",
                templateUrl: 'view/homePage/ranking.html',
                // controller: 'rankingCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        // "script/controllers/homePage/ranking.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '排行榜';
                        $rootScope.config.headNav.prompt.isShow = true;
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.headNav.isSteep = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.promptList.isShow = false;
                    }
                }
            })
            //搜索
            .state("app.rakeThrough", {
                url: "/rakeThrough",
                templateUrl: 'view/homePage/rakeThrough.html',
                controller: 'rakeThroughCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/homePage/rakeThrough.js",
                        'script/services/services_for_course.js'
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '搜索';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //同步预习
            .state("app.search", {
                url: "/search?preview",
                templateUrl: 'view/homePage/search.html',
                controller: 'searchCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/homePage/search.js",
                        'script/services/services_for_course.js'
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '教材';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.screen.isShow = true;
                    }
                }
            })
            //同步预习  课时列表
            .state("app.teaching", {
                url: "/teaching?preview",
                templateUrl: 'view/homePage/teaching.html',
                controller: 'teachingCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "script/controllers/homePage/teaching.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '教材';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //同步预习  第n课
            .state("app.lesson", {
                url: "/lesson",
                templateUrl: 'view/homePage/lesson.html',
                // controller: 'lessonCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        // "script/controllers/homePage/lesson.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '第一课';
                        $rootScope.config.headNav.subject = '龟兔赛跑';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //资讯
            .state("app.seek", {
                url: "/seek",
                templateUrl: 'view/service/seekAdvice/seek.html',
                // controller: 'seekCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                        "style/service/seekList.css",
                        "style/service/mui.min.css",
                        "style/service/swiper-3.3.1.min.css",
                        "script/controllers/service/seek/seekCtrl.js",
                        "script/directives/seek/mui.min.js",
                        "script/directives/seek/seek.js",
                        "script/directives/seek/swiper-3.3.1.min.js",
                        "script/directives/seek/tools.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '资讯';
                        $rootScope.config.headNav.search.isShow = true;
                    }
                }
            })
            //详情
            .state("app.seekDetails", {
                url: "/seekDetails",
                templateUrl: 'view/service/seekAdvice/seekDetails.html',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '资讯';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.headNav.share.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //我的
            .state("app.mine", {
                url: "/mine",
                templateUrl: 'view/service/mine/mine.html',
                controller: 'mineCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                        "script/controllers/service/mine/mineCtrl.js",
                        "script/controllers/service/mine/mine.js",
                        "script/directives/showAlert/showAlert.js",
                        "style/service/register.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.isShow = false;
                        $rootScope.config.footNav.isShow = true;
                    }
                }
            })
            //我的-----個人資料
            .state("app.personal", {
                url: "/personal",
                templateUrl: 'view/service/mine/personal.html',
                controller: 'personalCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                        "script/controllers/service/mine/personalCtrl.js"
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '个人资料';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.backBtn.isShow = true;
                    }
                }
            })
            //课程记录
            .state("app.record", {
                url: "/record",
                templateUrl: 'view/service/mine/record.html',
                // controller: 'personalCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                        "script/directives/delete/delete.js"
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '课程记录';
                        $rootScope.config.headNav.cancel = '取消';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.augment.isShow = true;
                        $rootScope.config.headNav.backBtn.isShow = true;
                    }
                }
            })
            //我的收藏
            .state("app.collect", {
                url: "/collect",
                templateUrl: 'view/service/mine/collect.html',
                // controller: 'personalCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                        "script/controllers/service/mine/collectCtrl.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '我的收藏';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.backBtn.isShow = true;
                    }
                }
            })
            //我的资料
            .state("app.means", {
                url: "/means",
                templateUrl: 'view/service/mine/means.html',
                // controller: 'personalCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '我的资料';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.backBtn.isShow = true;
                    }
                }
            })
            //消息
            .state("app.message", {
                url: "/message",
                templateUrl: 'view/service/mine/message.html',
                // controller: 'personalCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '我的消息';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.backBtn.isShow = true;
                    }
                }
            })
            //消息详情
            .state("app.particulars", {
                url: "/particulars",
                templateUrl: 'view/service/mine/particulars.html',
                // controller: 'personalCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '怎样学好小学英语，你知道吗？';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.headNav.rubbish.isShow = true;
                    }
                }
            })
            //设置
            .state("app.install", {
                url: "/install",
                templateUrl: 'view/service/mine/install.html',
                controller: 'installCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                        "script/controllers/service/mine/install.js",
                        "script/controllers/service/mine/installCtrl.js",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '设置';
                        $rootScope.config.headNav.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                        $rootScope.config.headNav.backBtn.isShow = true;
                    }
                }
            })
            //密码修改
            .state("app.changePassword", {
                url: "/changePassword",
                templateUrl: 'view/service/mine/changePassword.html',
                // controller: 'installCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '密码修改';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //关于我们
            .state("app.aboutStage", {
                url: "/aboutStage",
                templateUrl: 'view/service/mine/aboutStage.html',
                // controller: 'installCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '关于我们';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //使用帮助
            .state("app.usinghelp", {
                url: "/usinghelp",
                templateUrl: 'view/service/mine/usinghelp.html',
                // controller: 'installCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '如何购买试卷？';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            //意见反馈
            .state("app.feedbackStage", {
                url: "/feedbackStage",
                templateUrl: 'view/service/mine/feedbackStage.html',
                // controller: 'installCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        "style/service/seek.css",
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '意见反馈';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })

































































            //课程
            .state("app.course", {
                url: "/course",
                templateUrl: 'view/course/course.html',
                controller: 'courseCtrl',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/courseCtrl.js",
                        'view/course/course.html',
                        'style/course/course.css',
                        'script/services/services_for_course.js'
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '课程';
                        $rootScope.config.headNav.prompt.isShow = true;
                    }
                }
            })
            .state("app.courseDetails", {
                url: "/course/courseDetails",
                templateUrl: 'view/course/courseDetails.html',
                controller: 'courseDetailsCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/courseDetailsCtrl.js",
                        'view/course/courseDetails.html',
                        'style/course/course.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '课程';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }

            })
            .state("app.data", {
                url: "/data/data?there&choose&preview",
                templateUrl: 'view/course/dataPay/data.html',
                controller: 'dataCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/dataPay/data.js",
                        'view/course/dataPay/data.html',
                        'style/data/data.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '购买试卷';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            .state("app.dataPay", {
                url: "/data/dataPay?there&payment&choose&preview",
                templateUrl: 'view/course/dataPay/dataPay.html',
                controller: 'dataPayCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/dataPay/dataPayCtrl.js",
                        'view/course/dataPay/dataPay.html',
                        'style/data/data.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '确认邮件地址';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            .state("app.changeEmail", {
                url: "/data/changeEmail?payment&choose&preview",
                templateUrl: 'view/course/dataPay/changeEmail.html',
                controller: 'changeEmailCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/dataPay/changeEmailCtrl.js",
                        'view/course/dataPay/changeEmail.html',
                        'style/data/data.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '修改默认邮箱';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            .state("app.period", {
                url: "/course/period",
                templateUrl: 'view/course/period/period.html',
                controller: 'periodCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/period/periodCtrl.js",
                        'view/course/period/period.html',
                        'style/course/course.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '课时详情';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            .state("app.mission", {
                url: "/course/period/mission",
                templateUrl: 'view/course/mission/mission.html',
                controller: 'missionCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/mission/missionCtrl.js",
                        'view/course/mission/mission.html',
                        'style/course/course.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '任务详情';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
            .state("app.periodFinish", {
                url: "/course/period/periodFinish",
                templateUrl: 'view/course/period/periodFinish.html',
                controller: 'periodFinishCtrl as vm',
                resolve: {
                    loadMyFile: _lazyLoad([
                        //"style/service/seek.css",
                        "script/controllers/course/period/periodFinishCtrl.js",
                        'view/course/period/periodFinish.html',
                        'style/course/course.css',
                    ]),
                    configByRouter: function ($rootScope) {
                        $rootScope.config.headNav.title = '第一课 和倍问题';
                        $rootScope.config.headNav.backBtn.isShow = true;
                        $rootScope.config.footNav.isShow = false;
                    }
                }
            })
    }

]);
