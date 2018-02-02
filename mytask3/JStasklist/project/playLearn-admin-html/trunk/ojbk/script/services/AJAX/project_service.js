angular.module("app")
    .factory('Course_service', function ($http, pathProject) {
        return {
            //公用图片上传
            get_File: function (params) {
                return $http.post(pathProject.getFile_url(), params)
            },
            //贝贝
            //资料管理lest
            get_Materials: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getMaterials_url(),
                    params: params,
                })
            },
            //查看
            get_MaterialsId: function (id) {
                return $http({
                    method: "GET",
                    url: pathProject.getMaterialsId_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //新增
            get_MaterialsNew: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getMaterialsNew_url(),
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: data
                })
            },
            //删除
            get_MaterialsDelete: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.getMaterialsDelete_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //编辑
            get_MaterialsPut: function (params) {
                return $http({
                    method: "put",
                    url: pathProject.getMaterialsPut_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //合作管理
            //获取list
            get_Company: function (params) {
                return $http.get(pathProject.getCompany_url(), params)
            },
            //新增
            get_CompanyAdd: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getCompanyAdd_url(),
                    headers: {
                        'content-type': 'application/json'
                    },
                    data: params
                })
            },
            //编辑
            get_CompanyNewly: function (params) {
                return $http({
                    method: "put",
                    url: pathProject.getCompanyNewly_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //查看
            get_CompanyId: function (id) {
                return $http({
                    method: "GET",
                    url: pathProject.getCompanyId_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //删除
            get_CompanyDelete: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.getCompanyDelete_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //冻结
            get_CompanyStatus: function (id) {
                return $http({
                    method: "put",
                    url: pathProject.getCompanyStatus_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {
                        id: id,
                    }
                })
            },
            //热门推荐
            //list
            get_Recommend: function (id, params) {
                return $http({
                    method: "GET",
                    url: pathProject.getRecommend_url(id),
                    params: params
                })
            },
            //编辑
            get_RecommendNewly: function (params) {
                return $http({
                    method: "put",
                    url: pathProject.getRecommendNewly_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //后台/热门推荐管理/编辑/课程名称下拉框
            get_RNewlysName: function (params) {
                return $http({
                    method: "GET",
                    url: pathProject.get_RNewlysName_url(),
                    params: params
                })
            },
            //查看
            get_RecommendLook: function (id) {
                return $http({
                    method: "GET",
                    url: pathProject.getRecommendLook_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //萌萌哒
            //客服
            //用户管理
            get_seerch: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getseerch_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //用户管理/用户查看
            get_UserDetail: function (id) {
                return $http({
                    method: "GET",
                    url: pathProject.getUserDetail_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //用户管理/解冻、冻结
            get_Unfreeze: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getUnfreeze_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //用户管理/收藏课程
            get_See: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getSee_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //用户管理/收藏课时
            get_Subject: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getSubject_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //用户管理/我的资料
            get_Means: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getMeans_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },

            //客服
            //资讯管理
            get_Information: function (params) {
                return $http.get(pathProject.getInformation_url() + '?' + $.param(params))
            },
            //资讯管理/增加
            get_InformationAdd: function (params) {
                return $http({
                    method: "post",
                    url: pathProject.getInformationAdd_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //资讯管理/查看
            get_InformationSee: function (id) {
                return $http({
                    method: "get",
                    url: pathProject.getInformationSee_url(id),
                    headers: {'Content-Type': 'application/json'},
                })
            },
            //资讯管理/编辑
            get_InformationEdit: function (params) {
                return $http({
                    method: "put",
                    url: pathProject.getInformationEdit_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //资讯管理/删除
            get_InformationDelet: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.getInformationDelet_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {id: id}
                });
            },
            //资讯管理/上下架接口
            get_InformationStatus: function (data) {
                console.log(pathProject.getInformationStatus_url(data.informationId));
                return $http({
                    method: "put",
                    url: pathProject.getInformationStatus_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },

            //客服
            //注册统计接口
            get_Enroll: function (params) {
                return $http.get(pathProject.getEnroll_url(), params)
            },

            //客服
            //消息管理
            get_Message: function (params) {
                return $http.get(pathProject.getMessage_url() + '?' + $.param(params))
            },
            //搜索
            search: function (params) {
                return $http.get(pathProject.search(), params)
            },
            //消息管理/增加
            get_MessageAugment: function (params) {
                return $http({
                    method: "post",
                    url: pathProject.getMessageAugment_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //消息管理/查看
            get_MessageSee: function (id) {
                return $http({
                    method: "get",
                    url: pathProject.getMessageSee_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //消息管理/删除
            get_MessageDelete: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.getMessageDelet_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                });
            },

            //客服
            //帮助管理接口
            get_Help: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getHelp_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                })
            },
            //帮助管理/增加接口
            get_HelpAugment: function (params) {
                console.log(JSON.stringify(params));
                return $http({
                    method: "post",
                    url: pathProject.getHelpAugment_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //帮助管理/删除接口
            get_HelpDelet: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.getHelpDelet_url(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {id: id}
                });
            },
            //帮助管理/编辑接口
            get_HelpEdit: function (params) {
                return $http({
                    method: "put",
                    url: pathProject.getHelpEdit_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //帮助管理/查看接口
            get_HelpSee: function (id) {
                return $http({
                    method: "get",
                    url: pathProject.getHelpSee_url(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                })
            },
            //意见
            //意见管理
            getSuggestList: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.getSuggestList(),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    data: data
                });
            },
            getSuggestDetail: function (id) {
                return $http.get(pathProject.getSuggestDetail() + id);
            },
            deleteSuggest: function (id) {
                return $http.delete(pathProject.deleteSuggest() + id);
            },
            //后台账户管理
            userAccount: function (params) {
                return $http.get(pathProject.userAccount(), params)
            },
            //下拉框列表
            clickSelect: function (params) {
                return $http.get(pathProject.clickSelect(), params)
            },
            //查询
            AccountEnquiry: function (param) {
                return $http({
                    method: "post",
                    url: pathProject.AccountEnquiry(),
                    headers: {'Content-Type': 'application/json'},
                    data: param
                });
            },
            //编辑
            editUser: function (params) {
                console.log(params);
                return $http({
                    method: "put",
                    url: pathProject.editUser(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },
            //新增
            addUser: function (data) {
                return $http({
                    method: "post",
                    url: pathProject.addUser(),
                    headers: {'Content-Type': 'application/json'},
                    data: data
                });
            },
            //查找管理员
            resUser: function (id) {
                return $http.get(pathProject.resUser(id))
            },

            //删除
            AccountDelete: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.AccountDelete(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                });
            },
            //根据角色ID查询
            roleUser: function (id) {
                return $http.get(pathProject.roleUser(id))
            },

            //模块管理
            //列表
            moduleUser:function (params) {
                return $http.get(pathProject.moduleUser(), params)
            },
            //根据ID查找模块
            IDmoduleUser:function (id) {
                return $http.get(pathProject.IDmoduleUser(id))
            },
            //增加模块
            AddUser:function (data) {
                return $http({
                    method: "post",
                    url: pathProject.AddUser(),
                    headers: {'Content-Type': 'application/json'},
                    data: data
                });
            },
            //编辑模块
            editModule:function (params) {
                return $http({
                    method: "put",
                    url: pathProject.editUser(),
                    headers: {'Content-Type': 'application/json'},
                    data: params
                })
            },

            //批量获取模块详细信息
            batchUser:function (data) {
                return $http({
                    method: "post",
                    url: pathProject.batchUser(),
                    headers: {'Content-Type': 'application/json'},
                    data: data
                });
            },
            //删除
            userDelet: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.userDelet(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {id: id}
                });
            },
            //角色管理
            partUser:function () {
                return $http.get(pathProject.partUser())
            },
            //新增角色
            partIDUser:function (data) {
                return $http({
                    method: "post",
                    url: pathProject.partIDUser(),
                    headers: {'Content-Type': 'application/json'},
                    data: data
                });
            },
            //批量获取
            batchRole:function (data) {
                return $http({
                    method: "post",
                    url: pathProject.batchRole(),
                    headers: {'Content-Type': 'application/json'},
                    data: data
                });
            },
            //删除角色
            roleDelet: function (id) {
                return $http({
                    method: "delete",
                    url: pathProject.roleDelet(id),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    params: {id: id}
                });
            },
            //修改密码





            //姚磊
            //获取教学管理科目管理科目列表
            get_TechSubject: function (params) {
                return $http.get(pathProject.getTechSubject_url(), params)
            },
            //获取教学管理科目管理增加科目接口
            get_TechAddSubject: function (params) {
                return $http.post(pathProject.getTechAddSubject_url(), params)
            },
            //获取教学管理科目管理编辑科目接口
            get_TechEditSubject: function (params) {
                return $http.put(pathProject.getTechEditSubject_url(), params)
            },
            //获取教学管理科目管理删除科目接口
            get_TechDeleteSubject: function (params) {
                return $http.delete(pathProject.getTechDeleteSubject_url(params))
            },
            //获取教学管理科目管理搜索科目接口
            get_TechSearchSubject: function (params) {
                return $http.get(pathProject.getTechSearchSubject_url(), params)
            },
            //获取教学管理科目管理科目上下架接口
            get_TechStatusSubject: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getTechStatusSubject_url(),
                    data: data,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },


            //课程管理
            //获取教学管理课程管理课程列表接口
            get_TechCourse: function (params) {
                return $http.get(pathProject.getTechCourse_url(), params)
            },
            //获取教学管理课程管理新增课程接口
            get_TechAddCourse: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.getTechAddCourse_url(),
                    data: data
                })
            },
            //获取教学管理课程管理查看课程接口
            get_TechViewCourse: function (id) {
                return $http.get(pathProject.getTechViewCourse_url(id))
            },
            //获取教学管理课程管理编辑课程接口
            get_TechEditCourse: function (params) {
                //return $http.put(pathProject.getTechEditCourse_url(),params)
                return $http({
                    method: 'put',
                    url: pathProject.getTechEditCourse_url(),
                    data: params,
                    //transformRequest: function (data) {return $.param(data);},
                    headers: {'content-type': 'application/json'}
                })
            },
            //获取教学管理课程管理删除课程接口
            get_TechDeleteCourse: function (params) {
                return $http.delete(pathProject.getTechDeleteCourse_url(params))
            },
            //获取教学管理课程管理搜索课程接口
            get_TechSearchCourse: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getTechSearchCourse_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },
            //获取教学管理课程管理课程上下架接口
            get_TechStatusCourse: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.getTechStatusCourse_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },


            //课时管理
            //获取教学管理课时管理课时列表接口
            get_TechPeriod: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getTechPeriod_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },
            //获取教学管理课时管理新增课时接口
            get_TechAddPeriod: function (params) {
                return $http.post(pathProject.getTechAddPeriod_url(), params)
            },
            //获取教学管理课时管理查看课时接口
            get_TechViewPeriod: function (params) {
                return $http.get(pathProject.getTechViewPeriod_url(params))
            },
            //获取教学管理课时管理编辑课时接口
            get_TechEditPeriod: function (params) {
                return $http.put(pathProject.getTechEditPeriod_url(), params)
            },
            //获取教学管理课时管理删除课时接口
            get_TechDeletePeriod: function (params) {
                return $http.delete(pathProject.getTechDeletePeriod_url(params))
            },
            //获取教学管理课时管理课时上下架接口
            get_TechStatusPeriod: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.getTechStatusPeriod_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },

            //任务管理
            //获取教学管理任务管理任务列表接口
            get_TechMission: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getTechMission_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },
            //获取教学管理任务管理新增任务接口
            get_TechAddMission: function (params) {
                return $http.post(pathProject.getTechAddMission_url(), params)
            },
            //获取教学管理任务管理查看任务接口
            get_TechViewMission: function (params) {
                return $http.get(pathProject.getTechViewMission_url(params))
            },
            //获取教学管理任务管理编辑任务接口
            get_TechEditMission: function (params) {
                return $http.put(pathProject.getTechEditMission_url(), params)
            },
            //获取教学管理任务管理删除任务接口
            get_TechDeleteMission: function (params) {
                return $http.delete(pathProject.getTechDeleteMission_url(params))
            },
            //任务下步骤列表接口
            get_TechTask: function (params) {
                return $http.get(pathProject.getTechTask_url(params))
            },
            //任务下步骤新增接口
            get_TechAddTask: function (data) {
                return $http.post(pathProject.getTechAddTask_url(), data)
            },
            //任务下步骤编辑接口
            get_TechEditTask: function (data) {
                return $http({
                    method: 'put',
                    url: pathProject.getTechEditTask_url(),
                    data: data,
                    headers: {'content-type': 'application/json'}

                })
            },
            //任务下步骤删除接口
            get_TechDeleteTask: function (params) {
                return $http({
                    method: 'delete',
                    url: pathProject.getTechDeleteTask_url(),
                    data: params,
                    headers: {'content-type': 'application/json'}
                })
            },


            //同步预习管理模块
            //教材管理
            //获取同步预习管理教材管理教材列表接口
            get_PreviewDatum: function (params) {
                return $http.get(pathProject.getPreviewDatum_url(), params)
            },
            //获取同步预习管理教材管理新增教材接口
            get_PreviewAddDatum: function (params) {
                return $http.post(pathProject.getPreviewAddDatum_url(), params)
            },
            //获取同步预习管理教材管理查看教材接口
            get_previewViewDatum: function (params) {
                return $http.get(pathProject.getPreviewViewDatum_url(), params)
            },
            //获取同步预习管理教材管理编辑教材接口
            get_PreviewEditDatum: function (params) {
                return $http.put(pathProject.getPreviewEditDatum_url(), params)
            },
            //获取同步预习管理教材管理删除教材接口
            get_PreviewDeleteDatum: function (params) {
                return $http.delete(pathProject.getPreviewDeleteDatum_url(), params)
            },
            //获取同步预习管理教材管理教材上架接口
            get_PreviewUpperDatum: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.getPreviewUpperDatum_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },
            //获取同步预习管理教材管理教材下架接口
            get_PreviewUnderDatum: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.getPreviewUnderDatum_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },

            //课时管理
            //获取同步预习管理课时管理课时列表接口
            get_PreviewPeriod: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getPreviewPeriod_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },
            //获取同步预习管理课时管理新增课时接口
            get_PreviewAddPeriod: function (data) {
                return $http.post(pathProject.getPreviewAddPeriod_url(), data)
            },
            //获取同步预习管理课时管理课时详情接口
            get_PreviewViewPeriod: function (params) {
                return $http.get(pathProject.getPreviewViewPeriod_url(), params)
            },
            //获取同步预习管理课时管理编辑课时接口
            get_PreviewEditPeriod: function (params) {
                return $http.put(pathProject.getPreviewEditPeriod_url(), params)
            },
            //获取同步预习管理课时管理删除课时接口
            get_PreviewDeletePeriod: function (params) {
                return $http.delete(pathProject.getPreviewDeletePeriod_url(), params)
            },
            //获取同步预习管理课时管理课时上架接口
            get_PreviewUpperPeriod: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.getPreviewUpperPeriod_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },
            //获取同步预习管理课时管理课时下架接口
            get_PreviewUnderPeriod: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.getPreviewUnderPeriod_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}
                })
            },

            //任务管理
            //获取同步预习管理任务管理任务列表接口
            get_PreviewMission: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.getPreviewMission_url(),
                    data: params,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {'content-type': 'application/x-www-form-urlencoded'}

                })

            },
            //获取同步预习管理任务管理查看任务接口
            get_PreviewViewMission: function (params) {
                return $http.get(pathProject.getPreviewViewMission_url(), params)
            },
            //获取同步预习管理任务管理新增任务接口
            get_PreviewAddMission: function (params) {
                return $http.post(pathProject.getPreviewAddMission_url(), params)
            },
            //获取同步预习管理任务管理编辑任务接口
            get_PreviewEditMission: function (params) {
                return $http.put(pathProject.getPreviewEditMission_url(), params)
            },
            //获取同步预习管理任务管理删除任务接口
            get_PreviewDeleteMission: function (params) {
                return $http.delete(pathProject.getPreviewDeleteMission_url(), params)
            },
            //任务下步骤列表接口
            get_PreviewTask: function (params) {
                return $http.get(pathProject.getPreviewTask_url(), params)
            },
            //任务下步骤新增接口
            get_PreviewAddTask: function (data) {
                return $http.post(pathProject.getPreviewAddTask_url(), data)
            },
            //任务下步骤编辑接口
            get_PreviewEditTask: function (data) {
                return $http({
                    method: 'put',
                    url: pathProject.getPreviewEditTask_url(),
                    data: data,
                    headers: {'content-type': 'application/json'}

                })
            },
            //任务下步骤删除接口
            get_PreviewDeleteTask: function (data) {
                return $http({
                    method: 'delete',
                    url: pathProject.getPreviewDeleteTask_url(),
                    data: data,
                    headers: {'content-type': 'application/json'}
                })
            }
        }
    });