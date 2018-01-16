var lp = location.pathname.split('/').slice(-2)[0];
var urls = ['zf','maofyz','tdwj','mfjm1','bhyz','smzz','fajx','bjyz','meimyz','tppclf','tppclf','jiemyz','mlzf','zhifa','huxzz'];
/*var lk =  $.inArray(lp, urls) != -1 ? 'javascript:openK()' : '/topic/obj/activity/' ;*/
var lk =  $.inArray(lp, urls) != -1 ? 'javascript:openK()' : 'javascript:openK()' ;
var tps = $.inArray(lp, urls) != -1 ? '_zf' : '' ;
var host = window.location.host;

/*$('body').prepend('<a style="display:block;" href="' + lk + '" id="actop"><img src="/img/top2' + tps + '.jpg" /><img src="/img/top1' + tps + '.jpg" style="display:none;" /></a><span id="colse" style="font-family:iconfont;display:block;width:40px;height:40px;line-height:37px;text-align:center;font-size:18px;position:fixed;top:30px;right:10px;z-index:9999;color:#fff;font-weight:bold;background:#260C49;border-radius:50%;cursor:pointer;opacity:0"></span>');

setTimeout(function () {
    $('#actop').animate({height: $('#actop img:eq(1)').height()}, 1000, function () {
        $('#actop img:eq(0)').hide();
        $('#actop img:eq(1)').show();
        $('#actop').css({position: "fixed", zIndex: "100", top: '-' + $('#actop img:eq(1)').height() + 'px'});
        $('body').css('padding-top', 100 + 'px');
        $('#actop').animate({top: "0"}, 2000, function () {

            $('#colse').css({'opacity': '1'});

        });
    });
}, 5e3);*/

var u1 = window.location.pathname.split('/')[3];
var u2 = window.location.pathname;
if (u1 == 'activity' || u1 == 'anniversary') {
    $('#actop').remove();
    $('#colse').remove();
}
if (u2 == '/' || u2 == '/index.html') {
    $('#actop').remove();
    $('#colse').remove();
}

$("#colse").click(function () {
    $("#actop").hide();
    $("#colse").hide();
    $('body').css('padding-top', 0);
});
$(function () {
    if (u2 != '/' && u2 != '/index.html') {
        $(".indexBanner").slide({
            mainCell: ".sider",
            titCell: ".hd",
            effect: "fold",
            autoPage: true,
            interTime: 5000,
            autoPlay: true
        });
    }
    $('.menuTab li').hover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.menubox .menuChange').eq($(this).index()).show().siblings().hide();
    });

    $('.navBarbox').hover(function () {
        $('.project_nav').stop().animate({
            width: "1200px",
            height: "520px"
        }, 400);
    }, function () {
        $('.project_nav').stop().animate({
            width: "0px",
            height: "0px"
        }, 200);
    });

    /*删除文章页侧边banner*/
    $('.com_l .pic').remove();
    /*临时替换活动链接*/
    $('a[href="/topic/obj/guojzx/"]').attr('href', '/topic/obj/activity/');

    /*临时审核修改*/
    var lstr = {
        'so.shmylikezx.cn': ' 医疗美容科',
        'so.99yimei.com': ' 美容外科',
        'so.91mylike.com': ' 美容皮肤科',
        'so.mylike88.com': ' 美容中医科',
        'so1.mylike88.com': ' 美容中医科'
    };

    var l = location.host;
    if(lstr[l] != undefined){
        $('.topBar li p:eq(0)').append( lstr[l] );
        $('.copyright').text('版权所有 © 上海美莱医疗美容门诊部' + lstr[l] + ' 沪ICP备14048956号-1 沪医广【2015】第09-08-G159号 沪卫(中医）网审[2015]第10207号');
    }
});

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        location.href = 'http://m.shmylike.com/';
    }
}

browserRedirect();

/*判断是否为小弹窗var topicpath = window.location.pathname.split('/')[3];
 var topics = ['dgfx','xzsx','ryqb','longbzh','gznf','ycjz','dental'];
 if(topics.indexOf(topicpath) !== 0){*/
/*中间弹出框*/
document.writeln("<style>");
document.writeln("#form{position: absolute; top: 372px; left: 458px; display: block; overflow: hidden; margin-bottom: 10px !important; }");
document.writeln("#form input{border: 0;}");
document.writeln("#form input.callbF_text { float: left; padding-left: 13px; width: 150px; height: 32px; outline: 0; border-radius: 15px 0 0 15px; background-color: #e1e2ef; color: #6a7380; font-size: 14px; line-height: 30px; }");
document.writeln("#form .callbF_sub { float: left; display: block; box-sizing: border-box; width: 77px; height: 32px; border-radius: 0 16px 16px 0; background-color: #6a289e !important; color: #fff; text-align: center; text-decoration: none; font-size: 12px; line-height: 32px; cursor: pointer; font-size:14px;}");

document.writeln(".activity{width:696px;height: 260px;position:absolute;left:0;top:76px;}");
document.writeln("</style>");
document.writeln("<div id=\"divM\">");
/*document.writeln("<a class=\'zixun\' href=\'javascript:void(0);\' onclick=\'openK(\"Pc-tc-10000\");return false;\'><img  src=\'/swt/zixun.png\' alt=\'\'></a>");*/
document.writeln("<a class=\"activity\" href=\"" + lk + "\"></a>");
document.writeln("<a id=\"divMagb\" onclick=\"closeM()\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>");
/*****电话*******/
document.writeln("<div id='form'>");
document.writeln("  <input type=\'text\' name=\'tel\' id=\'tel\' value=\'请输入您的电话号码\' onfocus=\'if(this.value==&quot;请输入您的电话号码&quot;){this.value=&quot;&quot;};\' onblur=\'if(this.value==&quot;&quot;){this.value=&quot;请输入您的电话号码&quot;;}\' class=\'callbF_text\' />");
document.writeln("  <input type=\'submit\' name=\'submit\' value=\'免费回电\' class=\'callbF_sub\' id=\'livecall\' />");
document.writeln("</div>");

