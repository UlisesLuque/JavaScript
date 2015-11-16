/*
 * Implementa CerosYUnos que lea una secuencia de ceros y unos.
 * Mostrará el número de ceros de al secuencia. Dejará de leer
 * cuando el usuario itroduzca el número 2.
 * autor: Ulises Luque Páez
 * versión: 1.0
 */

// Cuenta el número de ceros de una serie de números
function contarCeros(numeros){
	var contador = 0;
	for(i=0; i<numeros.length; i++)
		if (numeros[i] == 0)
			contador ++;
	return contador;
}

window.addEventListener("load", function(){
	var eleMensaje = document.createElement("p");
	document.body.appendChild(eleMensaje);
	var input = document.getElementById('inputNumber');
	var botonIntroducir = document.getElementById('addNumber');
	var numeros = new Array();
	input.addEventListener("focus", function(){
		eleMensaje.innerHTML = "";
		eleMensaje.className = "";
		input.className = "";
	});

	botonIntroducir.addEventListener("click", function(){
		var numero = input.value;
		input.value = "";
		if(!/^[0-2]$/.test(numero) || numero == ""){
			eleMensaje.innerHTML = "Introduce un 0, 1 ó 2.";
			eleMensaje.className = "error";
			input.className = "error";
		} else {
			if(numero == 2){
				if(numeros.length < 1){
					eleMensaje.innerHTML = "Introduce al menos un número.";
					eleMensaje.className = "error";
					input.className = "error";
				} else {
					var mensaje = contarCeros(numeros);
					eleMensaje.innerHTML = "El número de ceros es: " + mensaje;
					numeros = new Array();
				}
				
			} else {
				numeros.push(numero);
				eleMensaje.innerHTML = "Añadido.";
			}  
		}
		
	});
});
