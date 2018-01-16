document.write('<link href="http://kst.nclaimei.com/css/wapkst.css" type="text/css" rel="stylesheet">');
document.write('<div class="swtCenter relative animated" >');
document.write("<a href=\'javascript:void(0)\' class=\'a01\' onclick=\'swt_hm(\"sFuGai\");return false;\'></a>");
document.write('<span class="closeBtn_swt absolute" onclick="closeSwt()"></span>');
document.write("<h3>十大爆品任性购</h3>");
document.write('<h6><span style="color:#F90307; font-weight:bold">隆鼻全包2018元、全切双眼皮全包2018元</span></h6>');
document.write('<div class="mfhd clearfix">');
document.write('<input type="tel" class="callbF_text" id="callbF_text" onclick="this.value = \'\'" onblur="if(value == \'\'){value=\'请输入您的电话号码\'}" value="请输入您的电话号码" name="callbF_text"/>');
document.write('<a id="callbF_sub" class="callbF_sub" href="javascript:void(0)">免费回电</a>');
document.write("");
document.write("</div>");
document.write("<p>");
document.write("我们将立即回电。该通话对您免费，请放心");
document.write("接听！手机请直接输入，座机前加区号。");
document.write("</p>");
document.write('<div class="swt_lists absolute">');
document.write('<a href="http://aibk10.kuaishang.cn/bs/im.htm?cas=57712___573110&fi=68430&ism=1&sText=m_tell"  class="swt_list1"><i class="swtCallIcon"></i><span>拔打电话</span></a>');
document.write('<a  class="swt_list2" href="http://aibk10.kuaishang.cn/bs/im.htm?cas=57712___573110&fi=68430&ism=1&sText=m_zixun" ><i class="swtLinkCounter" id="swtLinkCounter"></i><i class="swtLinkIcon"></i><span>悄悄提问</span></a>');
document.write("</div>");
document.write("</div>");