/*****电话结束*******/
/*document.writeln("<ul>");
 document.writeln("<li><a id=\"divMa1\" href=\"/\" target=\"_blank\" title=\"首页\"><i></i>首页</a></li>");
 document.writeln("<li><a id=\"divMa2\" href=\"javascript:void(0)\" onclick=\"openK();return false;\" title=\"电话\"><i></i>电话</a></li>");
 document.writeln("<li><a id=\"divMa3\" href=\"javascript:void(0)\" onclick=\"openK();return false;\"  title=\"优惠\"><i></i>优惠</a>");
 document.writeln("<li><a id=\"divMa4\" href=\"javascript:void(0)\" onclick=\"openK();return false;\" title=\"微信\"><i></i>微信</a></li>");
 document.writeln("<li><a id=\"divMa5\" href=\"/route/#wzswt\" target=\"_blank\" title=\"地址\"><i></i>地址</a></li>");
 document.writeln("</ul>");*/
document.writeln("<div class=\"ddzc\"><a href=\"/topic/other/ddzc/\" target=\"_blank\"><img src=\"/swt/ddzc.png\" /></a></div>");

document.writeln("<textarea id=\"chatcontent\" name=\"chatcontent\" placeholder=\"在此输入可直接对话\"></textarea><a id=\"zchat\" href=\"javascript:void(0);\" onclick=\"openK(\'Pc-tc-zxfs\');return false;\">咨询</a><a id=\"qchat\" href=\"javascript:void(0);\">发送</a>");
document.writeln("</div>");
/*****8-15修改*****/
document.writeln("<div id=\"divM_suoxiao\">");
document.writeln("<a id=\"divM_suoxiao_a\" onclick=\"openK();return false;\" href=\"javascript:void(0)\" target=\"_self\" title=\"点我咨询\"></a>");
document.writeln("<a id=\"divM_suoxiao_b\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>");
document.writeln("</div>");
/*左侧浮动*/
/*document.writeln("<div class='left_activity'><a href='/news/2017/0317/9818.html'><img src='/img/float_right.jpg' alt='左侧浮动'></a></div>");*/
/*判断是否为小弹窗} else {
 document.writeln("<div id=\"small_divM\" style=\"background:url(/swt/small/"+topicpath+".jpg) no-repeat;\">");
 document.writeln("<a class=\"divMagb\" onclick=\"closeM()\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>");
 document.writeln("11111");
 document.writeln("</div>");
 }*/
/*$('.left_activity').css({top:'0','margin-top':'0','width':'180px'})*/
/*中间弹框第一次弹出时间*/
setTimeout(openM, 560);
$('.ddzc').css({margin: '0 0 0 20px'});

/***不同弹窗**/
/*植发*/
var zf = ['zhifa', 'tdwj', 'zhifazj', 'zfzj', 'mfjm1', 'mfjm', 'bhyz', 'smzz', 'fajx', 'meimyz', 'bjyz', 'mlzf', 'huxzz', 'jiemyz', 'zf', 'maofyz', 'zffy', 'mfyzjjh', 'tplf', 'zthxbbhyz', 'hdsy', 'maofayz'];
/*口腔*/
var kq = ['kq', 'yinsm', 'ycjz', '3dmrg', 'qcy', 'stkciy', 'ytm', 'lgmb', 'act_kq'];
/*祛痘*/
var qd = ['zhqd','qudou2','qudou3','dy','gsqd','zyqd','qudy','gxqd','qudou','qdzm','qdzh'];
/*脱毛*/
var tm = ['bdtm','tmzx','cbbdtm','mltm3','tuomao1','tuomao','tuom','wrtuom','wrtuom'];
/*无创*/
var wc = ['bonsuan', 'zsfet', 'boniaos', 'zslb', 'zsfxb', 'zsfx', 'zspgj', 'bnsqyd', 'ruilan', 'yiwan', 'runby', 'bns', 'ymbns', 'afl', 'xxzssl', 'shoulzjg', 'stz', 'stzb', 'bnslgtc'];
/*线雕*/
var xd = [];
/*var xd = ['dbxcz', 'xdtl', 'nlty', 'xdltmb'];*/

