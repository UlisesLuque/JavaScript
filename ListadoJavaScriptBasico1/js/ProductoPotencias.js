/*
 * Implementa ProductoPotencias que calcule y visualice el producto
 * de las potencias de 2 entre  0 y 10.
 * autor: Ulises Luque Páez
 * version: 1.0
 */

 window.addEventListener("load", function() {
 	var eleMensaje = document.createElement("p");
 	document.body.appendChild(eleMensaje);
 	var productos = productoPotencias(10);
 	var mensaje = "";
 	for (i=0; i<productos.length; i++) {
 		mensaje += "2<sup>" + i + "</sup> = " + productos[i] + "<br/>";
 	}
 	eleMensaje.innerHTML = mensaje;
 });

function productoPotencias(maximo) {
	var productos = new Array();
	for (i=0; i<=maximo; i++) {
		productos.push(Math.pow(2,i));
	}
	return productos;
}