
var main = function() {
	  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });

  $(document).keypress(function(event) {
    if(event.which === 111) {  //key n
      $('.description').hide();

      $('.current').children('.description').show();
    }

    else if(event.which === 110) { //key o
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });

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
	

	

