angular.module('app').constant('optionsData', function () {
        var options = {};
        options['unite'] = [{value: -1, txt: '全部'}, {value: 0, txt: '自有'},
            {value: 1, txt: '校内'}, {value: 2, txt: '合作'}],
            //上下架
            options['statut'] = [{value: undefined, txt: '全部'}, {value: '0', txt: '上架'},
                {value: 1, txt: '下架'}],
            //上下架2
            options['status2'] = [{value: undefined, txt: '全部'},
                {value: 1, txt: '上架'}, {value: 0, txt: '下架'}],
            //科目
            options['subject'] = [{value: undefined, txt: '全部'}, {value: 1, txt: '语文'},
                {value: 2, txt: '数学'}, {value: 3, txt: '外语'}],
            //课程
            options['lesson'] = [{value: undefined, txt: '全部'}, {value: 1, txt: '语文'},
                {value: 2, txt: '数学'}, {value: 3, txt: '外语'}],
            //课时
            options['period'] = [{value: undefined, txt: '全部'}, {value: 1, txt: '语文'},
                {value: 2, txt: '数学'}, {value: 3, txt: '外语'}],
            options['grade'] = [{value: undefined, txt: '全部'},
                {value: "1", txt: '一年级'}, {value: "2", txt: '二年级'},
                {value: "3", txt: '三年级'}, {value: "4", txt: '四年级'},
                {value: "5", txt: '五年级'}, {value: "6", txt: '六年级'}],
            //[客服管理] 类型
            options['kind'] = [{value: undefined, txt: '请选择'}, {value: '1', txt: 'banner'},
                {value: 2, txt: 'card'}],
            //[客服管理][用户管理]
            options['status'] = [{value: undefined, txt: '全部'},
                {value: "0", txt: '冻结'}, {value: "1", txt: '正常'}],
            options['year'] = [{value: undefined, txt: '全部'},
                {value: 1, txt: '一年级'}, {value: 2, txt: '二年级'},
                {value: 3, txt: '三年级'}, {value: 4, txt: '四年级'},
                {value: 5, txt: '五年级'}, {value: 6, txt: '六年级'}],
            //[客服管理][用户管理]
            options['classify'] = [{value: undefined, txt: '请选择'},
                {value: 1, txt: 'banner资讯'}, {value: 2, txt: 'card资讯'}],
            //[客服管理] [消息管理] 消息类型
            options['type'] = [{value: undefined, txt: '全部'},
                {value: "1", txt: '一年级'}, {value: "2", txt: '二年级'},
                {value: "3", txt: '三年级'}, {value: "4", txt: '四年级'},
                {value: "5", txt: '五年级'}, {value: "6", txt: '六年级'}],
            options['sendStatus'] = [{value: undefined, txt: '请选择'}, {value: "1", txt: '定时发送'},
                {value: "2", txt: '即时发送'}],
            options['upperOrLower'] = [{value: undefined, txt: '全部'}, {value: "0", txt: '下架'},
                {value: "1", txt: '上架'}],
            options['sendType'] = [{value: undefined, txt: '请选择'},
                {value: "1", txt: 'banner资讯'}, {value: "2", txt: 'card资讯'}],
            options['sendPeople'] = [{value: undefined, txt: '全部'}, {value: 1, txt: '语文'},
                {value: 2, txt: '数学'},{value: 3, txt: '外语'}],
            //资料管理
            options['datum'] = [{id: 1, txt: '课程资料'},
                {id: 2, txt: '教材资料'}],
            options['downGrade'] = [
            {id: 1, txt: '一年级'}, {id: 2, txt: '二年级'},
            {id: 3, txt: '三年级'}, {id: 4, txt: '四年级'},
            {id: 5, txt: '五年级'}, {id: 6, txt: '六年级'}]
        return options;
    }
)


