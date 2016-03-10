$(document).ready(function(){
	$("#foto").click(function(){
		if ($(this).text()=="Not see me"){
     $(this).text("See me");
 } else {
 	$(this).text("Not see me");
 }
		$("#myFoto").toggleClass("visible");

	});


})