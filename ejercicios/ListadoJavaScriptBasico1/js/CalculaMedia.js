/*
 * Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
 * Entonces que se muestre la media.
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
		if(numero === "" || isNaN(numero)){
			eleMensaje.innerHTML = "Introduce un número.";
			eleMensaje.className = "error";
			input.className = "error";
		} else {
			if(/^-[0-9]$/.test(numero)){
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


