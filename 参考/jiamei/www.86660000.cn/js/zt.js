$(function(){$(".weixin").hide();$(".top_r span").hover(function(){$(".weixin").toggle();})
$("#item1 .i-mc-left p").eq(3).addClass("on");var bdul=$(".picList");var bdli=$(".picList li");var imgWidth=$(".recommend ul li").width()+54;var index=0;var timer;function slideFun(){bdul.animate({marginLeft:-imgWidth*(index)+'px'},300,function(){if(index==bdli.length-2)
{index=0;bdul.css('marginLeft',-imgWidth*(index)+'px');}
else if(index<0)
{index=bdli.length-3;bdul.css('marginLeft',-imgWidth*(index)+'px');}});}
function auto(){timer=setInterval(function(){index++;slideFun();},5000);}
auto();$(".picScroll-left").hover(function(){clearInterval(timer);},function(){auto();});$(".next,.prev").click(function(){var i=$(this).index();i?index++:index--;slideFun();}).mousedown(function(){return false;});});