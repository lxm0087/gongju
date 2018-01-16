/*解决首页banner不能适应的问题*/
$(window).resize(function(i) {
    $('.index_br .tempWrap').remove();$('.index_br .sider').remove();
    $('.index_br').prepend('<ul class="sider"></ul>');
    locajax('index_br', 'leftLoop', '.sider');
});

$(function() {
    // 真人案例
    $(".realcase .content .scroll").slide({
        mainCell: ".slider",
        effect: "leftLoop",
        interTime: 5000,
        delayTime: 1000,
        autoPlay: true
    });

    // introduce
    $(".introduce_scroll").slide({
        mainCell: ".slider",
        effect: "leftLoop",
        interTime: 3000,
        delayTime: 500,
        autoPlay: true
    });


    // 明星助阵
    var w1 = $('.star .content').width() / 7;
    var e = '.star .content a';
    $(e + ',' + e + ' *').width(w1);
    $(e + ',' + e + ' span').height(w1);
});

$(function() {

    /*临时审核修改20160524*/
    var h = window.location.host;
    if (h == 'so.shmylike.com.cn' || h == 'so.shmylike.cc') {
        $('.newindex > div.header > ul.topBar > li > p:eq(0)').text('上海美莱医疗美容门诊部有限公司');
        $('.copyright').text($('.copyright').text().replace('上海美莱医疗美容门诊部', '上海美莱医疗美容门诊部有限公司'));
    }

    /*底部工商信息*/
    $('.copyright a').attr('href', 'javascript:void(0);');
    $('.copyright a').removeAttr('target');
    $('body').append('<div class="gsck k1" style="width:100%;height:100%;position:fixed;top:0;left:0;background:#000;opacity:0.3;z-index:100009;display:none;"></div><div class="gsck k2" style="width:1036px;height:703px;position:fixed;top:50%;left:50%;margin:-351px 0 0 -518px;background:url(/images/newindex/gs.png) no-repeat;z-index:100010;display:none;"></div>');
    $('.copyright a').click(function() {
        $('.k1').show();
        $('.k2').show(function() {
            $('.gsck').bind("click", function() {
                $('.gsck').hide();
            });
        });
    });
});

/*美莱项目选项卡切换*/
var h = 0;
$('.mlprosub').each(function() {
    if (h < $(this).find('a').length) {
        h = $(this).find('a').length;
    }
});
var aHeight = $('.mlprosub').height() / h;
$('.mlprosub a').css({
    height: aHeight,
    lineHeight: aHeight + "px"
});

/*选项卡切换*/
function ChangeTab(navName, ChangeBox, trigger, effect) {
    $("." + ChangeBox + ":eq(0)").siblings().hide();
    $('.' + navName).each(function() {
        $(this).children().eq(0).addClass('on');
    });

    if (trigger == 'mouseover') {
        if (effect == 'leftLoop') {
            $('.' + ChangeBox).width($('.' + ChangeBox).children().width() * $('.' + ChangeBox).children().length);
            $("." + navName).children().hover(function() {
                $(this).addClass('on').siblings().removeClass('on').parent().siblings().find('.' + ChangeBox).stop().animate({
                    left: -$(this).index() * $('.' + ChangeBox).children().width() + 'px'
                }, 600);
            });
        } else {
            $("." + navName).children().hover(function() {
                $(this).addClass('on').siblings().removeClass('on').parent().siblings().find('.' + ChangeBox).eq($(this).index()).show().siblings().hide();
            });
        }
    } else {
        $("." + navName).children().click(function() {
            $(this).addClass('on').siblings().removeClass('on');
            $(this).parent().siblings().find('.' + ChangeBox).eq($(this).index()).show().siblings().hide();
        });
    }
}
ChangeTab('mlpronav', 'mlbox');
ChangeTab('mlprosub', 'procontent');
ChangeTab('mlprosubnav', 'contentbox', 'mouseover');

function doc_animate(){
    $(".invited .doctor_content ul .i1").hover(function() {
        $(this).addClass('on');
        $(this).stop().animate({ 'width': 329 + 'px' }, 0);
    }, function() {
        $(this).removeClass('on');
        $(this).stop().animate({ 'width': 107 + 'px' }, 0);
    });
    
    $(".invited .doctor_content ul .i2").hover(function() {
        $(this).addClass('on');
        $(this).siblings('.i1').stop().animate({ 'margin-left': -111 + 'px' }, 0);
        $(this).stop().animate({ 'width': 329 + 'px' }, 0);
    }, function() {
        $(this).removeClass('on');
        $(this).siblings('.i1').stop().animate({ 'margin-left': 0 + 'px' }, 0);
        $(this).stop().animate({ 'width': 107 + 'px' }, 0);
    });

    $('.invited .doctor_content ul li').hover(function() {
        $(this).find('span,.p1').stop().animate({ 'bottom': -24 + 'px' }, 0);
    }, function() {
        $(this).find('span,.p1').stop().animate({ 'bottom': 0 }, 0);
    });
}

$.ajax({
    url: "http://www.shmylike.cn/plus/i.php?t=index_docs",
    dataType: "json",
    type: "post",
    success: function(docs) {
        for (var n = 0, docl = docs.length; n < (docl / 4); n++) {
            $('.doctor_content').append('<ul></ul>');
        }

        var c = 0;
        for (var i = 0; i < docs.length; i++) {
            if (i % 4 === 0 && i !== 0) {
                c++;
            }
            var img = docs[i].gj != '' ? '<em><img src="'+docs[i].gj+'" alt="" /></em>' : '';
            $('.doctor_content ul:eq(' + c + ')').append('<li>'+img+'<img class="doc" src="'+docs[i].pic+'" alt="" /><div class="doctor_content_box"><h4>' + docs[i].name + '</h4><p>' + docs[i].info + '</p><dl><dt>'+docs[i].item+'</dt><dd>' + docs[i].time + '</dd></dl><a class="a1" href="javascript:void(0);" onclick="openK();return false;"><strong>咨询</strong></a><a class="a2" href="'+docs[i].link +'"><strong>详情</strong></a></div><span></span><p class="p1">' + docs[i].name + ' ' + docs[i].project + '</p></li>');
        }

        $(".invited .doctor_content ul").each(function() {
            $(this).find("li:eq(0),li:eq(1)").addClass('i1');
            $(this).find("li:eq(2),li:eq(3)").addClass('i2');
        });

        jQuery(".invited").slide({ mainCell: ".doctor_content", effect: "topLoop", autoPlay: true, vis: 2 });
        doc_animate();
    }
}); 