function my$(id) {
    return document.getElementById(id);
}
xuan1 = function(){
    my$("xuan1").classList.add("focus");
    my$("xuan2").classList.remove("focus");

    var hd = my$("hd");
    hd.getElementsByClassName("section-hd")[0].style.display = "block";
    hd.getElementsByClassName("section-hd")[1].style.display = "none";

    /*var bd = my$("bd");
    bd.getElementsByClassName("first")[0].style.display = "block";
    bd.getElementsByClassName("hide")[0].style.display = "none";*/

    let x1 = my$("xuan1-yuantotot");
    let x2 = my$("xuan2-yuantotot");
    x1.className = 'show clearfix showBlock';
    x2.className = 'show clearfix showNone';
}
my$("xuan1").onclick = function () {
    xuan1()
};

xuan2 = function(){
    my$("xuan1").classList.remove("focus");
    my$("xuan2").classList.add("focus");
    var hd = my$("hd");
    hd.getElementsByClassName("section-hd")[1].style.display = "block";
    hd.getElementsByClassName("section-hd")[0].style.display = "none";

    /*var bd = my$("bd");
    bd.getElementsByClassName("first")[0].style.display = "none";
    bd.getElementsByClassName("hide")[0].style.display = "block";*/

    let x1 = my$("xuan1-yuantotot");
    let x2 = my$("xuan2-yuantotot");
    x1.className = 'show clearfix showNone';
    x2.className = 'show clearfix showBlock';
}
my$("xuan2").onclick = function () {
    xuan2()
};

/*点击弹出按钮*/
test1 = function(name){
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "block";
    popLayer.style.display = "block";

    let elementById = document.getElementById('popBoxTitle');
    elementById.innerText="高级版-"+name;

}

/*my$("circle").onclick = function () {
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "block";
    popLayer.style.display = "block";
};*/

/*点击关闭按钮*/
my$("aClose").onclick = function () {
    var popBox = document.getElementById("popBox");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "none";
    popLayer.style.display = "none";
};



//url传参
var code = getParam("code");
if (code==2){
    xuan2()
}else{
    xuan1()
}

function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}
