$(document).ready( function (){

  $(window).scroll( function(){

    $('.fadein-scroll').each( function(i){

      var upper_of_object = $(this).offset().top;
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();

      var upper_of_window = $(window).scrollTop();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var transition_delay = 800;
      if( upper_of_object < bottom_of_window )
        $(this).animate({'opacity':'1'},transition_delay);
/*
      if( upper_of_object > upper_of_window || bottom_of_object > upper_of_window ){
        $(this).animate({'opacity':'1'},transition_delay);
      }else if( bottom_of_object <= upper_of_window || upper_of_object >= bottom_of_window ){
        $(this).animate({'opacity':'0'},transition_delay);
      }
*/


    });
  });

} );
