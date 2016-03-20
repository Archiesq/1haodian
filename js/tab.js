$(function(){
//搜索文字预设
	var tex=$(".search")[0];
	tex.onfocus=function(){//获得焦点
		if(tex.value=="纸团来啦！"){
			tex.value="";
		}	
	}
	tex.onblur=function(){//失去焦点
		if(tex.value){}
			else{ 
			tex.value="纸团来啦！";
		}
	}

var texs=$(".search1")[0];
	texs.onfocus=function(){//获得焦点
		if(texs.value=="请输入手机号码"){
			texs.value="";
		}	
	}
	texs.onblur=function(){//失去焦点
		if(texs.value){}
			else{ 
			texs.value="请输入手机号码";
		}
	}
 //下拉菜单
 //登录
	var you=$(".yiji");
	var erji=$(".erji");

	for(var i=0;i<you.length;i++){
		you[i].index=i;
		
		you[i].onmouseover=function(){
			erji[this.index].style.display="block";
			you[this.index].style.borderBottom="none";
			}
	
		you[i].onmouseout=function(){
			erji[this.index].style.display="none";
			}
		}
//轮播
	var imgs=$(".banner1");
	for(var i=0;i<imgs.length;i++){
		imgs[i].index=i;
	}
	var bigbanner=getClass("bannerbox");
	var back=["#eb2f14","#6ac427","#2a75e8","#ff51a8","#035dfc","#d20629"];
	var xiaobtn=$(".circle");
	var num=0;
	var leftbtn=$(".jiantouz")[0];
	var rightbtn=$(".jiantouy")[0];
	
	var imgbox=$(".imgsbox")[0];
	var bannerbox=$(".banner-middle")[0];

	//type r:右  l:左
	function move(type){
		if(type=="r"){
			num++;
			if(num==6){
				num=0;
			}
		}
		if(type=="l"){
			num--;
			if(num<0){
				num=5;
			}
		}
		
		for(var i=0;i<imgs.length;i++){//所有的图片透明
			imgs[i].style.opacity=0;
		}
		for(var i=0;i<xiaobtn.length;i++){//所有的小按钮显示
		   xiaobtn[i].style.background="#888";
		}
		xiaobtn[num].style.background="#ccc";//选中的按钮变色
		animate(imgs[num],{opacity:1},1);
		bigbanner[0].style.background=back[num];//选中的图片显示
		

}
 		
	for(var i=0;i<xiaobtn.length;i++){
		xiaobtn[i].index=i;
		xiaobtn[i].onmouseover=function(){
		clearInterval(t);
		for(var j=0;j<imgs.length;j++){
			imgs[j].style.opacity=0;
			xiaobtn[j].style.background="#888";
		}
		imgs[this.index].style.opacity=1;
		xiaobtn[this.index].style.background="#ccc";
		bigbanner[0].style.background=back[this.index];
	}
		xiaobtn[i].onmouseout=function(){
			clearInterval(t);
			num=this.index-1;
			t=setInterval(move("r"),2000);
		}
	}
	var t=setInterval(function(){move("r");},3000);
		rightbtn.onclick=function(){
	       move("r");
		}
		leftbtn.onclick=function(){
	       move("l");
		}

		bannerbox.onmouseover=function(){
			clearInterval(t);
		}
		bannerbox.onmouseout=function(){
			clearInterval(t);
			t=setInterval(function(){move("r");},3000);
		}
//侧导航弹出
var bleftcon=$(".bleftcon");
var chukuang=$(".chukuang");
  for(var i=0;i<bleftcon.length;i++){
    bleftcon[i].index=i;
    bleftcon[i].onmouseover=function(){
    for(var j=0;j<chukuang.length;j++){
      chukuang[j].style.display="none";
    }
    chukuang[this.index].style.display="block";
  }
  bleftcon[i].onmouseout=function(){
    for(var j=0;j<chukuang.length;j++){
      chukuang[j].style.display="none";
    }
}
}
/********************************************************************/
//楼层轮播

	function floormove(lou){	
	var imgss=$(".imgbox")[lou];
	var bigbox=$(".bigbox")[lou];
	var btn=$(".rec",bigbox);
	var tuceng=1;
	function moves(){
		if(tuceng==3){
			animate(imgss,{left:-330*tuceng},600,Tween.Linear,function(){
				imgss.style.left=0;})
			tuceng=0;
		}else{
		animate(imgss,{left:-330*tuceng},600,Tween.Linear)}
			for(var j=0;j<btn.length;j++){
			btn[j].style.backgroundColor="#ddd";
			}
			btn[tuceng].style.backgroundColor="#ff3c3c";
		tuceng++;
	}
	var h=setInterval(moves,2000);

	for(var i=0;i<btn.length;i++){
		btn[i].index=i;
	btn[i].onmouseover=function(){
		clearInterval(h);
		animate(imgss,{left:-330*this.index},600,Tween.Linear)
		for(var j=0;j<btn.length;j++){
			btn[j].style.backgroundColor="#ddd";
		}
		btn[this.index].style.backgroundColor="#ff3c3c";
	}
		btn[i].onmouseout=function(){
			clearInterval(h);
			h=setInterval(moves,2000);
			tuceng=this.index+1;
		}

	}
}
for(var lou=0;lou<8;lou++){
	floormove(lou);
}
/*************************************************************************/
//最右侧的图标显示开始；
var jinkou=$(".jinkou-title");
var gehu=$("gehu");

var jump=$(".jump")[0];
var anniu=$("li",jump);
var tishi=$(".tishi");
 
var ch=document.documentElement.clientHeight;
window.onscroll=function(){
  var scrollT=getScrollT();
      if(scrollT<=750){
      jump.style.display="none";
    }else{
      jump.style.display="block";
    }
 
//按钮控制滚动条
for(var i=0;i<anniu.length;i++){
  anniu[i].index=i;
  anniu[i].onclick=function(){
    //获取滚动条的对象
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    animate(obj,{scrollTop:jinkou[this.index].t},500,Tween.Linear);
    //当前按钮的对应楼层赋值给滚动条
  }
}

 //滚动条  控制  左侧按钮
    for(var i=0;i<jinkou.length;i++){
      jinkou[i].t=jinkou[i].offsetTop;
        if(jinkou[i].t<scrollT+400){
        for(var j=0;j<anniu.length;j++){
            tishi[j].style.display="none";
          }
        tishi[i].style.display="block";
        }
    }

//左侧按钮效果    ｄｅ　效果

   // var ddd=$(".ddd");//一级菜单名
    //二级菜单名
      for(var i=0;i<anniu.length;i++){
      anniu[i].index=i;
      hover(anniu[i],function(){
          tishi[this.index].style.display="block";
        },function(){
        tishi[this.index].style.display="none";
      })
   
    }
    
 }
 
//最右侧的图标显示结束；
/***********************************************************************/
//闪购选项卡

var xuanxiangka=$(".xuanxiangka");
var gou=$(".gou");


for (var s=0;s<gou.length;s++) {
	gou[s].index=s;


	hover(gou[s],function(){
		for (var j=0;j<xuanxiangka.length;j++) {
		xuanxiangka[j].style.display="none";		
		}
		xuanxiangka[this.index].style.display="block";
	},function(){
		xuanxiangka[this.index].style.display="none";
	})
				
	}

})