$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.faq__q').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.faq__a').slideToggle();
      $(this).toggleClass("open");
      if ($(this).hasClass('open')){
        $(this).children('.more').hide();
        $(this).children('.less').show();
      }else{
        $(this).children('.more').show();
        $(this).children('.less').hide();
      }
      

    });
});