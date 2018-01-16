var final = location.pathname.split('/').slice(-2)[0];
var host = window.location.host;
var Min = 10, Max = 30;
var getRand = (function(){
var Range = Max - Min;
var Rand = Math.random();
return Min + Math.round(Rand * Range);
})(Min,Max); 
var bottom_chat_status = 1;
$('.mask sup').text(getRand);
setInterval(function(){
    var getRand = (function(){
    var Range = Max - Min;
    var Rand = Math.random();
    return Min + Math.round(Rand * Range);
    })(Min,Max); 
    $('.mask sup').text(getRand);
}, 3000);

// banner 轮播
var swiper = new Swiper('#banner', {
       autoplay: 3000,
       pagination : '.hd',
       loop: true,
       paginationElement : 'li',
       bulletActiveClass:'on',
       paginationClickable :true,
       preventClicks : false,
       observer:true,
       observeParents:true,
       noSwiping : true,
       effect : 'coverflow',
 });

// TouchSlide({slideCell: "#banner",mainCell: ".bd",autoPlay: true,titCell:'.hd',autoPage:'<li></li>',effect: "leftLoop",interTime:5000});
// 广告滚动
$(".index_hot .right .tg_scroll ol li a:contains('特惠')").css("color","#dc3171");
$(".index_hot .right .tg_scroll ol li a:contains('折扣')").css("color","#943ebe");
$(".tg_scroll").slide({mainCell:".bd ol",autoPage:true,effect:"topLoop",autoPlay:true,vis:2,interTime:5000});
$(function(){
    // 案例滚动
    if($('#caseer').is(':visible')) {
    var swiper = new Swiper('#caseer', {freeMode : true, slidesPerView: 3, freeModeMomentum : true,autoplay: 3000,loop: true});
    }
/*首页特邀医生*/
    if($('#ty_doctor').is(':visible')) {
    var swiper = new Swiper('#ty_doctor', {freeMode : true, slidesPerView: 3, freeModeMomentum : true});
    }

    if($('.reality_nav').is(':visible')) {
    var galleryThumbs = new Swiper('.reality_nav', {freeMode : true, slidesPerView: 4, freeModeMomentum : true});
    }
     if($('.introduce_slider').is(':visible')) {
        var galleryThumbs = new Swiper('.introduce_slider', {freeMode : true, slidesPerView: 2.5, freeModeMomentum : true});
    }

    /*案例轮播*/
     var swiper = new Swiper('.case_box', {
            pagination: '.swiper-case',
            paginationClickable: true,
            autoHeight: true,
            observer:true,
            observeParents:true,
            onSlideChangeEnd: function(swiper){
                swiper.update();
            }
     });
    /*案例点击切换*/
    $(".reality_content .case_box:gt(0)").hide();
    $("#reality .reality_nav ul li").click(function(){
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".reality_content .case_box").eq(i).show().siblings().hide();
    }); 
    /*学术会议点击切换*/
    $(".introduce_content .introduce_slider:eq(0)").show().siblings().hide();
    $(".introduce_nav li:eq(0)").addClass('on');
    $(".introduce_nav li").click(function(){
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".introduce_content .introduce_slider").eq(i).show().siblings().hide();
    });
    
});
/*首页项目随机翻转*/
    var lh = 0;
    function fz(){
            var leng = $(".project_hot a").length;
                $('.news_nav li').removeClass('on');
                $('.news_nav li').eq(lh).addClass("on");
                lh++;
                if(lh==6)lh=0;
    }
    $(document).ready(function(){
        set = setInterval('fz()',3000);
        $(".news_nav li").hover(function(){
            $('.news_nav li').removeClass('on');
            $(this).addClass("on");
            set = clearTimeout(set);
        },function(){
            set = setInterval('fz()',3000);
        });
    });
    window.onload = setInterval(function(){
        var leng = $(".project_hot a").length;
            var ran = parseInt(Math.random()*leng);
            var arr = [ran,ran-'1'];
                $('.project_hot a').removeClass('on');
                $('.project_hot a').eq(arr[0]).addClass("on");
        },3000);
