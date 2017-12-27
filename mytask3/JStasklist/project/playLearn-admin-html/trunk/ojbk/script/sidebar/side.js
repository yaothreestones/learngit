var storage=window.sessionStorage;
if(storage.getItem('focusId')){
    var focusId =storage.getItem('focusId');
    if($("#"+focusId).parent().parent().hasClass('submenu')){
        $("#"+focusId).parent().parent().slideToggle();
        $("#"+focusId).addClass("active");
        $("#"+focusId).parent().parent().parent().find("div").children('i').addClass('open');
        console.log($("#"+focusId).parent().parent().parent().find("div").children('i').addClass('open'))
    }else{
        $("#"+focusId).addClass("active");
        console.log($("#"+focusId).addClass("active"))
    }
}
var navClick=function (el,multiple) {
    this.el=el || {};
    this.multiple=multiple ||false;
    var links =this.el.find('.lick');
    var domes=this.el.find('a');
    console.log(domes)
    links.on('click',{el:this.el,multiple:this.multiple},this.dropdown);
    domes.on('click',{el:this.el,multiple:true},this.dropdown);
};
navClick.prototype.dropdown=function (e) {
    var $el=e.data.el,
        $this=$(this),
        $next=$this.next();
    if($next.html()){
        $this.find('i').toggleClass('open');
        $next.slideToggle();
        var secondLicks=$next.find("a");
        secondLicks.off('click').on('click',function () {
            var that=this;
            $('#accordion>li>div,#accordion>li>ul a').removeClass('active');
            $(that).addClass('active');
            storage.setItem("focusId",$(that).attr('id'));

        });
    }else{
        $('#accordion>li>div,#accordion>li>ul a').removeClass('active');
        $this.addClass('active');
        storage.setItem("focusId",$this.attr('id'));
    }
    if(!e.data.multiple){
        $el.find('.submenu').not($next).slideUp();
        var aaa=$el.find(".submenu").not($next).parent();
        aaa.find('div').children('i').removeClass('open');
    }
};
var navs= new navClick($('#accordion'),false);
console.log(navs)