/*
 * Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor
 * autor: Ulises Luque Páez
 * version: 1.0
 */
window.addEventListener("load", function() {
	var elementoMensaje = document.createElement("p");
	document.body.appendChild(elementoMensaje);
	var boton = document.getElementById('comprobar');
	var input1 = document.getElementById('numero1');
	var input2 = document.getElementById('numero2');
	var input3 = document.getElementById('numero3');
	input1.addEventListener("focus", function(){
		elementoMensaje.innerHTML = "";
		elementoMensaje.className = "";
		input1.className = "";
	});
	input2.addEventListener("focus", function(){
		elementoMensaje.innerHTML = "";
		elementoMensaje.className = "";
		input2.className = "";
	});
	input3.addEventListener("focus", function(){
		elementoMensaje.innerHTML = "";
		elementoMensaje.className = "";
		input3.className = "";
	});
	boton.addEventListener("click", function(){
		var numero1 = parseInt(input1.value);
		var numero2 = parseInt(input2.value);
		var numero3 = parseInt(input3.value);
		var banError = false;
		
		if (isNaN(numero1) || numero1 == ""){
			elementoMensaje.innerHTML = "Error solo se admiten números enteros o con decimales.";
			elementoMensaje.className = ""
			input1.className = "error";
			banError = true;
		}
		if(isNaN(numero2) || numero2 == "") {
			elementoMensaje.innerHTML = "Error solo se admiten números enteros o con decimales.";
			elementoMensaje.className = ""
			input2.className = "error";
			banError = true;
		}
		if(isNaN(numero3) || numero3 == "") {
			elementoMensaje.innerHTML = "Error solo se admiten números enteros o con decimales.";
			elementoMensaje.className = ""
			input3.className = "error";
			banError = true;
		}
		if (!banError){
			elementoMensaje.innerHTML = "La secuencia ordenada de forma ascendente es: " + ordenarNumeros(numero1, numero2, numero3);
			elementoMensaje.className = "";
			input1.className = "";
			input2.className = "";
			input3.className = "";
		}
		
		
		
	});
	
});

function ordenarNumeros(numero1, numero2, numero3) {
	numerosOrdenados = new Array();
	if (numero1 < numero2) {
		if (numero2 < numero3) {
			numerosOrdenados.push(numero1);
			numerosOrdenados.push(numero2);
			numerosOrdenados.push(numero3);
		}
		else {
			if (numero3 < numero1) {
				numerosOrdenados.push(numero3);
				numerosOrdenados.push(numero1);
				numerosOrdenados.push(numero2);
			} else {
				numerosOrdenados.push(numero1);
				numerosOrdenados.push(numero3);
				numerosOrdenados.push(numero2);
			}
		}
	} else {
		if (numero3 < numero2) {
			numerosOrdenados.push(numero3);
			numerosOrdenados.push(numero2);
			numerosOrdenados.push(numero1);
		} else {
			if (numero3 < numero1) {
				numerosOrdenados.push(numero2);
				numerosOrdenados.push(numero3);
				numerosOrdenados.push(numero1);
			} else {
				numerosOrdenados.push(numero2);
				numerosOrdenados.push(numero1);
				numerosOrdenados.push(numero3);
			}
		}
	}
	return numerosOrdenados;
}