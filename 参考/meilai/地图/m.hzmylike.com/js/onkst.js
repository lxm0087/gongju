/**
 * ��JS������������������ͨ�Ĵ���������,����ÿ���ͨ�Դ��Ĵ����촰�ڵĺ���
 * ����ֱ�Ӵ����ӵ�ַ,������վ�Լ���ȡ������Դ�ĶԻ���ַ�������ݸ����촰��
 * ע: ��ֱ�Ӵ����ӵ�ַ�������,�ͻ���û�����ɿ���ͨ��ͼ��ǰ�͵����ҳ���ϵ���ѯ����ʱ������
 * �÷�����:
 *      1. <a href="javascript:void(0)" onClick="onKST();">������ѯ</a>;
 *		2. <a href="javascript:void(0)" onClick="onKST('zhuanti');">������ѯ</a>;
 * @param ksChatLink ָ�������ӵ�ַ����ָ����ȡ������Ĭ�ϵ����ӵ�ַ
 * @param text �Ի���ע˵�����ɲ�ָ��
 * @author drc
 * @since 2013-12-04
 * @version 1.3
 */
var onKST= function(text){
	//���滻��"���ɴ��� - ���ӵ�ַ" �е����ӵ�ַ,��Ҫȥ�����ط�����
	ksChatLink = 'http://kefu8.kuaishang.com.cn/bs/im.htm?cas=30223___120935&fi=32533&ism=1';
	/**
	 * ��ǿ�д��´���,��ſ�����,���������ֻ������´���,pc���´���,������ֻ�Ե�ǰ�Զ����¼���Ч
	 * ����ȫ����Ч,��������ͨĬ�ϵĴ����촰���¼�,�򽫴˱���ksUserDefinedOpenNewChatWin������ks.jǰ����
	 */
	var ksUserDefinedOpenNewChatWin=true;	
	
	//��֤�����Ƿ����
	function checkQueryString(params,name){
		if(!params)return false;
		return new RegExp("(^|&)"+ name +"=([^&]*)(&|$)", "i").test(params);
	}
	//��ȡURL����ֵ
	function getQueryString(url,name) {
		var index = url.indexOf('?');
		if(index==-1)return '';
		url=url.substr(index+1,url.length);
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = url.match(reg);
		if (r != null) return unescape(r[2]);
		return '';
	}
	var openNewChatWin;
	var localArr = ksChatLink.split("?");
	localArr.push("");
	if(typeof ksUserDefinedOpenNewChatWin!='undefined' && ksUserDefinedOpenNewChatWin==true){
		openNewChatWin = true;
	}else if(checkQueryString(localArr[1],'ism')){
		openNewChatWin = false;
	}else{
		openNewChatWin = true;
	}
	//�򿪿���ͨ���촰������
	function ksOpenLink(){
		var appendTailUrl='';
		try{
			var cas = getQueryString(ksChatLink,'cas');
			if(cas){
				var vi='';
				var dc = document.cookie.match(new RegExp('(^| )' + cas+'_KS_'+cas + '=([^;]*)(;|$)'));
				if (dc != null){
					vi = unescape(dc[2]);
				}
				if(vi){
					appendTailUrl += '&vi='+vi;
				}
			}
		}catch(e){}
		var ref="";
		try{if(opener.document.referrer.length>0){ref=opener.document.referrer;}}catch(e){ref=document.referrer;}
		if(!ref || ref.length==0){ref=document.referrer;}
		//�Ի���ַ
		appendTailUrl += '&dp='+encodeURIComponent(window.location.href);
		//�ÿ���Դ
		if(ref)appendTailUrl+='&ref='+encodeURIComponent(ref);
		//�Ի���ʶ
		if(text)appendTailUrl+='&sText='+encodeURIComponent(text);
		if(ksChatLink.indexOf('?')==-1){appendTailUrl=appendTailUrl.substring(1)+'?';}
		ksChatLink+=appendTailUrl;
		//����openNewChatWin���ô����촰��
		if(!openNewChatWin){
			window.location.href=ksChatLink;
		}else{
			var ksWin = window.open(ksChatLink,'_blank');
			if(ksWin){
				try{ksWin.focus();}catch(e){} //�����㶨λ�����촰��
			}
		}
	}
	//�������ͨ�����м������,��ʹ�ÿ���ͨĬ�ϵĴ����촰���¼�,����ʹ���Զ���Ĵ��¼�
	if(typeof KS!='undefined'){
		var p = {};
		if(text)p['sText']=text;
		if(openNewChatWin)p['oTarget']='_blank';
		try{
			if(typeof KS.openChatWin=='function'){
				KS.openChatWin(p);
			}else if(typeof KS.openChatLink=='function'){
				KS.openChatLink(p);
			}else{
				ksOpenLink();
			}
		}catch(e){
			ksOpenLink();
		}
	}else{
		ksOpenLink();
	}
};