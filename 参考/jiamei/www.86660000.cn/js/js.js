$(function(){$bd_tjym=window.location.href;$("#bd_tjym").val($bd_tjym)
$("#bd_tjym").hide()
function bd_date(){var bd_now=new Date();return bd_now.getFullYear()+"-"+(bd_now.getMonth()+ 1)+"-"+bd_now.getDate()+" "+bd_now.getHours()+":"+bd_now.getMinutes()+":"+bd_now.getSeconds();}
$('#submit').click(function(){$("#bd_date").val(bd_date())
$("#bd_date").hide()
var flag=true;if($("#name").val()==''){alert('�ף�����д����������');flag=false;}else if($("#tell").val()==''){alert('�ֻ����벻��Ϊ��Ŷ��');flag=false;}else if($("#ms").val()==''){alert('���������������Ϊ��Ŷ��');flag=false;}
if(flag){$('#bmforms').submit();}})
$(".zt_ti").toggleClass("wow bounceInRight");$(".ztbox_3 .yh_qg").hover(function(){$(this).toggleClass("animated pulse");});$(".ztbox_6 .yh_qg").hover(function(){$(this).toggleClass("animated pulse");});$(".geth").hover(function(){$(this).toggleClass("animated pulse");});if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))){new WOW().init();}})