function openM() {
    
    /*$('.ddzc').hide();
    $('#chatcontent').hide();
    $('#zchat').hide();
    $('#qchat').hide();
    $('#form').css({top:454,left:190});
    $('#form input.callbF_text').css({width:200, height:36, 'background-color':'#fff', 'border-radius':8});
    $('#form input.callbF_sub').css({height:33, width:46,'font-size':16+'px','border-radius':8+'px','position':'absolute','right':2,'top':2}).attr('value','回电');
    $('a.activity').css({width:599,height:581,top:0});
    $("#divM #divMagb").css({right:94,top:111,width:54,height:54});
    $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal.gif)",width:599,height:581,'margin-right':'-300px','margin-bottom':'-290px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
    $("#small_divM").fadeIn(1000);
    $('#divM #zchat').css({background: "#B60039"});*/
    
    $('.ddzc').show();
    $('#chatcontent').show();
    $('#zchat').show();
    $('#qchat').show();
    $('#form').css({top:373,left:452});
    $('#form input.callbF_text').css({width:150, height:29, 'border-radius':'0','background-color':'#fff'});
    $("#divM #form .callbF_sub").css("cssText", "background-color:#9C52CE!important").css({height:29,width:70}).attr('value','回电');
    $("#divM #divMagb").css({right:12,top:12});
    $('a.activity').css({width:700,height:260,top:76});
    $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'background-size':'100%'}).delay(3000).fadeIn(1000);
    $("#divM #zchat").css("background", "#9c52ce");
	$("#divM #qchat").css("background", "#ef73ad");
    $("#divM .activity").attr('href','javascript:openK()');

    if ($.inArray(lp, zf) != -1 || location.host == 'zf.mylike-sh.net') {
        $('.ddzc').show();
        $('#chatcontent').show();
        $('#zchat').show();
        $('#qchat').show();
        $('#form').css({top:372,left:458});
        $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
        $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','免费回电');
        $("#divM #divMagb").css({right:12,top:12});
        $('a.activity').css({width:700,height:260,top:76});
        $("#divM").css({background: "url(/swt/kst_zf.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
        $("#divM #zchat").css("background", "#D7751B");
        $("#divM #qchat").css("background", "#312121");
        $("#divM .activity").attr('href','javascript:openK()');
    }else if ($.inArray(lp, kq) != -1) {
        $('.ddzc').show();
        $('#chatcontent').show();
        $('#zchat').show();
        $('#qchat').show();
        $('#form').css({top:372,left:458});
        $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
        $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','免费回电');
        $("#divM #divMagb").css({right:12,top:12});
        $('a.activity').css({width:700,height:260,top:76});
        $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal_kq.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
        $("#divM #zchat").css("background", "#B60039");
        $("#divM #qchat").css("background", "#312121");
        $("#divM .activity").attr('href','javascript:openK()');
    }else if($.inArray(lp, tm) != -1){
        $('.ddzc').show();
        $('#chatcontent').show();
        $('#zchat').show();
        $('#qchat').show();
        $('#form').css({top:372,left:458});
        $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
        $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','免费回电');
        $("#divM #divMagb").css({right:12,top:12});
        $('a.activity').css({width:700,height:260,top:76});
        $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal_tm.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
        $("#divM #zchat").css("background", "#9439CE");
        $("#divM #qchat").css("background", "#607AF8");
        $("#divM .activity").attr('href','/topic/obj/tuom/');
    }else if($.inArray(lp, qd) != -1){
        $('.ddzc').show();
        $('#chatcontent').show();
        $('#zchat').show();
        $('#qchat').show();
        $('#form').css({top:372,left:458});
        $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
        $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','免费回电');
        $("#divM #divMagb").css({right:12,top:12});
        $('a.activity').css({width:700,height:260,top:76});
        $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal_qd.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
        $("#divM #zchat").css("background", "#9439CE");
        $("#divM #qchat").css("background", "#607AF8");
        $("#divM .activity").attr('href','javascript:openK()');
    }else if($.inArray(lp, wc) != -1){
        $('.ddzc').show().css('margin',0);
        $('#chatcontent').show();
        $('#zchat').show();
        $('#qchat').show();
        $('#form').css({top:372,left:458});
        $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
        $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','免费回电');
        $("#divM #divMagb").css({right:12,top:12});
        $('a.activity').css({width:700,height:260,top:76});
        $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal_wc.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
        $("#divM #zchat").css("background", "#9439CE");
        $("#divM #qchat").css("background", "#607AF8");
        $("#divM .activity").attr('href','javascript:openK()');
    }else if($.inArray(lp, xd) != -1){
        $('.ddzc').show().css('margin',0);
        $('#chatcontent').show();
        $('#zchat').show();
        $('#qchat').show();
        $('#form').css({top:372,left:458});
        $('#form input.callbF_text').css({width:150, height:32, 'border-radius':'15px 0 0 15px','background-color':'#e1e2ef'});
        $("#divM #form .callbF_sub").css("cssText", "background-color:#312121!important").attr('value','免费回电');
        $("#divM #divMagb").css({right:12,top:12});
        $('a.activity').css({width:700,height:260,top:76});
        $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_normal_xd.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).fadeIn(1000);
        $("#divM #zchat").css("background", "#9439CE");
        $("#divM #qchat").css("background", "#607AF8");
        $("#divM .activity").attr('href','javascript:openK()');
    }

    /*$('#divM').append('<marquee width="500" scrollAmount="3" direction="left" behavior="alternate" style="position:absolute;bottom:88px;right:20px;font-size:14px;"><a href="/topic/obj/mfhy/" target="_blank" style="color:#222">热烈庆祝上海九院毛发移植新进展继教班在上海美莱召开！大牌植发专家预约中...</a></marquee>');*/
    if($.inArray(lp, qd) != -1){
        $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:180px;font-size:14px;"><a href="/topic/obj/qdzm/" target="_blank" style="color:#222"></a></p>');
    }else if($.inArray(lp, zf) != -1 || location.host == 'zf.mylike-sh.net'){
        $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:20px;font-size:14px;"><a href="javascript:openK()" target="_blank" style="color:#222">2017美莱周年庆典，助力焕发更美颜值，植发全线产品7折特惠</a></p>');
    }

	if(host.indexOf("sh-mylike.com")>=0 || host.indexOf("mylikesh.cn")>=0 || host.indexOf("p.shmylike.com")>=0 || host.indexOf("so.shmylike.com.cn")>=0 || host.indexOf("mylike-sh.cn")>=0 ){
	    $("#divM").css({background: "url(http://www.shmylike.cn/swt/kst_center_wnormal.gif)",width:700,height:448,'margin-right':'-350px','margin-bottom':'-224px', 'box-shadow':'none','background-size':'100%'}).delay(3000).fadeIn(1000);
	}
    
}
 
/*执行计划*/
function openMdivM() {
    $("#divM").fadeIn(1000);
    $("#small_divM").fadeIn(1000);
}

