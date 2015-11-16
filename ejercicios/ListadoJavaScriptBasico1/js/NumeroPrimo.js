/*
 *Implenta NumeroPrimo que pida un número e indique si es primo no.
 *
 * autor: Ulises Luque Páez
 * version: 1.0
 */


 //Comprueba si un número es primo.
 
function comprobarPrimo(numero){
	var contador = 0;
	for (i=1; i<numero; i++) {
		if (numero % i == 0)
			contador++;
	}
	if (contador == 1)
		return true;
	else
		return false;
}

window.addEventListener("load", function() {
	var boton = document.getElementById('comprobar');
	var parrafo = document.createElement("p");
	document.body.appendChild(parrafo);
	boton.addEventListener("click", function() {
		var numero = document.getElementById('numero').value;
		if (comprobarPrimo(numero))
			parrafo.innerHTML = "Es un número primo";
		else
			parrafo.innerHTML = "No es un número primo";
	});		
});
