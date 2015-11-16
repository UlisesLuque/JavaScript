/*
 * Implementa MediaPositivos que calcule la media de una serie de 
 * números positivos,introducidos por teclado. Dejará de leer 
 * cuando el usuario introduzca el 0
 * autor: Ulises Luque Páez
 * version: 1.0
 */

//Calcula la media de uan serie de números.
function calculaMedia(numeros){
	var suma = 0;
	for(i=0; i<numeros.length; i++)
		suma += parseInt(numeros[i]);
	return suma/numeros.length;
}

window.addEventListener("load", function(){
	var eleMensaje = document.createElement("p");
	document.body.appendChild(eleMensaje);
	var input = document.getElementById('inputNumero');
	var botonSumar = document.getElementById('addNumber');
	var numeros = new Array();
	input.addEventListener("focus", function(){
		eleMensaje.innerHTML = "";
		eleMensaje.className = "";
		input.className = "";
	});

	botonSumar.addEventListener("click", function(){
		var numero = input.value;
		input.value = "";
		if(!/^[0-9]*$/.test(numero) || numero === ""){
			eleMensaje.innerHTML = "Introduce un número.";
			eleMensaje.className = "error";
			input.className = "error";
		} else {
			if(numero == 0){
				if(numeros.length <2){
					eleMensaje.innerHTML = "Introduce al menos dos números.";
					eleMensaje.className = "error";
					input.className = "error";
				} else {
					var mensaje = calculaMedia(numeros);
					eleMensaje.innerHTML = "La media es: " + mensaje;
					numeros = new Array();
				}
				
			} else {
				numeros.push(numero);
				eleMensaje.innerHTML = "Número añadido.";
			} 
		}
		
	});
});


