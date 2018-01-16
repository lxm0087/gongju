
// var tc=new Array("Saab","Volvo","BMW")
// var final = location.pathname.split('/').slice(-2)[0];

// var host = window.location.host;

// var Min = 1,

//     Max = 9;

// var getRand = (function() {

//     var Range = Max - Min;

//     var Rand = Math.random();

//     return Min + Math.round(Rand * Range);

// })(Min, Max);



$(function() {

    /**右侧漂浮条**/

    var zxurl = 'javascript:onKST();';

    var topic = '/Public/Home/items/common/mskin/newfoot/images/right.gif';  

    

    $("body").append("<div class='hot_right'><a href='" + zxurl + "'><img src='" + topic + "'></a></div>");





    function hot_start() {

        $(".hot_right").addClass('animate');

        

            setTimeout(function() {

                $(".hot_right").addClass('animate1');

            }, 3000);

            // setTimeout(function() {
            //     $(".hot_right a img").attr('src', tc[1]);


            //     $(".hot_right a").attr('href', tc[0]);

            // }, 13000);

            setTimeout(function() {

                hot_end();

            }, 23000);

      

    }



    function hot_end() {

        // $(".hot_right a img").attr('src', tc[1]);

        // $(".hot_right a").attr('href', tc[0]);

        // setTimeout(function() {

        //     hot_start();

        // }, 10000);

    }

    $(".hot_right").append('<span class="hot_close"></span>');

    $(".hot_close").click(function() {

        $(".hot_right").attr('id', 'hot_hide');

        $(".hot_right").removeClass('animate1');

        setTimeout(function() {

            $(".hot_right").attr('id', '');

        }, 5000);

        hot_start();

    });

    setTimeout(hot_start, 5000);

});



// $(function() {

// // 眼睛专题悬浮导航

    

//     var eye = ["sypdyxg","sypPark","mlqksyp"];

//     var path = location.pathname.split('/')[2];

//     if($.inArray(path, eye) != -1){

// 		//rem兼容方法

// function resi() {



//     var html = document.querySelector("html");



//     var wW = document.body.clientWidth || document.documentElement.clientWidth;



//     var maxW = 640;



//     var minW = 320;



//     if (wW > maxW) wW = maxW;



//     var ratio = wW / minW;



//     html.style.fontSize = 50 * ratio + "px";







	



// }



// window.addEventListener("DOMContentLoaded", 



// function() {



//     var bodys = document.querySelector("body").style;



//     bodys.opacity = "1";



//     bodys.filter = "alpha(opacity=100)";



//     resi()



// });



// window.addEventListener("resize", resi);



//           $('.header_nav').after("<div class='t_hot'><div class='list a'><p>热门<br/>推荐</p></div><div class='list b'><p><a href='javascript:void(0)' onclick='onKST()'>全度美眸<br/>大眼术</a></p></div><div class='list c'><p><a href='/zhuanti/sypPark'>白领范<br/>双眼皮</a></p></div><div class='list d'><p><a href='javascript:void(0)' onclick='onKST()'>韩系星范<br/>双眼皮</a></p></div><div class='list e'><p><a href='/zhuanti/mlqksyp/'>学生范<br/>双眼皮</a></p></div></div>");

// 		$('.t_hot').css('top', $('.header_nav').height());

//         $('.t_hot .list a[href="'+path+'"]').parent().parent().css("background","#403470");

//         $(window).scroll(function(){

//             var top = $(window).scrollTop();

//             if(top>0){

//                 $('.t_hot').stop().animate({top:"0"}, 1000).css({position:"fixed"});

//                // $(".weixin").css({position:"absolute"});

//             }else{

//                 //$(".wrap").css({position:"relative"});

//                 //$(".weixin").css({position:"fixed"});

//                 $('.t_hot').stop().animate({top:$('.header_nav').height()}, 1000).css({position:"absolute"});

//             }

//         });

//     }







// });

