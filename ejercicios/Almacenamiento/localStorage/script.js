/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

(function(){
	window.addEventListener("load", function(){
		var inputNombre = document.getElementById("nombre");
		var inputPassword = document.getElementById("password");
		var botonSubmit = document.getElementById("enviar");
		botonSubmit.addEventListener("click", function(event){
			event.preventDefault();
			localStorage.nombre = inputNombre.value;
			localStorage.password = inputPassword.value;
		});
	});
})();