var ksUserDefinedOpenNewChatWin=true;
document.write('<script type="text/javascript" src="https://aibk10.kuaishang.cn/bs/ks.j?cI=573110&fI=68430&ism=1" charset="utf-8"><\/script>');
//document.write('<script type="text/javascript" src="http://www.nclaimei.com/e/extend/service/?cI=573110" charset="utf-8"><\/script>');
var swt_hm=function(text){ksChatLink="https://aibk10.kuaishang.cn/bs/im.htm?cas=57712___573110&fi=68430&ism=1";
function checkQueryString(params,name){if(!params){return false}return new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i").test(params)}function getQueryString(url,name){var index=url.indexOf("?");if(index==-1){return""}url=url.substr(index+1,url.length);var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=url.match(reg);if(r!=null){return unescape(r[2])}return""}var openNewChatWin;var localArr=ksChatLink.split("?");localArr.push("");if(typeof ksUserDefinedOpenNewChatWin!="undefined"&&ksUserDefinedOpenNewChatWin==true){openNewChatWin=true}else{if(checkQueryString(localArr[1],"ism")){openNewChatWin=false}else{openNewChatWin=true}}function ksOpenLink(){var appendTailUrl="";try{var cas=getQueryString(ksChatLink,"cas");if(cas){var vi="";var dc=document.cookie.match(new RegExp("(^| )"+cas+"_KS_"+cas+"=([^;]*)(;|$)"));if(dc!=null){vi=unescape(dc[2])}if(vi){appendTailUrl+="&vi="+vi}}}catch(e){}var ref="";try{if(opener.document.referrer.length>0){ref=opener.document.referrer}}catch(e){ref=document.referrer}if(!ref||ref.length==0){ref=document.referrer}appendTailUrl+="&dp="+encodeURIComponent(window.location.href);if(ref){appendTailUrl+="&ref="+encodeURIComponent(ref)}if(text){appendTailUrl+="&sText="+encodeURIComponent(text)}if(ksChatLink.indexOf("?")==-1){appendTailUrl=appendTailUrl.substring(1)+"?"}ksChatLink+=appendTailUrl;if(!openNewChatWin){window.location.href=ksChatLink}else{var ksWin=window.open(ksChatLink,"_blank");if(ksWin){try{ksWin.focus()}catch(e){}}}}if(typeof KS!="undefined"){var p={};if(text){p["sText"]=text}if(openNewChatWin){p["oTarget"]="_blank"}try{if(typeof KS.openChatWin=="function"){KS.openChatWin(p)}else{if(typeof KS.openChatLink=="function"){KS.openChatLink(p)}else{ksOpenLink()}}}catch(e){ksOpenLink()}}else{ksOpenLink()}};function openZoosUrl(){return swt_hm()}function GetRandomNum(Min,Max){var Range=Max-Min;var Rand=Math.random();return(Min+Math.round(Rand*Range))}var num=GetRandomNum(4,10);setTimeout(openMswt,5000);var bTrue=false;function _footerHeight(){return footerHeight.height()}$(window).resize(function(){_footerHeight();if(bTrue){footerHeight.css({bottom:-_footerHeight()+"px"})}else{footerHeight.css({bottom:0+"px"})}});function openMswt(){$(".swtCenter").show().removeClass("fadeInDown").addClass("fadeInDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){footerHeight.stop().animate({bottom:-_footerHeight()+"px"},400,function(){$(this).show();bTrue=true})})}function closeSwt(){$(".swtCenter").removeClass("fadeInDown").addClass("fadeOutDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("fadeOutDown").hide();bTrue=false;setTimeout(openMswt,20000)})}$(function(){document.getElementById("swtLinkCounter").innerHTML=num;$(".foot_pic_now").text(num);$(".closeBtn_swt").on("click",function(){closeSwt()});$(".hdBtn").on("click tap",function(){$(".activity_bar").fadeOut()})});

document.write('<script type="text/javascript"  data-lxb-uid="2573139" data-lxb-gid="43681" src="http://lxbjs.baidu.com/api/asset/api.js?t='+new Date().getTime()+'" charset="utf-8"><\/script>');
document.write("<script>");
document.write('document.getElementById("callbF_sub").onclick=function(){');
document.write('lxb.call(document.getElementById("callbF_text"));};');
document.write("<\/script>");

//尾部咨询条
document.write('<div class="foot_nav widf">');
document.write('		<ul>');
document.write('        	<li>');
document.write('				<a href="javascript:;" onclick="swt_hm();" target="_self">');
// document.write('					<div class="foot_pic pr">');
// document.write('						<img src="http://kst.nclaimei.com/images/nav_about.jpg" alt=""/>');
// document.write('					</div>');
// document.write('					<span>关于我们</span>');
document.write('				</a>');
document.write('			</li>');
document.write('            <li>');
document.write('				<a href="javascript:;" onclick="swt_hm();" target="_self">');
// document.write('					<div class="foot_pic pr">');
// document.write('						<img src="http://kst.nclaimei.com/images/nav_yh.jpg" alt="" />');
// document.write('					</div>');
// document.write('					<span>优惠活动</span>');
document.write('				</a>');
document.write('			</li>');
document.write('			<li>');
document.write('				<a href="javascript:;" onclick="swt_hm();" target="_self">');
// document.write('					<div class="foot_pic pr">');
// document.write('						<img src="http://kst.nclaimei.com/images/nav_zx.jpg" alt="" />');
// document.write('						<em class="foot_pic_now pa">28</em>');
// document.write('					</div>');
// document.write('					<span>咨询医生</span>');
document.write('				</a>');
document.write('			</li>');
document.write('			<li>');
document.write('				<a href="javascript:;" onclick="swt_hm();" target="_self">');
// document.write('					<div class="foot_pic pr">');
// document.write('						<img src="http://kst.nclaimei.com/images/footerLink3.png">');
// document.write('					</div>');
// document.write('					<span>在线预约</span>');
document.write('				</a>');
document.write('			</li>');
document.write('		</ul>');
document.write('	</div>');




