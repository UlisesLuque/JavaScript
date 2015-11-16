/*
 * Implemente MultiplicaImpares que multiplique los 20 primeros números
 *impares y muestre el resultado en la pantalla.
 * autor: Ulises Luque Páez
 * version: 1.0
 */

 window.addEventListener("load", function() {
 	var eleMensaje = document.createElement("p");
 	document.body.appendChild(eleMensaje);
 	var mensaje = "El producto de los 20 primeros números impares es: " + multiplicaImpares(20);
 	eleMensaje.innerHTML = mensaje;
 });

function multiplicaImpares(maximo) {
	var producto = 1;
	for (i=1; i<maximo; i+=2) {
		producto *=i;
	}
	return producto;
}