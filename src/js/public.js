/**
 * 弹窗处，船只信息页 tab 切换
 * @param {tab} arg tab 切换处标题的dom
 * @param {tabCt} arg tab 切换处 内容 包裹 处 的dom
 */
function ChangeTab(arg) {
    this.config = {
        tab: $(".pop-sail ul.tab"),
        tabCt: $(".pop-sail .tab-ct")
    };
    if (arg && $.isPlainObject(arg)) {
        $.extend(this.config, arg);
    } else {
        return;
    }
}

ChangeTab.prototype = {
    index: 0,
    switchTab: function () {
        var that = this;
        this.config.tab.children("li").on("click", function () {
            that.index = $(this).index();
            $(this).addClass("active").siblings("li").removeClass("active");
            // 切换内容
            that.switchCt(that.index);
        });
    },
    switchCt: function (i) {
        this.config.tabCt.children().eq(i).removeClass("din")
            .siblings().addClass("din");

            // playVideo(id);
    }
};

// 船只信息
new ChangeTab().switchTab();

// XX港口危险源监控
new ChangeTab({
    tab: $(".pop-scout1 ul.tab"),
    tabCt: $(".pop-scout1 .tab-ct")
}).switchTab();
// XX港口危险源监控
new ChangeTab({
    tab: $(".pop-scout2 ul.tab"),
    tabCt: $(".pop-scout2 .tab-ct")
}).switchTab();
// XX港口危险源监控
new ChangeTab({
    tab: $(".pop-scout3 ul.tab"),
    tabCt: $(".pop-scout3 .tab-ct")
}).switchTab();
// XX港口危险源监控
new ChangeTab({
    tab: $(".pop-scout4 ul.tab"),
    tabCt: $(".pop-scout4 .tab-ct")
}).switchTab();
// XX港口危险源监控
new ChangeTab({
    tab: $(".pop-scout5 ul.tab"),
    tabCt: $(".pop-scout5 .tab-ct")
}).switchTab();

// 航运监控港口
new ChangeTab({
    tab: $(".pop-port ul.tab"),
    tabCt: $(".pop-port .tab-ct")
}).switchTab();

// 视频播放功能

function playVideo(id) {
    if ($("#" + id).find("video")) {
        $("#" + id).find("video").each(function () {
            // if ($(this).css("display") == "block") {
                $(this)[0].play();
                //console.log("star");
            // } else {


            // }
        });
    } else {
        $(this)[0].pause();
        //console.log("end");
    }
}

function closeVideo(id) {
    if ($("#" + id).find("video")) {
        $("#" + id).find("video").each(function () {
                $(this)[0].pause();
        });
    }
}

//弹出层js
function show(cover,id){

    playVideo(id);

    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    var objCover=document.getElementById(cover);
    var objId=document.getElementById(id);
    var scrollW=document.documentElement.scrollWidth;
    if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        var scrollH=document.documentElement.clientHeight;
    }else{
        var scrollH=document.documentElement.scrollHeight;
    }
    if (Sys.safari || Sys.chrome) {
        var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
    }else{
        var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;
    }
    var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;

    objCover.style.width=scrollW+"px";
    objCover.style.height=scrollH+"px";
    objCover.style.visibility="visible";

    objId.style.top=T+"px";
    objId.style.left=L+"px";
    objId.style.visibility="visible";

    window.onresize=function (){
        var objCover=document.getElementById(cover);
        var objId=document.getElementById(id);
        var scrollW=document.documentElement.scrollWidth;
        if(document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            var scrollH=document.documentElement.clientHeight;
        }else{
            var scrollH=document.documentElement.scrollHeight;
        }
        if (Sys.safari || Sys.chrome) {
            var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.body.scrollTop;
        }else{
            var T=(document.documentElement.clientHeight-objId.clientHeight)/2+document.documentElement.scrollTop;
        }
        var L=(document.documentElement.clientWidth-objId.clientWidth)/2+document.documentElement.scrollLeft;


        objCover.style.width=scrollW+"px";
        objCover.style.height=scrollH+"px";

        objId.style.top=T+"px";
        objId.style.left=L+"px";
    }
}
function hide(cover,id){

    closeVideo(id);

    //将页面全部select换件设为可用状态
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    var objCover=document.getElementById(cover);
    var objId=document.getElementById(id);
    objCover.style.visibility="hidden";
    objId.style.visibility="hidden";
}
