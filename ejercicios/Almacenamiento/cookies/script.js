/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

(function(){
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	} 

	window.addEventListener("load", function(){
		var inputNombre = document.getElementById("nombre");
		var inputPassword = document.getElementById("password");
		var botonSubmit = document.getElementById("enviar");
		botonSubmit.addEventListener("click", function(event){
			event.preventDefault();
			setCookie("nombre", inputNombre.value, 3 );
			setCookie("password", inputPassword.value, 3 );
		});
	});
})();
