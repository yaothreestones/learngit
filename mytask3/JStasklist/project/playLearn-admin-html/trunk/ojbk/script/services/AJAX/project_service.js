angular.module("app")
    .factory('Course_service',function ($http,pathProject) {
        return {
            //公用图片上传
            get_File:function (params) {
                return $http.post(pathProject.getFile_url(),params)
            },
            //贝贝
            //资料管理lest
            get_Materials:function (params) {
                return $http.get(pathProject.getMaterials_url(),params)
            },
            //查看
            get_MaterialsId:function (params) {
                return $http.get(pathProject.getMaterialsId_url(),params)
            },
            //新增
            get_MaterialsNew:function (params) {
                return $http.post(pathProject.getMaterialsNew_url(),params)
            },
            //删除
            get_MaterialsDelete:function (params) {
                return $http.delete(pathProject.getMaterialsDelete_url(),params)
            },
            //编辑
            get_MaterialsPut:function (params) {
                return $http.put(pathProject.getMaterialsPut_url(),params)
            },
            //合作管理
            //获取list

            get_Company:function (params) {
                return $http.get(pathProject.getCompany_url(),params)
            },
            //新增
            get_CompanyAdd:function (params) {
                return $http.post(pathProject.getCompanyAdd_url(),params)
            },
            //编辑
            get_CompanyNewly:function (params) {
                return $http.put(pathProject.getCompanyNewly_url(),params)
            },
            //查看
            get_CompanyId:function (params) {
                return $http.get(pathProject.getCompanyId_url(),params)
            },
            //删除
            get_CompanyDelete:function (params) {
                return $http.delete(pathProject.getCompanyDelete_url(),params)
            },
            //热门推荐
            //list
            get_Recommend:function (params) {
                return $http.get(pathProject.getRecommend_url(),params)
            },
            //编辑
            get_RecommendNewly:function (params) {
                return $http.put(pathProject.getRecommendNewly_url(),params)
            },
            //查看
            get_RecommendLook:function (params) {
                return $http.get(pathProject.getRecommendLook_url(),params)
            },



            //萌萌哒
            get_Party:function (params) {
                return $http.get(pathProject.getParty_url(),params)
            },









































































            //姚磊
            //获取教学管理科目管理科目列表
            get_TechSubject:function (params) {
                return $http.get(pathProject.getTechSubject_url(),params)
            },
            //获取教学管理科目管理增加科目接口
            get_TechAddSubject:function (params) {
                return $http.post(pathProject.getTechAddSubject_url(),params)
            },
            //获取教学管理科目管理编辑科目接口
            get_TechEditSubject:function (params) {
                return $http.put(pathProject.getTechEditSubject_url(),params)
            },
            //获取教学管理科目管理删除科目接口
            get_TechDeleteSubject:function (params) {
                return $http.delete(pathProject.getTechDeleteSubject_url(params))
            },
            //获取教学管理科目管理搜索科目接口
            get_TechSearchSubject:function (params) {
                return $http.get(pathProject.getTechSearchSubject_url(),params)
            },


            //课程管理
            //获取教学管理课程管理课程列表接口
            get_TechCourse:function (params) {
                return $http.get(pathProject.getTechCourse_url(),params)
            },
            //获取教学管理课程管理新增课程接口
            get_TechAddCourse:function (params) {
                return $http.post(pathProject.getTechAddCourse_url(),params)
            },
            //获取教学管理课程管理查看课程接口
            get_TechViewCourse:function () {
                return $http.get(pathProject.getTechViewCourse_url())
            },
            //获取教学管理课程管理编辑课程接口
            get_TechEditCourse:function (params) {
                return $http.put(pathProject.getTechEditCourse_url(),params)
            },
            //获取教学管理课程管理删除课程接口
            get_TechDeleteCourse:function (params) {
                return $http.delete(pathProject.getTechDeleteCourse_url(),params)
            },
            //获取教学管理课程管理搜索课程接口
            get_TechSearchCourse:function (params) {
                return $http.get(pathProject.getTechSearchCourse_url(),params)
            },


            //课时管理
            //获取教学管理课时管理课时列表接口
            get_TechPeriod:function (params) {
                return $http.get(pathProject.getTechPeriod_url(),params)
            },
            //获取教学管理课时管理新增课时接口
            get_TechAddPeriod:function (params) {
                return $http.post(pathProject.getTechAddPeriod_url(),params)
            },
            //获取教学管理课时管理编辑课时接口
            get_TechEditPeriod:function (params) {
                return $http.put(pathProject.getTechEditPeriod_url(),params)
            },
            //获取教学管理课时管理删除课时接口
            get_TechDeletePeriod:function (params) {
                return $http.delete(pathProject.getTechDeletePeriod_url(),params)
            },

            //任务管理
            //获取教学管理任务管理任务列表接口
            get_TechMission:function (params) {
                return $http.get(pathProject.getTechMission_url(),params)
            },
            //获取教学管理任务管理新增任务接口
            get_TechAddMission:function (params) {
                return $http.post(pathProject.getTechAddMission_url(),params)
            },
            //获取教学管理任务管理编辑任务接口
            get_TechEditMission:function (params) {
                return $http.put(pathProject.getTechEditMission_url(),params)
            },
            //获取教学管理任务管理删除任务接口
            get_TechDeleteMission:function (params) {
                return $http.delete(pathProject.getTechDeleteMission_url(),params)
            },



            //同步预习管理模块
            //教材管理
            //获取同步预习管理教材管理教材列表接口
            get_PreviewDatum:function (params) {
                return $http.get(pathProject.getPreviewDatum_url(),params)
            },
            //获取同步预习管理教材管理新增教材接口
            get_PreviewAddDatum:function (params) {
                return $http.post(pathProject.getPreviewAddDatum_url(),params)
            },
            //获取同步预习管理教材管理查看教材接口
            get_previewViewDatum:function (params) {
                return $http.get(pathProject.getPreviewViewDatum_url(),params)
            },
            //获取同步预习管理教材管理编辑教材接口
            get_PreviewEditDatum:function (params) {
                return $http.put(pathProject.getPreviewEditDatum_url(),params)
            },
            //获取同步预习管理教材管理删除教材接口
            get_PreviewDeleteDatum:function (params) {
                return $http.delete(pathProject.getPreviewDeleteDatum_url(),params)
            },

            //课时管理
            //获取同步预习管理课时管理课时列表接口
            get_PreviewPeriod:function (params) {
                return $http.get(pathProject.getPreviewPeriod_url(),params)
            },
            //获取同步预习管理课时管理新增课时接口
            get_PreviewAddPeriod:function (params) {
                return $http.post(pathProject.getPreviewAddPeriod_url(),params)
            },
            //获取同步预习管理课时管理编辑课时接口
            get_PreviewEditPeriod:function (params) {
                return $http.put(pathProject.getPreviewEditPeriod_url(),params)
            },
            //获取同步预习管理课时管理删除课时接口
            get_PreviewDeletePeriod:function (params) {
                return $http.delete(pathProject.getPreviewDeletePeriod_url(),params)
            },

            //任务管理
            //获取同步预习管理任务管理任务列表接口
            get_PreviewMission_url:function (params) {
                return $http.get(pathProject.getPreviewMission_url(),params)
            },
            //获取同步预习管理任务管理新增任务接口
            get_PreviewAddMission_url:function (params) {
                return $http.post(pathProject.getPreviewAddMission_url(),params)
            },
            //获取同步预习管理任务管理编辑任务接口
            get_PreviewEditMission_url:function (params) {
                return $http.put(pathProject.getPreviewEditMission_url(),params)
            },
            //获取同步预习管理任务管理删除任务接口
            get_PreviewDeleteMission_url:function (params) {
                return $http.delete(pathProject.getPreviewDeleteMission_url(),params)
            },







        }
    });