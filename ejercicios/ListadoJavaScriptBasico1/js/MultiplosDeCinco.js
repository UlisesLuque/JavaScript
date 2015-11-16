/*
 * Implementa MultiplosDeCinco que pida 7 números e indique sí alguno es múltiplo de 5
 *
 * autor: Ulises Luque Páez
 * versión: 1.0
 */

window.addEventListener("load", function() {
	var numbers = new Array();
	var parrafo = document.createElement("p");
	document.body.appendChild(parrafo);
	var boton = document.getElementById('comprobar');
	boton.addEventListener("click", function() {
		numbers[0] = document.getElementById('number1').value;
		numbers[1] = document.getElementById('number2').value;
		numbers[2] = document.getElementById('number3').value;
		numbers[3] = document.getElementById('number4').value;
		numbers[4] = document.getElementById('number5').value;

		if (!comprobarNumeros(numbers)) {
			parrafo.innerHTML = "Introduce números.";
		} else {
			if(extraerMultiplos(numbers).length == 0)
				parrafo.innerHTML = "Ningún numero es multiplo de 5.";
			else
				parrafo.innerHTML ="Los multiplos de 5 son: " + extraerMultiplos(numbers);
		}
	});
});

// Extrae los multiplos de 5
function extraerMultiplos(numbers) {
	var multiplos = new Array();
	var mensaje = "Los multiplos son: ";
	for (i=0; i<numbers.length; i++)
		if (numbers[i] % 5 == 0 && numbers[i] > 5){
			multiplos.push(numbers[i]);
		}
	return multiplos;
}

// Comprueba que los valores son númericos
function comprobarNumeros(numbers) {
	for (i=0; i<numbers.length; i++)
		if (isNaN(numbers[i]) || numbers[i] == ""){
			return false;
		}
	return true;
}