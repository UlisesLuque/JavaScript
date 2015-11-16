/*
 * Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
 * a.Cuántas cifras tiene(7 cifras)
 * b.Lo muestre del revés
 * autor: Ulises Luque Páez
 * version: 1.0
 */

//Comprueba el formato del numero de tipo string.
function comprobarFormato(numero){
	if(!/^[0-9],[0-9]+$/.test(numero))
		return true;
	else
		return false;
}

window.addEventListener("load", function(){
	var input = document.getElementById('numero');
	var boton = document.getElementById('aceptar');
	var mensaje = document.createElement("p");
	document.body.appendChild(mensaje);
	input.addEventListener("focus", function(){
		mensaje.className = "";
		input.className = "";
		mensaje.innerHTML = "";
	})
	boton.addEventListener("click", function() {
		var numero = input.value;
		var numeroSinComa = numero.split(",").join("");
		if(comprobarFormato(numero)){
			mensaje.innerHTML = "Solo se admiten un número del 1 al 10 con decimales."
			mensaje.className = "error";
			input.className = "error";
		} else {
			numeroCifras = numeroSinComa.length;
			arrNumAlReves = numeroSinComa.split("").reverse();
			arrNumAlReves.splice(1,0,",");
			numeroAlReves = arrNumAlReves.join("");
			mensaje.innerHTML = "El número tiene " +numeroCifras +" cifras, y al reves es "+numeroAlReves;
		}
		
	});
});