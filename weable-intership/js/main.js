$(document).ready(function(){

  $('#toggleOpen').on('click', function() {
      $('.dtHeader .m-menu .m-navlist').addClass('show');
      $('.dtHeader .m-menu .overlay').addClass('show');
      })
  $('#toggleClose').on('click', function() {
      $('.dtHeader .m-menu .m-navlist').removeClass('show');
      $('.dtHeader .m-menu .overlay').removeClass('show');
  })
  $('.header .m-menu .overlay').on('click', function() {
      $('.header .m-menu .m-navlist').removeClass('show');
      $('.hearder .m-menu .overlay').removeClass('show');
  })
});