/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

$(function(){
	if(!navigator.cookieEnabled){
		$("#mensajeCookies").css({
			"display": "block",
			"left": (($("body").width() - $("#mensajeCookies").width()) / 2) + "px"
		});
		$("#mensajeCookies span").click(function(){
			$("#mensajeCookies").css("display", "none");
		})
	}
});