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
