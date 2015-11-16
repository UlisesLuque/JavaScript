/*
 * Implementa PiramideDos que mediante un bucle for visualice una piramide dle siguiente
 * tipo.
 * autor: Ulises Luque Páez
 * version: 1.0
 */

 window.addEventListener("load", function() {
 	var eleMensaje = document.createElement("p");
 	document.body.appendChild(eleMensaje);
 	var mensaje ="";
 	for (i=0; i<11; i++){
 		for(j=0; j<i; j++)
 			if (j == 10)
 				mensaje += "0";
 			else
 				mensaje += j;
 		mensaje += "<br/>";
 	}
 	eleMensaje.innerHTML = mensaje;
 });
