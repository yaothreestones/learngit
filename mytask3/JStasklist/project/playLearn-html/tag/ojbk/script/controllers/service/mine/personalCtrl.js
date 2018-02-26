angular.module("app")
    .controller("personalCtrl", ["$state", 'Course_service', function ($state, Course_service) {
        var vm = this;
        vm.$stateParams = $state.params;
        // //上传图片

        Course_service.userinfo()
            .then(function (res) {
                if (res.data.code == 0) {
                    vm.user = res.data.data;
                    vm.$picker.value = res.data.data.grade||0;
                    console.log(vm.$picker.value);
                } else {
                    alert('请求失败')
                }
            }, function (res) {
                alert('请求失败')
            })

        vm.params = {
            url: location.href.split('#')[0]
        };
        Course_service.get_Wxconfig(vm.params).then(function (res) {
            res.data.code === 0 && function () {
                var data = res.data.data;
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: 'wx0b31bcd6cbe880a4', // 必填，公众号的唯一标识
                    timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
                    signature: res.data.data.signature,// 必填，签名，见附录1
                    jsApiList: ['uploadImage', 'chooseImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                //上传到服务器
                vm.chooseIcon = function () {
                    wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: function (res) {
                            wx.uploadImage({
                                localId: res.localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                success: function (res) {
                                    vm.serverId = res.serverId;
                                    //上传到服务器
                                    Course_service.getFile({mediaId: vm.serverId}).then(function (res) {
                                        console.log(res)
                                        if (res.data.code == 0) {
                                            console.log('已经获取用户信息');
                                            vm.user.profilePicture = res.data.url ? res.data.url : 'image/app/UploadHeadImage.png';
                                            Course_service.get_Detail(vm.user)
                                                .then(function (res) {
                                                    if (res.data.code == 0) {
                                                        Course_service.userinfo()
                                                        vm.user = res.data.data;
                                                        $state.reload();
                                                    }
                                                }, function (res) {
                                                    alert('请求失败')
                                                })
                                        }
                                    })
                                }
                            });
                        }
                    });
                }
            }();
        });
        vm.user = [];

        Course_service.get_Detail({
                        profilePicture: vm.user.profilePicture,
                        name: vm.user.name,
                        email: vm.user.email,
                        grade: vm.grade
                    })
                        .then(function (res) {
                            if (res.data.code == 0) {
                                vm.user = res.data.data;
                                $state.reload();
                            }
                        }, function (res) {
                            alert('请求失败')
                        })
        vm.$picker = {
            value: '',
            key: '',
            callback: function () {
                Course_service.get_Detail({
                    profilePicture: vm.user.profilePicture,
                    name: vm.user.name,
                    email: vm.user.email,
                    grade: vm.$picker.value
                })
                    .then(function (res) {
                        if (res.data.code == 0) {
                            vm.user = res.data.data;
                            $state.reload();
                        }
                    }, function (res) {
                        alert('请求失败')
                    })
            },
            constData: ['请选择', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
        };
    }])

