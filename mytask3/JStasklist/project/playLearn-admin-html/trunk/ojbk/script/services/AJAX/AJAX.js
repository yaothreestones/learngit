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
            getMaterialsDelete_url:function (id) {
                return "/a/u/admin/materials/"+id
            },
            //编辑
            getMaterialsPut_url:function () {
                return "/a/u/admin/materials"
            },
            //合作管理
            //获得list
            getCompany_url:function () {
                return "/a/u/admin/company/list"
            },
            //新增
            getCompanyAdd_url:function () {
                return "/a/u/admin/company"
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
                return "/a/u/admin/course/hot"
            },
            //后台/热门推荐管理/编辑/课程名称下拉框
            get_RNewlysName_url:function () {
                return "/a/u/admin/course/options"
            },
            //查看
            getRecommendLook_url:function (id) {
                return "a/u/admin/course/recommend/"+id
            },


            //萌萌哒
            //客服
            //用户管理接口
            getseerch_url: function () {
                return "/a/u/admin/user/search/list"
            },
            //客服/用户管理/解冻、冻结接口
            getUnfreeze_url: function () {
                return "/a/u/admin/user/status"
            },
            //用户管理/查看用户接口
            getUserDetail_url: function (id) {
                return "/a/u/admin/user/" + id
            },
            //用户管理/收藏课程接口
            getSee_url: function () {
                return "/a/u/admin/user/keep/course/list"
            },
            //用户管理/收藏课时接口
            getSubject_url: function () {
                return "/a/u/admin/user/keep/lessonPeriod/list"
            },
            //用户管理/我的资料接口
            getMeans_url: function () {
                return "/a/u/admin/user/data/list"
            },

            //客服
            //资讯管理接口
            getInformation_url: function () {
                return "/a/u/admin/information/list"
            },
            //资讯管理/增加接口
            getInformationAdd_url: function () {
                return "/a/u/admin/information/add"
            },
            //资讯管理/查看接口
            getInformationSee_url: function (id) {
                return "/a/u/admin/information/" + id
            },
            //资讯管理/编辑接口
            getInformationEdit_url: function () {
                return "/a/u/admin/information"
            },
            //资讯管理/删除接口
            getInformationDelet_url: function () {
                return "/a/u/admin/information";
            },
            //资讯管理/上下架接口
            getInformationStatus_url: function () {
                return "/a/u/admin/information/status"
            },


            //客服
            //注册统计接口
            getEnroll_url: function () {
                return "/a/u/admin/user/enroll"
            },

            //客服
            //消息管理接口
            getMessage_url: function () {
                return "/a/u/admin/news/all"
            },
            //搜索
            search: function () {
                return "/a/u/admin/news/search"
            },
            //消息管理/增加接口
            getMessageAugment_url: function () {
                return "/a/u/admin/news"
            },
            //消息管理/查看接口
            getMessageSee_url: function (id) {
                return "/a/u/admin/news/" + id
            },
            //消息管理/删除接口
            getMessageDelet_url: function (id) {
                return "/a/u/admin/news/" + id
            },

            //客服
            //帮助管理接口
            getHelp_url: function () {
                return "/a/u/admin/help/search"
            },
            //帮助管理/增加接口
            getHelpAugment_url: function () {
                return "/a/u/admin/help"
            },
            //帮助管理/删除接口
            getHelpDelet_url: function (id) {
                return "/a/u/admin/help/" + id
            },
            //帮助管理/编辑接口
            getHelpEdit_url: function () {
                return "/a/u/admin/help"
            },
            //帮助管理/查看接口
            getHelpSee_url: function (id) {
                return "/a/u/admin/help/" + id
            },
            //意见管理
            getSuggestList: function () {
                return '/a/u/admin/feedback/list/';
            },
            getSuggestDetail: function () {
                return '/a/u/admin/feedback?feedbackId=';
            },
            deleteSuggest: function () {
                return '/a/u/admin/feedback?feedbackId=';
            },

            //后台账户管理
            userAccount: function () {
                return '/a/u/admin/manager/list';
            },
            //下拉框列表
            clickSelect:function () {
                return '/a/u/admin/role/list';
            },
            //查询
            AccountEnquiry: function () {
                return '/a/u/admin/multi/manager';
            },
            //删除
            AccountDelete: function (id) {
                return ' /a/u/admin/manager/' + id;
            },
            //编辑
            editUser:function () {
                return ' /a/u/admin/manager';
            },
            //新增
            addUser: function () {
                return ' /a/u/admin/manager';
            },
            //查找管理员
            resUser:function (id) {
                return '/a/u/admin/manager/'+id
            },
            //根据角色ID查询
            roleUser:function (id) {
                return '/a/u/admin/role/'+id+'/manager'
            },

            //模块管理
            //列表
            moduleUser:function () {
                return '/a/u/admin/module/list'
            },
            //根据ID查找模块
            IDmoduleUser:function (id) {
                return '/a/u/admin/module/'+id
            },
            //增加模块
            AddUser:function () {
                return '/a/u/admin/module'
            },
            //编辑模块
            editModule:function (id) {
                return '/a/u/admin/module/'+id
            },

            //批量获取模块详细信息
            batchUser:function () {
                return '/a/u/admin/multi/module'
            },
            //删除
            userDelet: function (id) {
                return "/a/u/admin/module/" + id
            },
            //角色模块
            //角色列表
            partUser:function () {
                return '/a/u/admin/role/list'
            },

            //新增角色
            partIDUser:function () {
                return '/a/u/admin/role'
            },
            //批量获取
            batchRole:function () {
                return '/a/u/admin/multi/role'
            },
            //删除角色
            roleDelet:function (id) {
                return ' /a/u/admin/role/'+id
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
                return '/a/u/admin/subject'
            },
            //获取教学管理科目管理编辑科目接口
            getTechEditSubject_url:function () {
                return '/a/u/admin/subject'
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
            // getTechCourse_url:function () {
            //     return '/playlearn/GET//a/u/admin/course/list'
            // },
            //获取教学管理课程管理新增课程接口
            getTechAddCourse_url:function () {
                return '/a/u/admin/course'
            },
            //获取教学管理课程管理查看课程接口
            getTechViewCourse_url:function (id) {
                return '/a/u/admin/course/recommend/'+ id
            },
            //获取教学管理课程管理编辑课程接口
            getTechEditCourse_url:function () {
                return '/a/u/admin/course'
            },
            //获取教学管理课程管理删除课程接口
            getTechDeleteCourse_url:function (courseId) {
                return '/a/u/admin/course/'+ courseId
            },
            //获取教学管理课程管理搜索课程接口
            getTechSearchCourse_url:function () {
                return '/a/u/admin/course/search/list'
            },
            //获取教学管理课程管理课程上下架接口
            getTechStatusCourse_url:function () {
                return '/a/u/admin/course/status'
            },

            //课时管理
            //获取教学管理课时管理课时列表/查询接口
            getTechPeriod_url:function () {
                return '/a/u/admin/course/lessonPeriod/search/list'
            },
            //获取教学管理课时管理新增课时接口
            getTechAddPeriod_url:function () {
                return '/a/u/admin/course/lessonPeriod'
            },
            //获取教学管理课时管理查看课时接口
            getTechViewPeriod_url:function (id) {
                return '/a/u/admin/course/lessonPeriod/'+id
            },
            //获取教学管理课时管理编辑课时接口
            getTechEditPeriod_url:function () {
                return '/a/u/admin/course/lessonPeriod'
            },
            //获取教学管理课时管理删除课时接口
            getTechDeletePeriod_url:function (id) {
                return '/a/u/admin/course/lessonPeriod/' + id
            },
            //获取教学管理课时管理课时上下架接口
            getTechStatusPeriod_url:function () {
                return '/a/u/admin/course/lessonPeriod/status'
            },

            //任务管理
            //获取教学管理任务管理任务列表接口
            getTechMission_url:function () {
                return '/a/u/admin/course/task/search/list'
            },
            //获取教学管理任务管理新增任务接口
            getTechAddMission_url:function () {
                return '/a/u/admin/course/task'
            },
            //获取教学管理任务管理查看任务接口
            getTechViewMission_url:function (id) {
                return '/a/u/admin/course/task/'+id
            },
            //获取教学管理任务管理编辑任务接口
            getTechEditMission_url:function () {
                return '/a/u/admin/course/task'
            },
            //获取教学管理任务管理删除任务接口
            getTechDeleteMission_url:function (id) {
                return '/a/u/admin/course/task/'+id
            },
            //任务下步骤列表接口
            getTechTask_url:function (id) {
                return '/a/u/admin/course/task/step/list/'+id
            },
            //任务下步骤新增接口
            getTechAddTask_url:function () {
                return '/a/u/admin/course/step'
            },
            //任务下步骤编辑接口
            getTechEditTask_url:function () {
                return '/a/u/admin/course/step'
            },
            //任务下步骤删除接口
            getTechDeleteTask_url:function () {
                return '/a/u/admin/course/step'
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
            //获取同步预习管理教材管理教材上架接口
            getPreviewUpperDatum_url:function () {
                return '/a/u/admin/book/status/upper'
            },
            //获取同步预习管理教材管理教材下架接口
            getPreviewUnderDatum_url:function () {
                return '/a/u/admin/book/status/under'
            },

            //课时管理
            //获取同步预习管理课时管理课时列表接口
            getPreviewPeriod_url:function () {
                return '/a/u/admin/book/lessonPeriod/list'
            },
            //获取同步预习管理课时管理新增课时接口
            getPreviewAddPeriod_url:function () {
                return '/a/u/admin/book/lessonPeriod/addition'
            },
            //获取同步预习管理课时管理获取课时详情接口
            getPreviewViewPeriod_url:function () {
                return '/a/u/admin/book/lessonPeriod'
            },
            //获取同步预习管理课时管理编辑课时接口
            getPreviewEditPeriod_url:function () {
                return '/a/u/admin/book/lessonPeriod'
            },
            //获取同步预习管理课时管理删除课时接口
            getPreviewDeletePeriod_url:function () {
                return '/a/u/admin/book/lessonPeriod'
            },
            //获取同步预习管理课时管理课时上架接口
            getPreviewUpperPeriod_url:function () {
                return '/a/u/admin/book/lessonperiod/status/upper'
            },
            //获取同步预习管理课时管理课时下接口
            getPreviewUnderPeriod_url:function () {
                return '/a/u/admin/book/lessonperiod/status/under'
            },

            //任务管理
            //获取同步预习管理任务管理任务列表接口
            getPreviewMission_url:function () {
                return '/a/u/admin/book/task/list'
            },
            //获取同步预习管理任务管理新增任务接口
            getPreviewAddMission_url:function () {
                return '/a/u/admin/book/task/addition'
            },
            //获取同步预习管理任务管理查看任务接口
            getPreviewViewMission_url:function () {
                return '/a/u/admin/book/task'
            },
            //获取同步预习管理任务管理编辑任务接口
            getPreviewEditMission_url:function () {
                return '/a/u/admin/book/task/'
            },
            //获取同步预习管理任务管理删除任务接口
            getPreviewDeleteMission_url:function () {
                return '/a/u/admin/book/task'
            },
            //任务下步骤列表接口
            getPreviewTask_url:function () {
                return '/a/u/admin/book/step/list'
            },
            //任务下步骤新增接口
            getPreviewAddTask_url:function () {
                return '/a/u/admin/book/step'
            },
            //任务下步骤编辑接口
            getPreviewEditTask_url:function () {
                return '/a/u/admin/book/step/'
            },
            //任务下步骤删除接口
            getPreviewDeleteTask_url:function () {
                return '/a/u/admin/book/step'
            }
        }
    });
