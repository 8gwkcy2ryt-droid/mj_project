$(function(){
        $("header nav>ul").mouseenter(function(){
            $(".sub , .magr").stop().slideDown();
        })
        $("header nav>ul").mouseleave(function(){
            $(".sub , .magr").stop().slideUp();
        })

        $(".pop1").click(function(){
            $(".popupc").show();
            $("body").css("overflow","hidden");
            $('html, body').animate({
             scrollTop: $("section").offset().top
             }, 500);
        })

        $(".pop2").click(function(){
            $(".popupc2").show();
            $("body").css("overflow","hidden");
            $('html, body').animate({
             scrollTop: $("section").offset().top
             }, 500);
        })

        $(".pop3").click(function(){
            $(".popupc3").show();
            $("body").css("overflow","hidden");
            $('html, body').animate({
             scrollTop: $("section").offset().top
             }, 500);
        })

        $(".close button").click(function(){
            $(".popupc").hide();
            $("body").css("overflow","auto");
        })

        $(".close button").click(function(){
            $(".popupc2").hide();
            $("body").css("overflow","auto");
        })

        $(".close button").click(function(){
            $(".popupc3").hide();
            $("body").css("overflow","auto");
        })

       
    })

$(document).ready(function(){

    let slideWidth = $(".slid").outerWidth();
    
    function autoSlide(){
        $(".sliderTrack").animate({
            marginLeft: -slideWidth
        }, 600, function(){

            $(".sliderTrack li:first").appendTo(".sliderTrack");
            $(".sliderTrack").css("margin-left", 0);

        });
    }

    setInterval(autoSlide, 2500);

});

function nextSlide(){
    $(".sliderTrack").animate({
        marginLeft: -$(".slid").outerWidth()
    }, 600, function(){
        $(".sliderTrack li:first").appendTo(".sliderTrack");
        $(".sliderTrack").css("margin-left", 0);
    });
}

function prevSlide(){
    $(".sliderTrack li:last").prependTo(".sliderTrack");
    $(".sliderTrack").css("margin-left", -$(".slid").outerWidth());

    $(".sliderTrack").animate({
        marginLeft: 0
    }, 600);
}