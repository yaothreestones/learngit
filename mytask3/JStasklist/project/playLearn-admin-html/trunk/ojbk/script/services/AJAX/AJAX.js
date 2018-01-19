angular.module("app")
    .factory("pathProject",function () {
        return {
            //公用上传图片
            getFile_url:function () {
                return "/a/u/admin/file/up"
            },
            //贝贝
            //资料管理
            //列表
            getMaterials_url:function () {
                return "/a/u/admin/materials/list"
            },
            //查看
            getMaterialsId_url:function (id) {
                return "/a/u/admin/materials/"+id
            },
            //新增
            getMaterialsNew_url:function () {
                return "/a/u/admin/materials"
            },
            //删除
            getMaterialsDelete_url:function () {
                return "/a/u/admin/materials/{id}"
            },
            //编辑
            getMaterialsPut_url:function () {
                return "/a/u/admin/materials/{id}"
            },
            //合作管理
            //获得list
            getCompany_url:function () {
                return "/a/u/admin/company/list"
            },
            //新增
            getCompanyAdd_url:function () {
                return "/a/u/admin/company/add"
            },
            //编辑
            getCompanyNewly_url:function () {
                return "/a/u/admin/company"
            },
            //查看
            getCompanyId_url:function (id) {
                return "/a/u/admin/company/"+id
            },
            //删除
            getCompanyDelete_url:function (id) {
                return "/a/u/admin/company/"+id
            },
            //冻结
            getCompanyStatus_url:function () {
                return "/a/u/admin/company/status"
            },

            //热门推荐管理
            //list
            getRecommend_url:function (id) {
                return "/a/u/admin/recommend/grade/"+id
            },
            //编辑
            getRecommendNewly_url:function () {
                return "/a/u/admin/recommend/course"
            },
            //后台/热门推荐管理/编辑/课程名称下拉框
            getRNewly_url:function () {
                return "/a/u/admin/course/options"
            },
            //查看
            getRecommendLook_url:function (id) {
                return "a/u/admin/course/recommend/"+id
            },








            //萌萌哒
            //客服
            //用户管理接口
            getParty_url:function () {
                return "playlearn/GET/a/u/admin/user/list"
            },
            //客服/用户管理/解冻、冻结接口
            getUnfreeze_url:function () {
                return "playlearn/PUT/a/u/admin/user/status"
            },
            //用户管理/收藏课程接口
            getSee_url:function () {
                return "playlearn/GET/a/u/admin/user/keep/course"
            },
            //用户管理/收藏课时接口
            getSubject_url:function () {
                return "playlearn/GET/a/u/admin/user/keep/lessionPeriod"
            },
            //用户管理/我的资料接口
            getMeans_url:function () {
                return "playlearn/GET/a/u/admin/admin/data"
            },

            //客服
            //资讯管理接口
            getInformation_url:function () {
                return "playlearn/GET/a/u/admin/information/all"
            },
            //资讯管理/增加接口
            getInformationAugment_url:function () {
                return "playlearn/POST/a/u/admin/information/add"
            },
            //资讯管理/查看接口
            getInformationSee_url:function () {
                return "playlearn/GET/a/u/admin/information/{id}"
            },
            //资讯管理/编辑接口
            getInformationEdit_url:function () {
                return "playlearn/PUT/a/u/admin/information"
            },
            //资讯管理/删除接口
            getInformationDelet_url:function () {
                return "playlearn/DELETE/a/u/admin/infomation"
            },

            //客服
            //注册统计接口
            getEnroll_url:function () {
                return "playlearn/GET/a/u/admin/user/enroll"
            },

            //客服
            //消息管理接口
            getMessage_url:function () {
                return "playlearn/GET/a/u/admin/news/all"
            },
            //消息管理/增加接口
            getMessageAugment_url:function () {
                return "playlearn/POST/a/u/admin/news"
            },
            //消息管理/查看接口
            getMessageSee_url:function () {
                return "playlearn/GET/a/u/admin/news/{id}"
            },
            //消息管理/删除接口
            getMessageDelet_url:function () {
                return "playlearn/DELETE/a/u/admin/news"
            },

            //客服
            //帮助管理接口
            getHelp_url:function () {
                return "playlearn/GET/a/u/admin/help/all"
            },
            //帮助管理/增加接口
            getHelpAugment_url:function () {
                return "playlearn/POST/a/u/admin/help/add"
            },
            //帮助管理/删除接口
            getHelpDelet_url:function () {
                return "playlearn/DELETE/a/u/admin/help"
            },
            //帮助管理/编辑接口
            getHelpEdit_url:function () {
                return "playlearn/PUT/a/u/admin/help"
            },
            //帮助管理/查看接口
            getHelpSee_url:function () {
                return "playlearn/GET/a/u/admin/help/{id}"
            },












































































































































































            //姚磊
            //教学管理模块
            //科目管理
            //获取教学管理科目管理科目列表接口
            getTechSubject_url:function () {
                return '/a/u/admin/subject/all'
            },
            //获取教学管理科目管理新增科目接口
            getTechAddSubject_url:function () {
                return '/playlearn/POST//a/u/admin/subject'
            },
            //获取教学管理科目管理编辑科目接口
            getTechEditSubject_url:function () {
                return '/playlearn/Put//a/u/admin/subject'
            },
            //获取教学管理科目管理删除科目接口
            getTechDeleteSubject_url:function (id) {
                return '/a/u/admin/subject/'+ id
            },
            //获取教学管理科目管理搜索科目接口
            getTechSearchSubject_url:function () {
                return '/a/u/admin/subject/search'
            },
            //获取教学管理科目管理科目上下架接口
            getTechStatusSubject_url:function () {
                return '/a/u/admin/subject/status'
            },

            //课程管理
            //获取教学管理课程管理课程列表接口
            getTechCourse_url:function () {
                return '/playlearn/GET//a/u/admin/course/list'
            },
            //获取教学管理课程管理新增课程接口
            getTechAddCourse_url:function () {
                return '/playlearn/Post//a/u/admin/course/addition'
            },
            //获取教学管理课程管理查看课程接口
            getTechViewCourse_url:function () {
                return '/playlearn/GET//a/u/admin/course'
            },
            //获取教学管理课程管理编辑课程接口
            getTechEditCourse_url:function () {
                return '/playlearn/Put/'
            },
            //获取教学管理课程管理删除课程接口
            getTechDeleteCourse_url:function (courseId) {
                return '/playlearn/Delete//a/u/admin/course/'+ courseId
            },
            //获取教学管理课程管理搜索课程接口
            getTechSearchCourse_url:function () {
                return '/playlearn/get/a/u/admin/search/course'
            },

            //课时管理
            //获取教学管理课时管理课时列表接口
            getTechPeriod_url:function () {
                return '/playlearn/GET//a/u/admin/subject/lessonPeriod/list'
            },
            //获取教学管理课时管理新增课时接口
            getTechAddPeriod_url:function () {
                return '/playlearn/Post//a/u/admin/lessonPeriod'
            },
            //获取教学管理课时管理查看课时接口
            getTechViewPeriod_url:function () {
                return '/playlearn/get//a/u/admin/subject/lessonPeriod/detail'
            },
            //获取教学管理课时管理编辑课时接口
            getTechEditPeriod_url:function () {
                return '/playlearn/Put//a/u/admin/subject/lessonPeriod/'
            },
            //获取教学管理课时管理删除课时接口
            getTechDeletePeriod_url:function () {
                return '/playlearn/Delete//a/u/admin/lessonPeriod/'
            },

            //任务管理
            //获取教学管理任务管理任务列表接口
            getTechMission_url:function () {
                return '/playlearn/GET//a/u/admin/subject/task/list'
            },
            //获取教学管理任务管理新增任务接口
            getTechAddMission_url:function () {
                return '/playlearn/Post//a/u/admin/subject/task/addition'
            },
            //获取教学管理任务管理查看任务接口
            getTechViewMission_url:function () {
                return '/playlearn/get//a/u/admin/subject/task'
            },
            //获取教学管理任务管理编辑任务接口
            getTechEditMission_url:function () {
                return '/playlearn/Put//a/u/admin/task/'
            },
            //获取教学管理任务管理删除任务接口
            getTechDeleteMission_url:function () {
                return '/playlearn/Delete//a/u/admin/task/'
            },


            //同步预习管理模块
            //教材管理
            //获取同步预习管理教材管理教材列表接口
            getPreviewDatum_url:function () {
                return '/a/u/admin/book/list'
            },
            //获取同步预习管理教材管理新增教材接口
            getPreviewAddDatum_url:function () {
                return '/a/u/admin/book/addition'
            },
            //获取同步预习管理教材管理查看教材接口
            getPreviewViewDatum_url:function () {
                return '/a/u/admin/book'
            },
            //获取同步预习管理教材管理编辑教材接口
            getPreviewEditDatum_url:function () {
                return '/a/u/admin/book/'
            },
            //获取同步预习管理教材管理删除教材接口
            getPreviewDeleteDatum_url:function () {
                return '/a/u/admin/book'
            },

            //课时管理
            //获取同步预习管理课时管理课时列表接口
            getPreviewPeriod_url:function () {
                return '/playlearn/GET//a/u/admin/book/lessonPeriod/list'
            },
            //获取同步预习管理课时管理新增课时接口
            getPreviewAddPeriod_url:function () {
                return '/playlearn/Post//a/u/admin/lessonPeriod/addition/'
            },
            //获取同步预习管理课时管理获取课时详情接口
            getPreviewViewPeriod_url:function () {
                return '/playlearn/get//a/u/admin/lessonPeriod/'
            },
            //获取同步预习管理课时管理编辑课时接口
            getPreviewEditPeriod_url:function () {
                return '/playlearn/Put//a/u/admin/lessonPeriod/'
            },
            //获取同步预习管理课时管理删除课时接口
            getPreviewDeletePeriod_url:function () {
                return '/playlearn/Delete//a/u/admin/lessonPeriod/'
            },

            //任务管理
            //获取同步预习管理任务管理任务列表接口
            getPreviewMission_url:function () {
                return '/playlearn/GET//a/u/admin/task/list'
            },
            //获取同步预习管理任务管理新增任务接口
            getPreviewAddMission_url:function () {
                return '/playlearn/Post//a/u/admin/task/addition'
            },
            //获取同步预习管理任务管理编辑任务接口
            getPreviewEditMission_url:function () {
                return '/playlearn/Put//a/u/admin/task/'
            },
            //获取同步预习管理任务管理删除任务接口
            getPreviewDeleteMission_url:function () {
                return '/playlearn/Delete//a/u/admin/task/'
            },
        }
    });
