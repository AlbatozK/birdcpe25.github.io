
/*
// Function to load XML
function loadXml( xmlPath ){
  //Generate Http Request object
  if( $(window).XMLHttpRequest ){
    xhttp=new XMLHttpRequest();
  }else{
    xhttp = new ActiveXObject("Microsoft.XMLDOM");
  }
  // Send request
  xhttp.open( "GET", xmlPath, false );
  xhttp.send();
  // Return XML item
  return xhttp.responseXML;
}
*/


$(document).ready( function (){

  // Add event scroll handler
  $(window).scroll( function(){
    $('.fadein-scroll').each( function(i){
      var upper_of_object = $(this).offset().top;
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();

      var upper_of_window = $(window).scrollTop();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var transition_delay = 800;
      if( upper_of_object < bottom_of_window )
        $(this).animate({'opacity':'1'},transition_delay);
    });
  });

  // Add dynamic construct each section

} );
