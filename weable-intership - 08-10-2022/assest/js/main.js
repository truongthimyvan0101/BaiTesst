$(document).ready(function(){

    $('#toggleOpen').on('click', function() {
        $('.header .m-menu .m-navlist').addClass('show');
        $('.header .m-menu .overlay').addClass('show');
        })
    $('#toggleClose').on('click', function() {
        $('.header .m-menu .m-navlist').removeClass('show');
        $('.header .m-menu .overlay').removeClass('show');
    })
    $('.header .m-menu .overlay').on('click', function() {
        $('.header .m-menu .m-navlist').removeClass('show');
        $('.header .m-menu .overlay').removeClass('show');
    })
    
});
// $(document).ready(function(){
//     $('.image-slider').slick({
//         slidesToShow: 1,
//         rows: 2,
//         slidesToScroll: 1,
//         // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
//         //  nextArrow: '<button class="slide-arrow next-arrow"></button>',
//         arrows: true,
//         // fade: true,
//         // asNavFor: '.slider-nav'
//     });
// });

$('.image-slider').slick({
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });