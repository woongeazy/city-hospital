$(function(){
    let currentIndex = 0;
    $('.slider_wrap').append($('.slide1').first().clone(true));

    setInterval(function(){
        currentIndex++;
        $('.slider_wrap').animate({marginLeft: -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slider_wrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});