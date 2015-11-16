/*
 * Implenta Numeros PrimosEnSecuencia que pida un número e indique cuántos números 
 * primos existen entre el 1 y dicho número
 * autor: Ulises Luque Páez
 * version: 1.0
 */
 window.addEventListener("load", function() {
	var elMensaje = document.createElement("p");
	document.body.appendChild(elMensaje);
	var boton = document.getElementById('comprobar');
	var input = document.getElementById('numero');
	input.addEventListener("focus", function(){
		elMensaje.innerHTML = "";
		elMensaje.className = "";
		input.className = "";
	});
	boton.addEventListener("click", function() {
		var numero = input.value;
		var mensaje = "";
		if (!/^[1-9]*/.test(numero) || numero == "" || numero < 0){
			elMensaje.innerHTML = "Solo se admiten números enteros positivos.";
			elMensaje.className = "error";
			input.className = "error";
		} else{
			for (i=0; i<=numero; i++) 
				mensaje += i + "<br/>";
			elMensaje.innerHTML = mensaje;
			elMensaje.className = "";
			input.className = "";
		}
	});
});