function openMdivM_suoxiao1() {
    $("#divM_suoxiao").addClass('divM_suoxiaobg2');
}

function openMdivM_suoxiao2() {
    $("#divM_suoxiao").removeClass('divM_suoxiaobg2');
}


function closeM() {
    setTimeout(openMdivM, 5000);
    setTimeout(openMdivM_suoxiao1, 3000);
    setTimeout(openMdivM_suoxiao2, 5000);

    $("#divM").animate({
        'width': '0',
        'height': '0',
        'right': '0%',
        'bottom': '0%',
        'margin-right': '0px',
        'margin-bottom': '0px'
    }, 1000, function () {
        $("#zchat").hide();
        $("#qchat").hide();
        $("#divM ol").hide();
    });
    if ($("#small_divM").length > 0) {
        $("#small_divM").fadeOut(1000).delay(30000).animate({
            'width': '700px',
            'height': '448px',
            'right': '50%',
            'bottom': '50%',
            'margin-right': '-350px',
            'margin-bottom': '-224px'
        }, 1000, function () {
            $("#zchat").show();
            $("#qchat").show();
            $("#divM ol").show();
        });
    } else {

        if($.inArray(lp, zf) != -1 || $.inArray(lp, kq) != -1 || $.inArray(lp, tm) != -1 || $.inArray(lp, qd) != -1 || $.inArray(lp, wc) != -1 || $.inArray(lp, xd) != -1 ){
 
            $("#divM").fadeOut(1000).delay(30000).animate({
                'width': '700px',
                'height': '448px',
                'right': '50%',
                'bottom': '50%',
                'margin-right': '-350px',
                'margin-bottom': '-224px'
            }, 1000, function () {
                $("#zchat").show();
                $("#qchat").show();
                $("#divM ol").show();
                /*$('#divM').append('<marquee width="500" scrollAmount="3" direction="left" behavior="alternate" style="position:absolute;bottom:88px;right:20px;font-size:14px;"><a href="/news/2017/0108/9760.html" target="_blank" style="color:#222">热烈祝贺2017美莱连锁鼻整形高峰论坛暨鼻修复新技术分享会圆满闭幕</a></marquee>');*/
                if($.inArray(lp, qd) != -1){
                    $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:180px;font-size:14px;"><a href="/topic/obj/qdzm/" target="_blank" style="color:#222">上海美莱，全城战“痘”，招募100位免费祛痘见证者！</a></p>');
                }else if($.inArray(lp, zf) != -1 ){
                    $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:20px;font-size:14px;"><a href="/topic/obj/mfhy/" target="_blank" style="color:#222">金秋植发 不止焕发，更美颜值头发种植 ¥5000手术抵用金 艺术种植全线8折</a></p>');
                }else if($.inArray(lp, kq) != -1 || $.inArray(lp, tm) != -1 || $.inArray(lp, qd) != -1 || $.inArray(lp, wc) != -1 || $.inArray(lp, xd) != -1){
                    $('#divM').append('<p class="ychu" width="500" style="position:absolute;bottom:88px;right:20px;font-size:14px;"></p>');
                }
            });
        }else{
            $("#divM").fadeOut(1000).delay(30000).animate({
            	'width': '700px',
                'height': '448px',
                'right': '50%',
                'bottom': '50%',
                'margin-right': '-350px',
                'margin-bottom': '-224px'
            }, 1000, function(){
                $("#zchat").show();
                $("#qchat").show();
            });
        }
        
    }
    /*****8-15修改*****/
    $("#divM_suoxiao").show().animate({
        right: 0,
        bottom: -34
    }, 1000).animate({opacity: 1}, 1000).delay(30000).fadeOut(1000).animate({right: -225, bottom: -34, opacity: 0});
    $('#divM .ychu').remove();
}

/*如果用户点击*/
$("#divM_suoxiao_b").click(function () {
    $(this).parent().hide().removeClass('divM_donghua');
});

/*获取域名根*/
var u = window.location.host.split('.').slice(1).join('.'),
    h = location.host;


