/**
 * Created by hehe on 2019/2/27.
 */
// http://localhost:8080/cunzheng
//测试服务器
var hostId = SawlCfg.entzn[edition] ;
var hostId2 = SawlCfg.entzn['D2'] ;
var deepchainPath = "/deepchain";
console.log("==》  "+SawlCfg.entzn[edition]);
$(function () {
  $(".navbar").html('' +
      '<div class="container">' +
      '<div class="navbar-header">' +
      '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar">' +
      '<span class="sr-only">Toggle navigation</span>' +
      '<span class="icon-bar"></span>' +
      '<span class="icon-bar"></span>' +
      '<span class="icon-bar"></span>' +
      ' </button>' +
//    '<img src="img/index/u2.jpg" class="logo">' +
//    '<span style="color: #c21515;font-size: 20px;">增信网</span>' +
      '</div>' +
      '<!--导航-->' +
      '<div id="navbar-collapse" class="navbar-collapse collapse">' +
      '<ul class="nav navbar-nav topNav">' +
      '<li class="home"><a href="index.html">首页</a></li>' +
      '<li class="news"><a href="news">新闻资讯</a></li>' +
      '<li><a href="">产品服务</a></li>' +
      '<li><a href="">解决方案</a></li>' +
      '<li><a href="">深安链</a></li>' +
      '<li class="about">' +
      '<a href="about.html">关于我们</a>' +
      '</li>' +
      '<li>' +
      '<a href="notary-inspection.html">公证查验</a>' +
      '</li>' +
      '</ul>' +
      '<div class="header-tools navbar-right ">' +
      '<span id="time"></span>' +
      '<a href="register.html"class=" js-register">注册</a>' +
      '<a href="login.html" class=" js-login">登录</a>' +
      '</div>' +
      '</div>' +
      '</div>');
  //导航的选中事件
  $("#navbar-collapse ul > li").mouseover(function () {
    $(this).addClass("activeRed").siblings().removeClass("activeRed");
    $(this).find("a").css("color", "#ff676d");
  });
  $(".probootstrap-navbar .navbar-nav > li").mouseout(function () {
    $(this).removeClass("activeRed").siblings().removeClass("activeRed");
    $(this).find("a").css("color", "#fff");
  });

});
//获取url中的参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}
function getUrlPara2(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return r[2];
  return null; //返回参数值
}
function getRequest3(parName){
  var str=parName.toLowerCase()+"=";
  var gvalue="";
  var HREF=location.href;
  var upperHREF=location.href.toLowerCase();
  if(upperHREF.indexOf(str)>0) {
    gvalue=HREF.substring(upperHREF.indexOf(str)+str.length,upperHREF.length);
    if(gvalue.indexOf('&')>0)gvalue=gvalue.substring(0,gvalue.indexOf('&'));
    if(gvalue.indexOf("#")>0)gvalue=gvalue.split("#")[0];
    gvalue  =  decodeURIComponent(gvalue)
  }
  return gvalue;
}
//自定义正确弹出框
function showMsg(str) {
  var div = '<div class="mark"><div><i class="clgreen iconfont icon-chenggongtishicopy"></i><p>' + str + '</p></div></div>';
  $('body').append(div);
  //$('.mark div p').html(str);
  $('.mark').show();
  setTimeout(function () {
    $('.mark').hide();
    $('.mark').remove();
  }, 2000)
}
//自定义错误弹出框  模态框
function failMsg(str) {
  var div = '' +
      '<div class="mark">' +
      '<div class="markBox">' +
      '<div class="msgtitle">提示信息<i class="clred iconfont icon-fuhao-zhuangtai-cuowu rt"></i></div>' +
      //'<i class="clred iconfont icon-fuhao-zhuangtai-cuowu"></i>' +
      '<p>' + str + '</p>' +
      '<div class="msgfooter"><span>确  定</span></div>' +
      '</div>' +
      '</div>';
  $('body').append(div);
  $('.mark').show();
  $(".msgtitle i,.msgfooter span").click(function(){
    $('.mark').hide();
    $('.mark').remove();
  })
}
//自定义错误弹出框
function failMsg1(str) {
  var div = '<div class="mark"><div><i class="clred iconfont icon-fuhao-zhuangtai-cuowu"></i><p>' + str + '</p></div></div>';
  $('body').append(div);
  //$('.mark div p').html(str);
  $('.mark').show();
  setTimeout(function () {
    $('.mark').hide();
    $('.mark').remove();
  }, 1500)
}
//自定义加载
function loading() {
  var div = '<div class="mark" id="loading"><img src="../assets/images/loading.gif" style="width:50px;height:50px"></div>';
  $('body').append(div);
  //$('.mark div p').html(str);
  $('#loading').show();
}
//判断是否为空
/*function is_null (obj){
 if(!obj || typeof(obj) == undefined || obj.length == 0 || JSON.stringify(obj) == "{}"){
 return true;
 }else{
 return false;
 }
 }*/
