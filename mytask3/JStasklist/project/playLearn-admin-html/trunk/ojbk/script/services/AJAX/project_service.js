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
            get_MaterialsId:function (id) {
                return $http({
                    method:"GET",
                    url:pathProject.getMaterialsId_url(id),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                })
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
                return $http({
                    method: 'post',
                    url: pathProject.getCompanyAdd_url(),
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(data) {
                        return $.param(data);
                    },
                    data:params
                })
            },
            //编辑
            get_CompanyNewly:function (params) {
                return $http.put(pathProject.getCompanyNewly_url(),params)
            },
            //查看
            get_CompanyId:function (id) {
                return $http({
                    method:"GET",
                    url:pathProject.getCompanyId_url(id),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //删除
            get_CompanyDelete:function (id) {
                return $http({
                    method:"delete",
                    url:pathProject.getCompanyDelete_url(id),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //冻结
            get_CompanyStatus:function (id) {
                return $http({
                    method:"put",
                    url:pathProject.getCompanyStatus_url(id),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    params:{
                        id:id,
                    }
                })
            },
            //热门推荐
            //list
            get_Recommend:function (id) {
                return $http({
                    method:"GET",
                    url:pathProject.getRecommend_url(id),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //编辑
            get_RecommendNewly:function (params) {
                return $http.put(pathProject.getRecommendNewly_url(),params)
            },
            ////后台/热门推荐管理/编辑/课程名称下拉框
            get_RNewly:function (params) {
                return $http.put(pathProject.getRNewly_url(),params)
            },
            //查看
            get_RecommendLook:function (id) {
                return $http({
                    method:"GET",
                    url:pathProject.getRecommendLook_url(id),
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //萌萌哒
            //客服
            //用户管理
            get_Party:function (params) {
                return $http.get(pathProject.getParty_url(),params)
            },
            //客服/用户管理/解冻、冻结
            get_Unfreeze:function (params) {
                return $http.get(pathProject.getUnfreeze_url(),params)
            },
            //用户管理/收藏课程
            get_See:function (params) {
                return $http.get(pathProject.getSee_url(),params)
            },
            //用户管理/收藏课时
            get_Subject:function (params) {
                return $http.get(pathProject.getSubject_url(),params)
            },
            //用户管理/我的资料
            get_Means:function (params) {
                return $http.get(pathProject.getMeans_url(),params)
            },

            //客服
            //资讯管理
            get_Information:function (params) {
                return $http.get(pathProject.getInformation_url(),params)
            },
            //资讯管理/增加
            get_InformationAugment:function (params) {
                return $http.post(pathProject.getInformationAugment_url(),params)
            },
            //资讯管理/查看
            get_InformationSee:function (params) {
                return $http.get(pathProject.getInformationSee_url(),params)
            },
            //资讯管理/编辑
            get_InformationEdit:function (params) {
                return $http.put(pathProject.getInformationEdit_url(),params)
            },
            //资讯管理/删除
            get_InformationDelet:function (params) {
                return $http.delete(pathProject.getInformationDelet_url(),params)
            },

            //客服
            //注册统计接口
            get_Enroll:function (params) {
                return $http.get(pathProject.getEnroll_url(),params)
            },

            //客服
            //消息管理
            get_Message:function (params) {
                return $http.get(pathProject.getInformation_url(),params)
            },
            //消息管理/增加
            get_MessageAugment:function (params) {
                return $http.post(pathProject.getMessageAugment_url(),params)
            },
            //消息管理/查看
            get_MessageSee:function (params) {
                return $http.get(pathProject.getMessageSee_url(),params)
            },
            //消息管理/删除
            get_MessageDelete:function (params) {
                return $http.delete(pathProject.getMessageDelet_url(),params)
            },

            //客服
            //帮助管理接口
            get_Help:function () {
                return $http.get(pathProject.getHelp_url(),params)
            },
            //帮助管理/增加接口
            get_HelpAugment:function () {
                return $http.post(pathProject.getHelpAugment_url(),params)
            },
            //帮助管理/删除接口
            get_HelpDelet:function () {
                return $http.delete(pathProject.getHelpDelet_url(),params)
            },
            //帮助管理/编辑接口
            get_HelpEdit:function () {
                return $http.put(pathProject.getHelpEdit_url(),params)
            },
            //帮助管理/查看接口
            get_HelpSee:function () {
                return $http.get(pathProject.getHelpSee_url(),params)
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
            //获取教学管理科目管理科目上下架接口
            get_TechStatusSubject:function (params) {
                return $http({
                    method:'post',
                    url:pathProject.getTechStatusSubject_url(),
                    data:params,
                    transformRequest: function (params) {return $.param(params);},
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
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
            //获取教学管理课时管理查看课时接口
            get_TechViewPeriod:function (params) {
                return $http.get(pathProject.getTechViewPeriod_url(),params)
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
            //获取教学管理任务管理查看任务接口
            get_TechViewMission:function (params) {
                return $http.get(pathProject.getTechViewMission_url(),params)
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
            get_PreviewEditDatum:function (data) {
                return $http.put(pathProject.getPreviewEditDatum_url(),data)
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
            //获取同步预习管理课时管理课时详情接口
            get_PreviewViewPeriod:function (params) {
                return $http.get(pathProject.getPreviewViewPeriod_url(),params)
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
            get_PreviewMission:function (params) {
                return $http.get(pathProject.getPreviewMission_url(),params)
            },
            //获取同步预习管理任务管理新增任务接口
            get_PreviewAddMission:function (params) {
                return $http.post(pathProject.getPreviewAddMission_url(),params)
            },
            //获取同步预习管理任务管理编辑任务接口
            get_PreviewEditMission:function (params) {
                return $http.put(pathProject.getPreviewEditMission_url(),params)
            },
            //获取同步预习管理任务管理删除任务接口
            get_PreviewDeleteMission:function (params) {
                return $http.delete(pathProject.getPreviewDeleteMission_url(),params)
            },







        }
    });