function swi(c){
    var mySwiper = new Swiper(c, {
        spaceBetween: 0,
        slidesPerView: 4,
        touchRatio: 0.3,
        freeMode : true,
        loop: false,
        loopedSlides: 4,
        slideToClickedSlide: false
    });
}
//通用导航栏
    var ww = $('body').width();
    var wh = $(window).height();
    var fh = $('.fixed-menu-nav').outerHeight();
    var th = $(".newHead").height();
    var ih = wh-(fh+th*7);
    $(".return").height(0.9+"rem");
    $(".fixed-menu").css({width:ww, left:-ww});
    $(".project_content_box").css({width:ww, height:wh});
    $(".project_nav").css({height:ih});
    $(".project_item").css({height:ih});
    $(".project_main .project_item .item_box").first().show().siblings().hide();
    $(".project_nav li:first").addClass('on');
    $(".project_nav li").click(function () {
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".project_main .project_item .item_box").eq(i).show().siblings().hide();
    });
    
/*顶部项目导航*/
$('#item_nav .item_nav ul li').click(function(){
    i = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
});
$('.navBtn').click(function(){
    swi('.item_nav');
    $('.fixed-menu').css({animation:'showit 0.6s 0.1s ease both'});
    $('.fixed-menu').animate({left:0});
    $('html,body').addClass('ovfHiden');
});
$(".return i").click(function(){
    $('.fixed-menu').css({animation:'hideit 0.6s 0.1s ease both'});
    $('.fixed-menu').animate({left:-ww});
    $('html,body').removeClass('ovfHiden'); 
});

$('.t_hot').css('top', 0.9+"rem");
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>0){
        $('.t_hot').stop().animate({top:"0"}, 1000).css({position:"fixed"});
    }else{
        $('.t_hot').stop().animate({top:$('.dtHead').height()+0.9+"rem"}, 1000).css({position:"absolute"});
    }
});

$(document).ready(function() {
    //首先将#back-to-top隐藏
    $(".Top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $(".Top").fadeIn(1500);
        } else {
          $(".Top").fadeOut(1500);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $(".Top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        1000);
        return false;
      });
    });
});
/*首页底部悬浮窗口列表点击效果*/
$(".ck").click(function(){
    var f1 = $('.footer_new').css('bottom').replace('px', '');
    var fh = $('.footer_new').height();
    if(f1 < 0){
        $('.footer_new').stop().animate({bottom: 0 },500);
        $('.footer_new .mask').stop().animate({bottom: fh/2}, 500);
        $('.footer_new .menu .ck span').html('收起');
    } else {
        $('.footer_new').stop().animate({bottom: '-'+fh/2 },500);
        $('.footer_new .mask').stop().animate({bottom: 0}, 500);
        $('.footer_new .menu .ck span').html('更多');
    }
});
var i = 2;
setInterval(function(){
    if(i === 1){
        i = 2;
    } else {
        i--;
    }
    $('.mask .act img').attr("src","/Public/Home/images/act"+i+".png");
}, 500);/*模拟蚂蚁线*/

$("body").append("<div class='top_tips' onclick='javascript:onKST();'><img src='/Public/Home/images/tips.gif' style='width:0.8rem;margin:0.1rem 0.1rem 0 0.2rem' /><ul><li>您好:</li><li>我是美莱美丽顾问，要定制美丽方案，请加我...</li></ul></div>");
 function mp() {
        $(".top_tips").animate({
            top: "-1rem"
        }, 1e3, function() {
            setTimeout(mb, 15e3);
        });
    }

    function mb() {
        $(".top_tips").animate({
            top: '0'
        }, 1e3, function() {
            setTimeout(mp, 10e3);
        });
    }
    mb();