/*百度统计*/
function bd_hm(k) {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "\/\/hm.baidu.com/hm.js?" + k + "";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

var bdstr = {
    'mylike025.cn': '2be66af202118fcc4d79963b008f8d97',
    'shmylike.com':'667bb7ba4af07df0fbfbd23a28925f74',
    '021mylike.com':'e987e5b4ab9bcba446a0ee701e0ab621',
    'mylike021.com': 'a54574c8e18d33fd5e1f691af0dcfca7',
    'shmylikezx.com':'ec3b438de9fed1958dad26f47b3d0aa7',
    'shmylike.net':'3791df51f79bee73101c296f46fc8da6',
    'sh-mylike.com':'deaa688fcf4928675e37e5ee7e3027f9',
    'ml-kq.com':'a54574c8e18d33fd5e1f691af0dcfca7',
    '021mylike.cn':'a68e2481291b84eb2914dad920466716',
    'shmylike.cn':'63026dd1b8e82dd544ee2a84f2e5be16',
    'ml-dental.com':'fee997ae2ad00737c8d74be690dd02fc',
    'shanghaizhengxing.cn':'ee8f717906e4116aab4cdf10c1d2f98c',
    '177mr.com':'a9062776fe7f9e46fe6c2a64736f32e2',
    'shmlzx.cn':'973db68a905c8db2563a9dfd54daf18c',
    'mlylmr.com':'97840c5632b2a60cb1f969babb7f9395',
    'sh-mylike.net':'314a39e43eb1452b81b021881cd81584',
    'mylikesh.net':'62609a1bf375e4f1dead2a93c264118a',
    'mylikesh.cn':'c9528524ae8d24583143c3a9c55bb05c',
    'shmylike.co':'a9eac69d1e7b6ab014c1fc3c71c9e6b5',
    'shmylike.cc':'77ec9ffecfe9629720360d1294af80e8',
    'shmylike.com.cn':'7f37a8ffce73139a61834ca99031f79f',
    '22235555.cn':'f56c436b3f3461d23f670b1861d63f81',
    'mylike-sh.net':'8816774160e307841afa4087c8b69ba1',
    'mylike025.net':'e3b9944de5ef1969ce16ced7e895fadf',
    'mylike025.cc':'a152261e042403aa6451a93f86147c76',
    'mylike.asia':'abf1aa5b1c936178ccb6236d6e24c0f6'
};

bd_hm(bdstr[u]);

/*站长统计20160202*/
var cnzz_protocol = (("https:" == document.location.protocol) ? " https:\/\/" : " http:\/\/");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1254985200'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1254985200%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));


/*百度推送*/
if (window.location.hostname == 'www.shmylike.com') {
    (function () {
        var push = document.createElement("script");
        push.src = "http:\/\/push.zhanzhang.baidu.com/push.js";
        var js = document.getElementsByTagName("script")[0];
        js.parentNode.insertBefore(push, js);
    })();
}

/*360推送*/
(function () {
    var src = document.location.protocol + '\/\/js.passport.qihucdn.com/11.0.1.js?09c627a4795ef2c79bc339ebf54bf3a4';
    document.write('<script src="' + src + '" id="sozz"><\/script>');
})();

/* google Analytics */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-86800835-1', 'auto');
ga('send', 'pageview');

document.writeln("<map name='kst'><area shape='circle' coords='438,12,13' href='javascript:void(0);' onclick='closeM();return false;'></map>");

/*返回顶部*/
function gotoTop() {
    window.scrollBy(0, -100);
    scrolldelay = setTimeout(gotoTop, 10);
    /*获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值*/
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop == 0) clearTimeout(scrolldelay);
}

/*悬浮*/
document.writeln("<div id=\"divR\">");
document.writeln("<a title=\"在线咨询\" target=\"_self\" onclick=\"openK('Pc-yc-zx');return false;\" class=\"divRzx\" href=\"javascript:void(0)\"><i id=\"divRsjs\">3</i></a>");
document.writeln("<a class=\"divRqq\" title=\"企业QQ\" href=\"javascript:void(0);\" onclick=\"QQ();return false;\"></a>");
document.writeln("<div class=\"divRtell\">");
document.writeln("<div class=\"divRtell_inner\">");
document.writeln("<a title=\"免费回电\" href=\"javascript:void(0)\" class=\"tell_link\">");
document.writeln("<div class=\"divRtell_in\">");
document.writeln("<form name=\"f\" id=\"f\" method=\"post\" action=\"http:\/\/tel.kuaishang.cn/calld.php\" target=\"aa\">");
document.writeln("<input type=\"hidden\" name=\"fromurl\" id=\"call_fromurl\" value=\"\" />");
document.writeln("<input type=\"hidden\" name=\"sid\" value=\"2015201030\" />");
document.writeln("<input type=\"hidden\" name=\"did\" value=\"1011578\" />");
document.writeln("<input type=\"text\" name=\"tel\" id=\"tel\" onblur=\"if(!value)value=defaultValue\" onfocus=\"value=''\" value=\"请输入您的电话号码\" class=\"tel\" />");
document.writeln("<input type=\"submit\" name=\"submit\" value=\"免费回电\" class=\"call\" id=\"call\" />");
document.writeln("</form><iframe name=\"aa\" id=\"aa\" frameborder=\"0\" width=\"0\" height=\"0\"></iframe>");
document.writeln("</div>");
document.writeln("</a>");
document.writeln("</div>");
document.writeln("</div>");
/*document.writeln("<a title=\"微信\" class=\"divwx\" target=\"_blank\" href=\"javascript:void(0)\" onclick=\"openK('youcewx');return false;\"><!--<img src=\"/img/wx.jpg\" alt=\"\" id=\"wx\" />--></a>");*/
document.writeln("<a title=\"地址\" class=\"divRaddre\" target=\"_blank\" href=\"/route\"></a>");
document.writeln("<a class=\"backto_top\" onclick=\"pageScroll();\"title=\"返回顶部\" target=\"_self\"></a>");
document.writeln("</div>");
/************************中间***********************/

/*中间弹出和右下角*/

/*回到顶部*/
function pageScroll() {
    $('body,html').animate({scrollTop: 0}, 1000);
    return false;
}

/*文章页专家答疑*/
$("dd:contains('专家答疑')").click(function () {
    openK();
});

/*随机数*/
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
var num = GetRandomNum(40, 70);
$(document).ready(function () {
    document.getElementById("divRsjs").innerHTML = num;
    /*document.getElementById("divRsjs2").innerHTML = num;*/
});
/************************右侧结束***********************/

var live_url = location.pathname+location.search;
var ll = ['/','/?bdpz', '/?pzpc', '/?pz', '/?bdpz'];

/*live800*/
if( u == 'sh-mylike.com' || u == 'mylikesh.cn' ){
    window.live = { config:98, skill:37 };
} else if($('meta[name="seo"]').length){
    window.live = { config:81, skill:20 };
} else if(h == 'so.shmylike.com.cn'){
    window.live = { config:86, skill:25 };
} else if(ll.indexOf(live_url) != -1){
    // window.live = { config:84, skill:23 };
    window.live = { config:81, skill:20 };
} else {
    //window.live = { config: 34, skill: 2 };
    window.live = { config:81, skill:20 };
    $.ajax({
        url:'/plus/i.php?t=live800',
        type:'get',
        dataType:'json',
        async:false,
        success:function(data){
            var res = data ? data : [];
            var fz = res.filter(function(live){
                return live.link.indexOf(location.pathname) != -1;
            });
            if(fz.length){
                window.live = { config: fz[0].id[0], skill: fz[0].id[1], type: fz[0].type };
            }
        }
    });

}

