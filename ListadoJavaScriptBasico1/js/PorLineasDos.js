/*
 * Implementa PorLineas que visualice los número del 0 al 100 separados por comas.
 * cada múltiplo de 7 ha de comenzar en una nueva línea.
 * autor: Ulises Luque Páez
 * version: 1.0
 */

 window.addEventListener("load", function() {
 	var eleMensaje = document.createElement("p");
 	document.body.appendChild(eleMensaje);
 	var mensaje ="";
 	for (i=7; i<101; i++){
 		if (i%7 == 0 || i.toString().substr(1,2) == 7)
 			mensaje += "<br/>";
 		mensaje += i + ", ";
 	}
 	eleMensaje.innerHTML = mensaje;
 });
