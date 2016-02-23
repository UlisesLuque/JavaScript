/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

(function(){
	window.addEventListener("load", function(){
		var parrafos = document.getElementsByTagName("p");
		document.body.removeChild(document.body.childNodes[1]);
		var parrafoNombre = document.createElement("p");
		parrafoNombre.innerHTML = "Ulises Luque Páez";
		document.body.insertBefore(parrafoNombre, document.body.childNodes[3]);
		var parrfoApellido = document.createElement("p");
		parrfoApellido.innerHTML = "Luque";
		document.body.appendChild(parrfoApellido);

	})
})();