document.write('<scr' + 'ipt language="javascript" src="https:\/\/sh.mylikechat.com/live800/chatClient/monitor.js?companyID=771670&configID=33&codeType=custom&insidePageSkillID=' + live.skill + '"></scr' + 'ipt>');

/*live800*/
var fn={urlEncode:function(Str){if(Str==null||Str==""){return""}var newStr="";function toCase(sStr){return sStr.toString(16).toUpperCase()}for(var i=0,icode,len=Str.length;i<len;i++){icode=Str.charCodeAt(i);if(icode<16){newStr+="%0"+icode.toString(16).toUpperCase()}else{if(icode<128){if(icode==32){newStr+="+"}else{if((icode>=48&&icode<=57)||(icode>=65&&icode<=90)||(icode>=97&&icode<=122)){newStr+=Str.charAt(i)}else{newStr+="%"+toCase(icode)}}}else{if(icode<2048){newStr+="%"+toCase(192+(icode>>6));newStr+="%"+toCase(128+icode%64)}else{newStr+="%"+toCase(224+(icode>>12));newStr+="%"+toCase(128+(icode>>6)%64);newStr+="%"+toCase(128+icode%64)}}}};return newStr},urlDecode:function(Str){if(Str==null||Str==""){return""}var newStr="";function toCase(sStr){return sStr.toString(16).toUpperCase()};for(var i=0,ichar,len=Str.length;i<len;){if(Str.charAt(i)=="%"){ichar=Str.charAt(i+1);if(ichar.toLowerCase()=="e"){newStr+=String.fromCharCode(((parseInt("0x"+Str.substr(i+1,2))-224)*4096)+((parseInt("0x"+Str.substr(i+4,2))-128)*64)+(parseInt("0x"+Str.substr(i+7,2))-128));i+=9}else{if(ichar.toLowerCase()=="c"||ichar.toLowerCase()=="d"){newStr+=String.fromCharCode(((parseInt("0x"+Str.substr(i+1,2))-192)*64)+parseInt("0x"+Str.substr(i+4,2))-128);i+=6}else{newStr+=String.fromCharCode(parseInt("0x"+Str.substr(i+1,2)));i+=3}}}else{newStr+=Str.charAt(i).replace(/\+/," ");i++}};return newStr},setCookie:function(name,value,expafter){var Days=30;var exp=new Date();if(expafter&&parseInt(expafter)>0){exp.setTime(exp.getTime()+expafter*1000)}else{exp.setTime(exp.getTime()+Days*24*60*60*1000)}document.cookie=name+"="+escape(value)+";expires = "+exp.toGMTString()+";path=/"},setSessionCookie:function(name,value){document.cookie=name+"="+escape(value)+";path=/"},getCookie:function(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");arr=document.cookie.match(reg);if(arr){return unescape(arr[2])}else{return null}},isBaidu:function(refurl){var regStr=/[a-zA-Z0-9\u4E00-\u9FA5][\-a-zA-Z0-9\u4E00-\u9FA5]{0,62}(\.[a-zA-Z0-9\u4E00-\u9FA5][\-a-zA-Z0-9\u4E00-\u9FA5]{0,62})+/gi;var darr=refurl.match(regStr);if(darr&&darr[0].indexOf(".baidu.")>0){return true}else{return false}},getBDParam:function(refurl,keys){var wd=null;for(var i=0,length=keys.length;i<length;i++){var start=refurl.indexOf(keys[i]);if(start>0){var end=refurl.indexOf("&",start+1);if(end<0){end=refurl.length}wd=[keys[i],refurl.substring(start+keys[i].length,end)];break}}return wd},getBaiduWd:function(refurl){var keys=["&wd=","&word=","&rqwd=","?wd=","?word=","?rqwd="];return fn.getBDParam(refurl,keys)},getBDEqid:function(refurl){var keys=["&eqid=","?eqid="];return fn.getBDParam(refurl,keys)}},vis={startflag:false,actions:[],justUrlLen:function(){var pagelocation=fn.urlEncode(document.URL);var dfer=fn.getCookie("pageReferrInSession");var newRef=document.referrer;if(dfer===null||dfer===""||(dfer!=newRef&&fn.isBaidu(newRef))){dfer=newRef;if(dfer!==null&&dfer!==""){fn.setSessionCookie("pageReferrInSession",dfer)}}var pagereferrer=fn.urlEncode(dfer);var firstenterurl=fn.getCookie("firstEnterUrlInSession");if(firstenterurl!=null&&firstenterurl!=""){firstenterurl=fn.urlEncode(firstenterurl)}else{firstenterurl=fn.urlEncode(window.location);fn.setSessionCookie("firstEnterUrlInSession",window.location)}var pagetitle;if(document.title.length>80){pagetitle=fn.urlEncode(document.title.substring(0,80))}else{pagetitle=fn.urlEncode(document.title)}if((pagetitle+pagelocation+pagereferrer).length>1600){var maxTitleLen=198;var maxLocLen=700;var maxRefLen=700;if(pagetitle.length>maxTitleLen){pagetitle=pagetitle.substring(0,maxTitleLen)}if(pagelocation.length>=maxLocLen){pagelocation=pagelocation.substring(0,maxLocLen)}if(pagereferrer.length>=maxRefLen){pagereferrer=pagereferrer.substring(0,maxRefLen);var isBaidu=fn.isBaidu(dfer);if(isBaidu){var wdArray=fn.getBaiduWd(dfer);var eqidArray=fn.getBDEqid(dfer);if(wdArray!==null||eqidArray!==null){var tempRef=fn.urlDecode(pagereferrer);if(wdArray!==null){var tempWd=fn.getBaiduWd(tempRef);if(tempWd===null){tempRef=tempRef+wdArray[0]+wdArray[1]}else{if(wdArray[1]!==tempWd[1]){tempRef=tempRef.replace(wdArray[0],wdArray[0]+wdArray[1]+"&")}}}if(eqidArray!==null){var tempEqid=fn.getBDEqid(tempRef);if(tempEqid===null){tempRef=tempRef+eqidArray[0]+eqidArray[1]}else{if(eqidArray[1]!==tempEqid[1]){tempRef=tempRef.replace(eqidArray[0],eqidArray[0]+eqidArray[1]+"&")}}}fn.setSessionCookie("pageReferrInSession",tempRef);pagereferrer=fn.urlEncode(tempRef)}}}}vis.page={"title":pagetitle,"location":pagelocation,"referrer":pagereferrer,"firstenterurl":firstenterurl}}};vis.justUrlLen();

function openK(){
    var K = 'https:\/\/sh.mylikechat.com/live800/chatClient/chatbox.jsp?companyID=771670&configID=' + live.config + '&jid=&skillId=' + live.skill + '&s=1';
    var pagetitle;
    if (document.title.length > 80) {
        pagetitle = fn.urlEncode(document.title.substring(0, 80));
    } else {
        pagetitle = fn.urlEncode(document.title);
    }

    K+= "&enterurl=" + fn.urlEncode(document.URL);
    K+= "&pagetitle=" + pagetitle;

    var pagereferrinsession=fn.getCookie("pageReferrInSession");
    if(pagereferrinsession==null || pagereferrinsession==" ")pagereferrinsession="";
    K+= "&pagereferrer="+fn.urlEncode(pagereferrinsession);

    var firstenterurlinsession=fn.getCookie("firstEnterUrlInSession");
    if(firstenterurlinsession==null || firstenterurlinsession==" ")firstenterurlinsession="";
    K+= "&firstEnterUrl="+fn.urlEncode(firstenterurlinsession);
    /*window.open(K, "newwindow", "height=549px, width=900px, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");*/
    window.open(K, "_blank");
}

document.writeln("<div id=\"divRsjs2\" style=\"display:none\"></div>");

window.onload = function () {
    $("#qchat").click(function () {
        var ct = $("#chatcontent").val();
        KST(ct);
    });
    $(".hd_index a").click(function () {
        window.open("/topic/other/fqhd/", "_blank");
    });

    /*链接新窗口打开*/
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href[0] != 'j' && document.links[i].hash[0] != '#') {
            document.links[i].setAttribute('target', '_blank');
        }
    }
};

