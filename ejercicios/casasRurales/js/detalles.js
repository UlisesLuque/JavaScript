/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

$(function(){
	var titulo = $(".casa h1")
	titulo.css("marginLeft", "-10em");
	$(window).on("scroll", function(){
		if($(window).scrollTop() > titulo.offset().top - $(window).height()){
			titulo.animate({
				"marginLeft": "0em"
			}, 1500)
		}
	})
});