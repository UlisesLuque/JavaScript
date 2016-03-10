$(function(){
	function animacion(){
		$("#titulo h1, #titulo h2").css({opacity: 0});
		setTimeout(function(){
			$("#loader").slideUp("swing", function(){
				$("#titulo h1").animate({opacity: 1}, 2000, function(){
					$("#titulo h2").animate({opacity: 1}, 1000);
				});
			});
		}, 2000);
	}	
	$("#loader").css("display", "block");
	animacion();
});