/*临时删除*/
$('.com_l .al').is(':visible') && $('.com_l .al').remove();
$('.mldoctors').is(':visible') && $(".mldoctors").remove();

function KST(content) {
    var K = 'https:\/\/sh.mylikechat.com/live800/chatClient/chatbox.jsp?companyID=771670&configID=' + live.config + '&jid=&skillId=' + live.skill + '&s=1';
    var pagetitle;
    if (document.title.length > 80) {
        pagetitle = fn.urlEncode(document.title.substring(0, 80));
    } else {
        pagetitle = fn.urlEncode(document.title);
    }

    K+= "&enterurl=" + fn.urlEncode(document.URL);
    K+= "&pagetitle=" + pagetitle;

    var pagereferrinsession=fn.getCookie("pageReferrInSession");
    if(pagereferrinsession==null || pagereferrinsession==" ")pagereferrinsession="";
    K+= "&pagereferrer="+fn.urlEncode(pagereferrinsession);

    var firstenterurlinsession=fn.getCookie("firstEnterUrlInSession");
    if(firstenterurlinsession==null || firstenterurlinsession==" ")firstenterurlinsession="";
    K+= "&firstEnterUrl="+fn.urlEncode(firstenterurlinsession);
    if(content)
    K+="&prePareMsg="+encodeURIComponent(content);
    /*window.open(K, "newwindow", "height=549px, width=900px, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");*/
    window.open(K, "_blank");
}

function QQ() {
    var newE = document.createElement("iframe");
    newE.style.display = 'block';
    newE.src = "tencent:\/\/message/?Menu=yes&amp;uin=800102990&amp;Service=58&amp;SigT=15C7471141B27F957D5F5BB402C2ED1B311C6B8990AC29A62338DB9266542A8A2D1000AC4AAE820BEB557F96928D5A023A000BBBE6F77C6C77C9B54A15250F38D23D0CFBF78E2C190DBD52072FAF5C2F&amp;SigU=842D821E7D758F62E966F5459472ADE04D734A29717EFE0475ADE47BE6D1F30558A0F090C6C1FF73";
    document.body.appendChild(newE);
    setTimeout(function () {
        $("iframe").remove();
    }, 1000);
}

/*移动设备访问跳转*/
function is_mobile() {
    var regex_match = /(ipad|ipod)/i;
    var u = navigator.userAgent;
    var result = regex_match.exec(u);
    if (null == result) {
        return false;
    } else {
        return true;
    }
}

if (is_mobile()) {
    document.getElementsByTagName("body")[0].className = "active";
    $("body.active").css({
        margin: "0 auto",
        minWidth: "1366px"
    });

}

