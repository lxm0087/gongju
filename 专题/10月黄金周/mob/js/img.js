$(function(){
	$(".img").each(function(){
		var _this = $(this);
		var imgW = _this.width();
		var imgH = _this.height();
		var winW = $(window).width();
		var beTo = winW/640;
		if(winW<=640){ _this.width( imgW*beTo);_this.height( imgH*beTo) }
		$(window).resize(function() {
			var winW = $(window).width();
			var beTo = winW/640;
			if(winW<=640){ _this.width( imgW*beTo);_this.height( imgH*beTo) }
		})
	})
	$(".eqHt").each(function(){
		var ddH = $(this).find("dd").height();
		var dtH = $(this).find("dt").outerHeight();
		$(this).find("dd").css("padding-top",(dtH-ddH)/2)
		$(window).resize(function() {
			var ddH = $(this).find("dd").height();
			var dtH = $(this).find("dt").outerHeight();
			$(this).find("dd").css("padding-top",(dtH-ddH)/2)
		})
	})
	/*notice 通栏公告*/
	function AutoScroll(obj){
		var objHeight = $(obj).height();
		$(obj).find("ul:first").animate({
			marginTop:-objHeight+"px"
		},500,function(){
			$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
		});
	};
	setInterval(function(){AutoScroll("#noticeScroll")},4500);
})
