
	
	
$(document).ready(function(){
    $("div").hover(function(){
		$("headset").css('visibility','hidden')
		$(".headset").fadeToggle();
        $(".headset").fadeIn(3000);
    });

});

$(document).ready(function(){
    $(".01").hover(function(){
		$(".botao-01").slideDown(2000, function(){
			$(".botao-01").slideDown(2000);
		});

    });

});	
	
$(".img-03").hide();	
$(document).ready(function(){

    $(".img-3").hover(function(){
        $(".headset").fadeIn(1500);
    });

});	



	
