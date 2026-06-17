$(function(){
     $("header nav>ul").mouseenter(function(){
            $(".sub , .magr").stop().slideDown();
        })
        $("header nav>ul").mouseleave(function(){
            $(".sub , .magr").stop().slideUp();
        })
})