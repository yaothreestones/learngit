import {
    w
} from './wtools';
//set数组，自动去重
const routers = new Set();

const list = [{
    "title": "DEMO",
    "tasks": [{
        "title": "mobile登陆页",
        "name": "try/mobile",
        "completed": true,
        "isLink": true,
        "github": "http://118.31.21.185/CSStasklist/task4/task4.html"
    }, {
        "title": "mobile桌游精灵练习页面",
        "name": "baiduIfe/BootstrapTable",
        "completed": true,
        "isLink": true,
        "github": "http://118.31.21.185/CSStasklist/task7/task7.html"
    },{
        "title": "用less重构 pc企业响应式官网",
        "name": "try/danmu",
        "completed": true,
        "isLink": false,
        "github": "http://118.31.21.185/CSStasklist/task15/task15-1.html"
    },{
        "title": "Bootstrap 表单页",
        "name": "try/slideValidation",
        "completed": true,
        "isLink": true,
        "github": "http://118.31.21.185/CSStasklist/task10/task10.html"
    }]
}, {
    "title": "文章",
    "tasks": [{
        "title": "如何理解ANGULAR的脏检查？",
        "name": "article",
        "completed": true,
        "isLink": true,
        "github": "https://www.jianshu.com/p/2c42b7786835"
    }, {
        "title": "POST提交的数据有哪几种编码格式?",
        "name": "article",
        "completed": false,
        "isLink": true,
        "github": "https://www.jianshu.com/p/9172ada504fe"
    },{
        "title": "ANGULAR的核心思想是什么？怎么体现在代码里？",
        "name": "article",
        "completed": false,
        "isLink": true,
        "github": "https://www.jianshu.com/p/ab7c827ceef6"
    },{
        "title": "如何理解ANGULAR自定义指令DIRECTIVE的SCOPE属性？",
        "name": "article",
        "completed": false,
        "isLink": true,
        "github": "https://www.jianshu.com/p/7b9c774fc944"
    },{
        "title": "JS中的this指向？",
        "name": "article",
        "completed": false,
        "isLink": true,
        "github": "https://www.jianshu.com/p/ba3681e3dc68"
    }]
}]

//初始化时检查hash是否为空，空时默认指向index，否则解析hash
window.onload = function () {
    routers.add("index");
    routers.add("resume");
    routers.add("404");

    listFill() //列表填充
    let isClickRedirect = false; //是否点击跳转。是则不触发hashchange事件
    if (location.hash == '') {
        redirectTo("index")
    } else {
        let _hash = location.hash.toString().substr(2);
        analysis(_hash);
    }

    // 路由切换
    window.addEventListener('hashchange', function () {
        console.log("hashchange", isClickRedirect)
        if (!isClickRedirect) {
            let _hash = location.hash.toString().substr(2);
            analysis(_hash);
        } else {
            isClickRedirect = false;
        }
    })

    //跳转至简历
    w.addEvent(w.$("#myResume"), "click", function () {
        location.hash = '#/resume';
        require.ensure([], function () {
            require('./resume/index.js').create()
        });
    })

    //移动端导航
    w.addEvent(w.$("#moblieBlock"), "click", function () {

        if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
            if (w.$("#menuBlock").style.top == "0px") {
                w.$("#menuBlock").style.top = "-110%";
                w.$("#mobileBlockNav").style.display = "none";
                w.$("#mobileBlockAvatar").style.display = "block";
            } else {
                w.$("#menuBlock").style.top = "0px";
                w.$("#mobileBlockNav").style.display = "block";
                w.$("#mobileBlockAvatar").style.display = "none";
            }
        }
    })

    //跳转至index
    w.addEvent(w.$("#infoName"), "click", function () {
        location.hash = '#/index';
        require.ensure([], function () {
            require('./index/index.js').create()
        });
    })

    //监听列表点击事件
    w.addEvent(w.$("#myLink"), "click", function () {
        // w.$("#myLink").querySelector('a').click();
        if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
            w.$("#menuBlock").style.top = "-110%";
            w.$("#mobileBlockNav").style.display = "none";
            w.$("#mobileBlockAvatar").style.display = "block";
        }
    })
    //监听列表点击事件
    w.addEvent(w.$("#infoName"), "click", function () {
        if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
            w.$("#menuBlock").style.top = "-110%";
            w.$("#mobileBlockNav").style.display = "none";
            w.$("#mobileBlockAvatar").style.display = "block";
        }
    })
    //监听列表点击事件
    w.addEvent(w.$("#homeNav"), "click", function (e) {
        let _hash, isLi = false;
        if (e.target && e.target.nodeName == "LI" && e.target.dataset.name) {
            _hash = e.target;
            isLi = true;
        } else if (e.target && e.target.nodeName == "I" && e.target.parentNode.nodeName == "LI") {
            _hash = e.target.parentNode;
            isLi = true;
        } else if (e.target && e.target.nodeName == "SPAN" && e.target.parentNode.nodeName == "LI") {
            _hash = e.target.parentNode;
            isLi = true;
        }
        if (isLi) {
            if (_hash.querySelector('a')) {
                _hash.querySelector('a').click();
            } else {
                isClickRedirect = true;
                document.title = _hash.dataset.title;
                redirectTo(_hash.dataset.name);
                isLi = false;
            }
        }
        if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
            w.$("#menuBlock").style.top = "-110%";
            w.$("#mobileBlockNav").style.display = "none";
            w.$("#mobileBlockAvatar").style.display = "block";
        }
    })

    let originTitle=document.title,
        titleTime;
        document.addEventListener("visibilitychange",function(){
            if(document.hidden){
                document.title="死鬼干什么去了！";
                clearTimeout(titleTime)
            }else{
                document.title="你还知道回来!";
                titleTime=setTimeout(function(){
                    document.title=originTitle;
                },3000)
            }
        })
}

