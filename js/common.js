//封装document.getElememtById
function my$(id) {
    return document.getElementById(id);
}

//获取一个全局变量dataList
var dataList = [{
    title: "高级版",
    message: "独立摄影师",
    myClass: "high1",
    circlesList: [
        "标题1",
        "标题3",
        "标题4",
        "标题8",
        "标题10",
    ]
},
    {
        title: "定制版",
        message: "小型工作室",
        myClass: "design1",
        circlesList: [
            "标题1",
            "标题2",
            "标题3",
            "标题4",
            "标题5",
            "标题6",
            "标题7",
            "标题8",
            "标题9",
            "标题10",
        ]
    }
]

function xuan() {
    //获取id为xuan节点
    var xuanObj = my$("xuan");

    let htmllet = "";
    //获取xuan里面的子节点
    for (var i = 0; i < dataList.length; i++) {
        htmllet += '<div class="a '
        if (i == 0) {
            htmllet += 'focus';
        }
        htmllet += '" id="xuan' + i + '" onclick="swiperColor(' + i + ')"><div class="b"><a href="#"><h4 class="' + dataList[i]["myClass"] + '">' + dataList[i]["title"] + '</h4></a><span class="du' + i + '">适合' + dataList[i]["message"] + '</span></div></div>';
    }
    xuanObj.innerHTML = htmllet;
}

xuan();

function hd() {
    //获取id为hd的节点
    var hdObj = my$("hd");

    let hdlet = "";
    //获取hd里面的子节点
    for (var i = 0; i < dataList.length; i++) {
        hdlet += '<div class="section-hd '
        if (i == 0) {
            hdlet += 'show';
        } else {
            hdlet += 'hide';
        }
        hdlet += '" id="high' + i + '"><h4>' + dataList[i]["title"] + '</h4><span>（ 适合<em>' + dataList[i]["message"] + '</em> ）</span></div>'
    }
    hdObj.innerHTML = hdlet;
}

hd();

function clickTitle(obj) {
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "block";
    popLayer.style.display = "block";

    //获取id为popBox节点
    var popTitle = my$("popBoxTitle");

    var titleValue = document.getElementsByClassName("section-hd show")[0].firstChild.innerText;
    popTitle.innerHTML = titleValue + " - " + obj.getAttribute("name");

    my$("popBoxContent").innerHTML = obj.getAttribute("desc");

};

function circles(highList) {
    var circlesList = [
        {title: "标题1", icons: "iconfont icon-yinlewenjian", content: "1111111111级版高级版高级版高级版"},
        {
            title: "标题2",
            icons: "iconfont icon-zhuanjiguangpan",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题3",
            icons: "iconfont icon-kuzi",
            content: "高级版高级版高3333333333333333高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题4",
            icons: "iconfont icon-gouwu",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题5",
            icons: "iconfont icon-yifu",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题6",
            icons: "iconfont icon-yinlewenjian",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题7",
            icons: "iconfont icon-zhuanjiguangpan",
            content: "高级版7777777777777777级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题8",
            icons: "iconfont icon-kuzi",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题9",
            icons: "iconfont icon-gouwu",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        },
        {
            title: "标题10",
            icons: "iconfont icon-yifu",
            content: "高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版高级版"
        }
    ]

    //获取id为bd节点
    var bdObj = my$("circle-parent");

    // 清空子节点
    var childs = bdObj.childNodes;
    for (var i = childs.length - 1; i >= 0; i--) {
        bdObj.removeChild(childs[i]);
    }

    let bdlet = "";

    //获取bd里面的子节点

    for (var i = 0; i < circlesList.length; i++) {
        bdlet += '<li id="' + i + '"><div '
        if (!highList.includes(circlesList[i]["title"])) {
            bdlet += 'class="first" ><div class="circle"'
        } else {
            bdlet += '><div class="circle" onclick="clickTitle(this)" name="' + circlesList[i]["title"] + '" desc="' + circlesList[i]["content"] + '"'
        }
        bdlet += '><i class="' + circlesList[i]["icons"] + '"></i></div><div class="section-title">' + circlesList[i]["title"] + '</div></div></li>'

    }
    bdObj.innerHTML = bdlet;


}

function swiperColor(id) {
    // 切换隐藏box2选择项
    document.getElementsByClassName("a focus")[0].className = "a";
    my$("xuan" + id).className = "a focus";

    // 切换隐藏box3 hd选择项
    document.getElementsByClassName("section-hd show")[0].className = "section-hd hide";
    my$("high" + id).className = "section-hd show";

    // 重新加载section-bd
    circles(dataList[id]["circlesList"]);
}


// title1 = function(name) {
//     var popBox = document.getElementById("popBox");
//     var popLayer = document.getElementById("popLayer");
//     popBox.style.display = "block";
//     popLayer.style.display = "block";

//     let elementById = document.getElementById('popBoxTitle');
//     elementById.innerHTML = "定制版-" + name;

// }

/*点击关闭按钮*/
my$("aClose").onclick = function () {
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "none";
    popLayer.style.display = "none";
};

//url传参
var code = getParam("code");
if (code == null || code < 0 || code >= dataList.length) {
    code = 0
}
swiperColor(code)

function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}


