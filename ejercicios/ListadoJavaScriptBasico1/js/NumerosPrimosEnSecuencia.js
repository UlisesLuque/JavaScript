/*
 * Implenta Numeros PrimosEnSecuencia que pidaun número e indique cuántos números 
 * primos existen entre el 1 y dicho número
 * autor: Ulises Luque Páez
 * version: 1.0
 */
 window.addEventListener("load", function() {
	var mensaje = document.createElement("p");
	document.body.appendChild(mensaje);
	var boton = document.getElementById('comprobar');
	var input = document.getElementById('numero');
	input.addEventListener("focus", function(){
		mensaje.innerHTML = "";
		mensaje.className = "";
		input.className = "";
	});
	boton.addEventListener("click", function() {
		var numero = input.value;
		if (isNaN(numero) || numero == ""){
			mensaje.innerHTML = "Solo se admiten números enteros.";
			mensaje.className = "error";
			input.className = "error";
		} else{
			mensaje.innerHTML = "Existen " + contarNumerosPrimos(numero) + " numeros primos entre el 1 y el " + numero;
			mensaje.className = "";
			input.className = "";
		}
	});
});

function contarNumerosPrimos(numero) {
	var contadorPrimos = 0;
	for (j=numero; numero>0; numero--)
		if(comprobarPrimo(numero))
			contadorPrimos++;
	return contadorPrimos;
}

function comprobarPrimo(numero) {
	var contadorDivisores = 0;
	for (i=1; i<numero; i++) 
		if (numero % i == 0)
			contadorDivisores++;
	if (contadorDivisores == 1)
		return true;
	return false;
}

