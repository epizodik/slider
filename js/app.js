$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        infinite:true,
        slidesToShow:1,
        autoplay:false,
        autoplaySpeed:2000,
        fade:true,
        play:500,
        appendDots:$('.block'),
        asNavFor:".smslider"
    });
     $('.smslider').slick({
         arrows:false,
         slidesToShow:3,
         slidesToScroll: 1,
         vertical:true,
         autoplay:true,
         autoplaySpeed:2000,
         play:500,
         asNavFor:".slider",
         centerMode: false,
         focusOnSelect: true
    });
});