//列表填充
const listFill = function () {
    // console.log("listFill");
    w.removaAllChildNodes(w.$("#homeNav"));
    const cFrag = document.createDocumentFragment();
    const listWrapUl = document.createElement("ul");
    for (var key in list) {
        if (list.hasOwnProperty(key)) {
            const listCollageLi = document.createElement("li");
            listCollageLi.innerHTML = list[key].title;
            listWrapUl.appendChild(listCollageLi)
            const listTaskUl = document.createElement("ul");
            var element = list[key];
            for (var t in element.tasks) {
                var ele = element.tasks[t];
                const listTaskLi = document.createElement("li");
                const listTaskI = document.createElement("i");
                const listTaskSpan = ele.isLink ? document.createElement("a") : document.createElement("span");
                listTaskI.className =  ele.isLink ?"iconfont icon-lianjie circle-dot":"iconfont icon-iconfontdian1 circle-dot";
                ele.completed ? listTaskI.classList.add("completed") : "";
                listTaskLi.dataset.name = ele.name;
                listTaskLi.dataset.title = ele.title;
                listTaskLi.appendChild(listTaskI);
                ele.isLink ? (listTaskSpan.href = ele.github, listTaskSpan.setAttribute('target', '_blank')) : "";
                listTaskSpan.innerHTML = ele.title
                listTaskLi.appendChild(listTaskSpan)
                listTaskUl.appendChild(listTaskLi)
                routers.add(ele.name);
            }
            listWrapUl.appendChild(listTaskUl)
        }
    }
    cFrag.appendChild(listWrapUl)
    console.log(routers)
    w.$("#homeNav").appendChild(cFrag)
}

//重定向页面
const redirectTo = function (rdpath) {
    console.log("redirect to: " + rdpath)
    location.hash = '#/' + rdpath;
    require.ensure([], function () {
        require('./' + rdpath + '/index.js').create()
    });
}

// 分析hash
const analysis = function (anahash) {
    console.log("analysis: " + anahash)
    let isExisted = false;
    for (var key of routers) {
        if (key == anahash) {
            isExisted = true;
            break;
        }
    }
    isExisted ? redirectTo(anahash) : redirectTo("404");
}