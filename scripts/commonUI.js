/*
 2017/12 by zmx
 IE9+,chrome,ff,safari✔
 通用ui
 */
$(function(){
    //bootstrap轮播图个性化配置
    $(".carousel").carousel({interval:0});//轮播间隔
    $(".carousel").on("click",".control-btn.left", function () {
        $(this).parents(".carousel").carousel('prev');
    }).on("click",".control-btn.right", function () {
        $(this).parents(".carousel").carousel('next');
    }).on('slid.bs.carousel', function () {
        $(this).find(".carousel-controlCenter .control-paging").removeClass("active").eq($(this).find(".carousel-inner .active").index()).addClass("active");
    }).on("click",".control-paging",function(){
        $(this).parents(".carousel").carousel($(this).index()-1);
    });
    //返回顶部工具条
    $(window).on('scroll',_.throttle(toolBar_toTop,500,{leading:true,trailing:true}));//是否立即执行、是否延时
    function toolBar_toTop(){
        if ($(window).scrollTop()>$(window).height()){
            $(".toolbar .tool-to-top").stop().fadeIn();
        }
        else {
            $(".toolbar .tool-to-top").stop().fadeOut();
        }
    }
    $(document.body).on("click",".toolbar .tool-to-top",function(){
        //$(window).scrollTop(0);
        $(document.body).animate({scrollTop:0},500);
    });
    //header-nav fix固定在浏览器顶部
    $(window).on('scroll',headerNavFix);//是否立即执行、是否延时
    function headerNavFix(){
        if ($(window).scrollTop()>=300){
            $(".header-navP-box").addClass("fix");
            $(".header-banner").css("margin-bottom","60px");
        }
        else {
            $(".header-navP-box").removeClass("fix");
            $(".header-banner").css("margin-bottom","0");
        }
    }
});