/*电话回拨*/
$(function () {
    var ref = "";
    if (document.referrer.length > 0) {
        ref = document.referrer;
    }
    try {
        if (ref.length == 0 && opener.location.href.length > 0) {
            ref = opener.location.href
        }
    } catch (e) {
        ref = window.location.href
    }
    document.getElementById("call_fromurl").value = ref;

    function getTop(e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) {
            offset += getTop(e.offsetParent);
        }
        return offset;
    }

    function getLeft(e) {
        var offset = e.offsetLeft;
        if (e.offsetParent != null) {
            offset += getLeft(e.offsetParent);
        }
        return offset;
    }

    function gShopTip(obj) {
        if (document.getElementById("call_re1DFef") === null) {
            var objTipDiv = document.createElement("div");
            objTipDiv.innerHTML = '<div id="call_re1DFef" style="display:none;width: 222px; height: 120px;font-size: 12px; vertical-align: middle; color: #46516f; padding-top: 8px;background:url("http:\/\/tel.kuaishang.cn/images/cShowTip3.gif") no-repeat; text-align: center;"></div>';
            document.body.appendChild(objTipDiv);
        }
        document.getElementById("call_re1DFef").style.display = "block";
        document.getElementById("call_re1DFef").style.position = "absolute";
        document.getElementById("call_re1DFef").style.left = getLeft(obj) + "px";
        document.getElementById("call_re1DFef").style.top = getTop(obj) - 120 + "px";
        obj.style.color = "#cb3c2d";
    }

    function ghideShowTip() {
        document.getElementById("call_re1DFef").style.display = "none";
    }

    $("a[href*='javascript:openK']").removeAttr('target');

    $('#livecall').click(function(){
        var tel = $('#tel').val();
        var enterurl = window.location.href;
        $.ajax({
            url:
            'https://sh.mylikechat.com/live800/SurferServer?cmd=120&companyID=771670&phoneNum='+tel+'&enterurl='+enterurl,
            dataType: "jsonp",
            jsonp: "callback",
            success: function (data) {
                if(data === 0)
                {
                    alert('你已留电成功，请留意我们的来电！');
                } else if(data === 2)
                {
                    alert('手机号码不能为空！');
                } else if(data === 3)
                {
                    alert('手机格式错误！');
                }

            }
        })
    });
});

/*站内搜索*/
(function () {
    document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E'));
    var bdcs = document.createElement('script');
    bdcs.type = 'text/javascript';
    bdcs.async = true;
    bdcs.src = 'http:\/\/znsv.baidu.com/customer_search/api/js?sid=7884947307120654941' + '&plate_url=' + encodeURIComponent(window.location.href) + '&t=' + Math.ceil(new Date() / 3600000);
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bdcs, s);
})();

$("#qiao-wrap").parents().append("<s></s>");

var locajax = function (n, m, s) {
    $.ajax({
        url: "http://www.shmylike.cn/plus/i.php?t=" + n,
        dataType: "json",
        type: "get",
        success: function (data) {
            if (data != null) {
                $('.' + n + ' .sider').empty();
                for (var i = 0; i < data.length; i++) {
                    var html = {
                        index_br: ['<li class="' + data[i].id + '"><a href="' + data[i].link + '"></a></li>', '.indexBanner'],
                        newActivity: ['<a href="' + data[i].link + '"><img width="650" height="310" src="http://www.shmylike.cn' + data[i].pic + '"></a>', ''],
                        left_banner: ['<li><a href="' + data[i].link + '" title="' + data[i].name + '"><img src="' + data[i].src + '" width="268" height="266" alt="' + data[i].name + '" /></a></li>', ''],
                        article_banner: ['<a href="' + data[i].link + '"><img src=' + data[i].src + '" /></a>', '']
                    };
                    $('.' + n).is(':visible') || $(html[n][1]).addClass(n);
                    if (data.length != $('.' + n + ' .sider li').length) {
                        $('.' + n + ' .sider').append(html[n][0]);
                    }
                }
                (function slider() {
                    $('.' + n).slide({
                        mainCell: s,
                        effect: m,
                        titCell: ".hd",
                        interTime: 5000,
                        delayTime: 1000,
                        autoPage: true,
                        autoPlay: true
                    });
                })(n, m, s);
            }
        }
    });
};

$('.indexBanner').is(':visible') && locajax('index_br', 'leftLoop', '.sider');
$('.newActivity').is(':visible') && locajax('newActivity', 'leftLoop', '.sider');
$('.left_banner').is(':visible') && locajax('left_banner', 'leftLoop', '.sider');
$('.article_banner').is(':visible') && locajax('article_banner', 'leftLoop', '.sider');

/*植发领用抵用金*/
function getDJ(){
    $('body').append('<div class="get-bg"><div class="get-j"><p class="g-close" style="right: 4px; top: 4px;"></p><div class="g-head"><h1>恭喜您！</h1><span>成功获得5000元手术低佣金</span></div><div class="g-input"><span>输入相关信息，即可到院领取</span><ul><li><label>姓名：</label><input type="text" name="name" id="name"></li><li><label>电话：</label><input type="text" name="tel" id="tel"></li></ul></div><div class="g-button"><a href="javascript:void(0);" id="submit">点击提交</a><a href="javascript:void(0);" id="chat">在线咨询</a></div></div>');
    $('.g-close').bind("click", function(){
        $('.get-bg').remove();
    });
    $('.g-button #submit').bind("click", function(){
        var name = $('.g-input #name').val();
        var tel = $('.g-input #tel').val();

        if(name == '' || tel == ''){
            alert('请填写真实姓名和有效电话！');
            return;
        }
        function getNow() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
            return currentdate;
        }

        $.ajax({
            type: "POST",
            url:"http://www.shmylike.com/plus/raffle.php",
            data:{
                diyid : 50,
                time : getNow,
                name : name,
                number : tel
            },
            success: function(msg) {
                $('.get-bg').remove();
                alert('恭喜您，领取成功！');
                openK();
            }
        });
    });
    $('.g-button #chat').bind("click", function(){
        openK();
    });
}