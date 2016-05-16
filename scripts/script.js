
var main = function() {
	$('.article').click(function() {
   // $('.article').removeClass('current');
   // $('.description').hide();

    $(this).toggleClass('current');
    $(this).children('.description').toggle();
  });
/*
  $(document).keyup(function(event) {
    if(event.which === 40) {  //key down
      $('.description').hide();

      $('.current').children('.description').show();
    }

 else if(event.which === 38) {  //key up
      $('.description').hide();

      $('.current').parent('.description').show();
    }
});
 $(document).keypress(function(event) {
    if(event.which === 13) { //key enter
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
       else if(event.which === 32) { //key space
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });
*/
  $("#foto").click(function(){
		if ($(this).text()=="Not see me"){
        $(this).text("See me");
		 } else {
		 	$(this).text("Not see me");
		 }
		$("#myFoto").toggleClass("visible");
 });
}

$(document).ready(main);
	

	

