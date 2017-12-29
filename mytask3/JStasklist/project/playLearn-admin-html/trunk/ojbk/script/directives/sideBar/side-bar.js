//侧边栏
(function (app) {
    app.directive('sideBar', function () {
        return {
            restrict: 'A',
            link: function ($s, e) {
                console.log(e);
                var Accordion = function (el, multiple) {
                    this.el = el || {};
                    this.multiple = multiple || false;
                    // Variables privadas
                    var links = this.el.find('.link');
                    // Evento
                    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
                }
                Accordion.prototype.dropdown = function (e) {
                    var $el = e.data.el;
                    $this = $(this),
                        $next = $this.next();
                    $next.slideToggle();
                    $this.parent().toggleClass('open');

                    if (!e.data.multiple) {
                        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
                    }
                    ;
                }
                var accordion = new Accordion($('#accordion'), false);
                var storage = window.sessionStorage;
                if (storage.getItem('focusId')) {
                    var focusId = storage.getItem('focusId');
                    if ($("#" + focusId).parent().parent().hasClass('submenu')) {
                        $("#" + focusId).parent().parent().slideToggle();
                        $("#" + focusId).addClass("active");
                        $("#" + focusId).parent().parent().parent().find("div").children('i').addClass('open');
                        console.log($("#" + focusId).parent().parent().parent().find("div").children('i').addClass('open'))
                    } else {
                        $("#" + focusId).addClass("active");
                        console.log($("#" + focusId).addClass("active"))
                    }
                }
                var navClick = function (el, multiple) {
                    this.el = el || {};
                    this.multiple = multiple || false;
                    var links = this.el.find('.lick');
                    var domes = this.el.find('a');
                    console.log(domes)
                    //一级栏绑定点击事件
                    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
                    //二级栏绑定点击事件
                    domes.on('click', {el: this.el, multiple: true}, this.dropdown);
                };
                //定义扩展的dropdown方法
                navClick.prototype.dropdown = function (e) {
                    var $el = e.data.el,
                        $this = $(this),
                        $next = $this.next();
                    //二级菜单存在
                    if ($next.html()) {
                        //右侧图标
                        $this.find('i').toggleClass('open');
                        //展开二级子菜单
                        $next.slideToggle();
                        //二级子菜单的点击事件
                        var secondLicks = $next.find("a");
                        secondLicks.off('click').on('click', function () {
                            var that = this;
                            $('#accordion>li>div,#accordion>li>ul a').removeClass('active');
                            $(that).addClass('active');

                            storage.setItem("focusId", $(that).attr('id'));

                        });
                    } else {
                        $('#accordion>li>div,#accordion>li>ul a').removeClass('active');
                        $this.addClass('active');
                        //本地储存状态
                        storage.setItem("focusId", $this.attr('id'));
                    }
                    //始终只能打开一个一级菜单
                    if (!e.data.multiple) {
                        $el.find('.submenu').not($next).slideUp();
                        var one = $el.find(".submenu").not($next).parent();
                        one.find('div').children('i').removeClass('open');
                    }
                };
                //初始化函数
                var navs = new navClick(e, false);
            }
        }
    })
})(angular.module('app'))