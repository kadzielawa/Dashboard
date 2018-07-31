$(document).ready(function() {
  $('[data-toggle="offcanvas"]').click(function() {
    $("#navigation").toggleClass("hidden-xs");
  });

  $('.navi li').on('click',function(){
    var text = $(this).find('span').text();
    var data = {
      'element':'product-span',
      'text':'Koszula termoaktywna Sportex',
      'id': 213,
      'event':'click-product'
    };
    _comgy.pass(data);
  })
});
