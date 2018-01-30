/**
 * Created by gmisl on 17-12-14.
 */
//app 头尾导航
angular.module("app")
    .run(['$rootScope',  function ($rootScope) {
        $rootScope.config = {
            //顶部
            headNav: {
                isShow: true,
                isSteep: false,//默认背景颜色
                //标题
                title: '',//字体大小总是一样
                subject: '',
                cancel: '',
                //返回
                backBtn: {
                    //返回按钮 使用原生操作
                    isShow: false,
                },
                //课程 课时返回首页
                revert: {
                    isShow: false,
                },
                //跳转
                Skip: {
                    isShow: false,
                },
                //搜索
                search: {
                    isShow: false,
                },
                //提示框
                prompt: {
                    isShow: false,
                },
                //提示框列表
                promptList: {
                    isShow: false,
                },
                //筛选
                screen: {
                    isShow: false,
                },
                //筛选列表
                screenList: {
                    isShow: false,
                },
                //分享
                share: {
                    isShow: false,
                },
                //完成
                finish: {
                    isShow: false,
                },
                backBtnExp: {
                    isShow: false,
                },
                //课程记录
                rubbish: {
                    isShow: false,
                    url: ''
                },
                augment: {
                    isShow: false
                },
                cancelDelete: {
                    isShow: false,
                    url: ''
                }
                //课程记录

            },
            //底部
            footNav: {
                isShow: true,
            }
        }
        $rootScope.$on('$stateChangeStart', function () {
            $rootScope.config.headNav.subject = '';
            $rootScope.config.headNav.isShow = true;
            $rootScope.config.headNav.isSteep = false;
            $rootScope.config.footNav.isShow = true;
            $rootScope.config.headNav.backBtn.isShow = false;
            $rootScope.config.headNav.revert.isShow = false;
            $rootScope.config.headNav.Skip.isShow = false;
            $rootScope.config.headNav.search.isShow = false;
            $rootScope.config.headNav.screen.isShow = false;
            $rootScope.config.headNav.prompt.isShow = false;
            $rootScope.config.headNav.screenList.isShow = false;
            $rootScope.config.headNav.promptList.isShow = false;
            $rootScope.config.headNav.share.isShow = false;
            $rootScope.config.headNav.finish.isShow = false;
            $rootScope.config.headNav.backBtnExp.isShow = false;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            // 课程记录
            $rootScope.config.headNav.cancelDelete.isShow = false;
            $rootScope.config.headNav.rubbish.isShow = false;
            $rootScope.config.headNav.augment.isShow = false;
            // 课程记录
        });
    }])