document.write('<DIV id=topbar style="background:url(http://adm.szmylike.com/zt/2015/zhongzhiya/pt/main.jpg);display:none;position:absolute;width:430px;height:300px;z-index:9999;"><div   style="margin-top:0px;width:430px;text-align:right;" ><a href="javascript:topbarclose();"><img src="http://adm.szmylike.com/zt/2015/common/close.png" border="0" /></a></div> <div style="width:157px;height:47px;margin-top:192px;margin-left:48px;_display:inline;border:none;"><a onclick="onKST();return false;" href="javascript:void(0)" target="_blank"><img src="http://adm.szmylike.com/zt/2015/zhongzhiya/pt/btn.png" style="border:0" /></a></div></div>');

var startX       = (document.documentElement.clientWidth-521)/2
var startY       = (document.documentElement.clientHeight-368)/2

function iecompattest()
{
  return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}

var verticalpos = "fromtop";

function closebar()
{
	document.getElementById("topbar").style.display = "none";
}

function staticbar()
{
  var ns = (navigator.appName.indexOf("Netscape") != - 1);
  var d = document;

  function ml(id)
  {
    var el = d.getElementById(id);
	el.style.display = "block";
    if (d.layers)
    {
      el.style = el;
    }
    el.sP = function(x, y)
    {
      this.style.left = x + "px";
      this.style.top = y + "px";
    }
    ;
    el.x = startX;

    if (verticalpos == "fromtop")
    {
      el.y = startY;
    }
    else
    {
      el.y = ns ? pageYOffset + innerHeight : iecompattest().scrollTop + iecompattest().clientHeight;
      el.y -= startY;
    }
    return el;
  }

  window.stayTopLeft = function()
  {
    if (verticalpos == "fromtop")
    {
      var pY = ns ? pageYOffset : iecompattest().scrollTop;
      ftlObj.y += (pY + startY - ftlObj.y) / 8;
    }
    else
    {
      var pY = ns ? pageYOffset + innerHeight : iecompattest().scrollTop + iecompattest().clientHeight;
      ftlObj.y += (pY - startY - ftlObj.y) / 8;
    }
    ftlObj.sP(ftlObj.x, ftlObj.y);
    setTimeout("stayTopLeft()", 10);
  }
  ftlObj = ml("topbar");
  stayTopLeft();
}
staticbar();
document.writeln("<script language=\"JavaScript\" src=\"http://adm.szmylike.com/ml/swt/yq.js\" type=\"text/JavaScript\"></script>");