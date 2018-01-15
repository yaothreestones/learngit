angular.module("app")
    .factory("pathProject",function () {
        return {
            //公用上传图片
            getFile_url:function () {
                return"/a/u/file/up"
            },
            //贝贝
            //资料管理
            //列表
            getMaterials_url:function () {
                return"/playlearn/GET/a/u/materials"
            },
            //查看
            getMaterialsId_url:function () {
                return"/a/u/materials/{id}"
            },
            //新增
            getMaterialsNew_url:function () {
                return"/a/u/materials"
            },
            //删除
            getMaterialsDelete_url:function () {
                return"/a/u/materials/{id}"
            },
            //编辑
            getMaterialsPut_url:function () {
                return"/a/u/materials/{id}"
            },
            //合作管理
            //获得list
            getCompany_url:function () {
                return"/a/u/company/list"
            },
            //新增
            getCompanyAdd_url:function () {
                return"/a/u/company/add"
            },
            //编辑
            getCompanyNewly_url:function () {
                return"/a/u/company"
            },
            //查看
            getCompanyId_url:function () {
                return"/a/u/company/{id}"
            },
            //删除
            getCompanyDelete_url:function () {
                return"/a/u/company/{id}"
            },
            //热门推荐管理
            //list
            getRecommend_url:function () {
                return"a/u/course/recommend/list"
            },
            //编辑
            getRecommendNewly_url:function () {
                return"a/u/course/recommend"
            },
            //查看
            getRecommendLook_url:function () {
                return"a/u/course/recommend/{id}"
            },
            //萌萌哒
            //客服/用户管理
            getParty_url:function () {
                return"playlearn/GET/a/u/user/list"
            },




















































































































































































            //姚磊
            //教学管理模块
            //科目管理
            //获取教学管理科目管理科目列表接口
            getTechSubject_url:function () {
                return '/playlearn/GET//a/u/subject/all'
            },
            //获取教学管理科目管理新增科目接口
            getTechAddSubject_url:function () {
                return '/playlearn/POST//a/u/subject'
            },
            //获取教学管理科目管理编辑科目接口
            getTechEditSubject_url:function () {
                return '/playlearn/Put//a/u/subject'
            },
            //获取教学管理科目管理删除科目接口
            getTechDeleteSubject_url:function () {
                return '/playlearn/Delete//a/u/subject'
            },
            //获取教学管理科目管理搜索科目接口
            getTechSearchSubject_url:function () {
                return '/playlearn/Get//a/u/subject/search'
            },

            //课程管理
            //获取教学管理课程管理课程列表接口
            getTechCourse_url:function () {
                return '/playlearn/GET//a/u/course/list1'
            },
            //获取教学管理课程管理新增课程接口
            getTechAddCourse_url:function () {
                return '/playlearn/Post//a/u/course/addition'
            },
            //获取教学管理课程管理查看课程接口
            getTechViewCourse_url:function () {
                return '/playlearn/GET//a/u/course'
            },
            //获取教学管理课程管理编辑课程接口
            getTechEditCourse_url:function () {
                return '/playlearn/Put/'
            },
            //获取教学管理课程管理删除课程接口
            getTechDeleteCourse_url:function (courseId) {
                return '/playlearn/Delete//a/u/course/'+ courseId
            },
            //获取教学管理课程管理搜索课程接口
            getTechSearchCourse_url:function () {
                return '/playlearn/get/a/u/search/course1'
            },

            //课时管理
            //获取教学管理课时管理课时列表接口
            getTechPeriod_url:function () {
                return '/playlearn/GET//a/u/book/lessonPeriod/list1'
            },
            //获取教学管理课时管理新增课时接口
            getTechAddPeriod_url:function () {
                return '/playlearn/Post//a/u/lessonPeriod/addition'
            },
            //获取教学管理课时管理编辑课时接口
            getTechEditPeriod_url:function () {
                return '/playlearn/Put//a/u/lessonPeriod'
            },
            //获取教学管理课时管理删除课时接口
            getTechDeletePeriod_url:function () {
                return '/playlearn/Delete//a/u/lessonPeriod/'
            },

            //任务管理
            //获取教学管理任务管理任务列表接口
            getTechMission_url:function () {
                return '/playlearn/GET//a/u/task/list'
            },
            //获取教学管理任务管理新增任务接口
            getTechAddMission_url:function () {
                return '/playlearn/Post//a/u/task/addition'
            },
            //获取教学管理任务管理编辑任务接口
            getTechEditMission_url:function () {
                return '/playlearn/Put//a/u/task/'
            },
            //获取教学管理任务管理删除任务接口
            getTechDeleteMission_url:function () {
                return '/playlearn/Delete//a/u/task/'
            },


            //同步预习管理模块
            //教材管理
            //获取同步预习管理教材管理教材列表接口
            getPreviewDatum_url:function () {
                return '/playlearn/GET//a/u/book/list1'
            },
            //获取同步预习管理教材管理新增教材接口
            getPreviewAddDatum_url:function () {
                return '/playlearn/Post//a/u/book/addition1'
            },
            //获取同步预习管理教材管理查看教材接口
            getPreviewViewDatum_url:function () {
                return '/playlearn/get//a/u/book1/'
            },
            //获取同步预习管理教材管理编辑教材接口
            getPreviewEditDatum_url:function () {
                return '/playlearn/Put//a/u/book1/'
            },
            //获取同步预习管理教材管理删除教材接口
            getPreviewDeleteDatum_url:function () {
                return '/playlearn/Delete//a/u/book/'
            },

            //课时管理
            //获取同步预习管理课时管理课时列表接口
            getPreviewPeriod_url:function () {
                return '/playlearn/GET//a/u/book/lessonPeriod/list'
            },
            //获取同步预习管理课时管理新增课时接口
            getPreviewAddPeriod_url:function () {
                return '/playlearn/Post//a/u/lessonPeriod/addition'
            },
            //获取同步预习管理课时管理编辑课时接口
            getPreviewEditPeriod_url:function () {
                return '/playlearn/Put//a/u/lessonPeriod/'
            },
            //获取同步预习管理课时管理删除课时接口
            getPreviewDeletePeriod_url:function () {
                return '/playlearn/Delete//a/u/lessonPeriod/'
            },

            //任务管理
            //获取同步预习管理任务管理任务列表接口
            getPreviewMission_url:function () {
                return '/playlearn/GET//a/u/task/list'
            },
            //获取同步预习管理任务管理新增任务接口
            getPreviewAddMission_url:function () {
                return '/playlearn/Post//a/u/task/addition'
            },
            //获取同步预习管理任务管理编辑任务接口
            getPreviewEditMission_url:function () {
                return '/playlearn/Put//a/u/task/'
            },
            //获取同步预习管理任务管理删除任务接口
            getPreviewDeleteMission_url:function () {
                return '/playlearn/Delete//a/u/task/'
            },
        }
    });
