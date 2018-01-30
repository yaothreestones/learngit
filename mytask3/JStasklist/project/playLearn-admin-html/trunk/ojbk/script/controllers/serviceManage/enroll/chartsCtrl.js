angular.module('app')
    .controller('chartsCtrl',['$scope','Course_service',function ($scope,Course_service) {
        var vm = this;
        Course_service.get_Enroll({
            params:vm.params
        })
        .then(
            function (res) {
                console.log(res)
                vm.data = [{
                    "date": "2017-12-01",
                    "count": 13,
                    "total": 13
                },
                    {
                        "date": "2017-12-02",
                        "count": 6,
                        "total": 19
                    },
                    {
                        "date": "2017-12-03",
                        "count": 24,
                        "total": 43
                    },
                    {
                        "date": "2017-12-04",
                        "count": 40,
                        "total": 83
                    },
                    {
                        "date": "2017-12-05",
                        "count": 44,
                        "total": 127
                    },
                    {
                        "date": "2017-12-06",
                        "count": 13,
                        "total": 140
                    },
                    {
                        "date": "2017-12-07",
                        "count": 24,
                        "total": 164
                    },
                    {
                        "date": "2017-12-08",
                        "count": 16,
                        "total": 180
                    },
                    {
                        "date": "2017-12-09",
                        "count": 44,
                        "total": 224
                    },
                    {
                        "date": "2017-12-10",
                        "count": 57,
                        "total": 281
                    },
                    {
                        "date": "2017-12-11",
                        "count": 27,
                        "total": 308
                    },
                    {
                        "date": "2017-12-12",
                        "count": 45,
                        "total": 353
                    },
                    {
                        "date": "2017-12-13",
                        "count": 28,
                        "total": 381
                    },
                    {
                        "date": "2017-12-14",
                        "count": 57,
                        "total": 438
                    },
                    {
                        "date": "2017-12-15",
                        "count": 39,
                        "total": 477
                    },
                    {
                        "date": "2017-12-16",
                        "count": 24,
                        "total": 501
                    },
                    {
                        "date": "2018-01-04",
                        "count": 4,
                        "total": 505
                    },
                    {
                        "date": "2018-01-05",
                        "count": 10,
                        "total": 515
                    },
                    {
                        "date": "2018-01-07",
                        "count": 2,
                        "total": 517
                    },
                    {
                        "date": "2018-01-10",
                        "count": 101,
                        "total": 618
                    },
                    {
                        "date": "2018-01-11",
                        "count": 101,
                        "total": 719
                    },
                    {
                        "date": "2018-01-12",
                        "count": 101,
                        "total": 820
                    },
                    {
                        "date": "2018-01-15",
                        "count": 103,
                        "total": 923
                    }];
                vm.count = [];
                vm.total = [];
                vm.date=[];
                angular.forEach(vm.data,function (item,index) {
                    vm.count.push(item.count);
                    vm.total.push(item.total);
                    vm.date.push(item.date);
                })
                console.log(vm.count)
                console.log(vm.total)
                console.log(vm.date);
            }
        )
    }])