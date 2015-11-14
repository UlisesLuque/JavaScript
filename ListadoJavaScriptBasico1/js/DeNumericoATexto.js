/*
 * Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo
 * muestre escrito. Por ejemplo 12 mostrara doce. Que sea lo más eficiente
 * posible.
 * autor: Ulises Luque Páez
 * version: 1.0
 */


window.addEventListener("load", function() {
	var input = document.getElementById('numero');
	var boton = document.getElementById('mostrar');
	var mensaje = document.createElement("p");
	document.body.appendChild(mensaje);

	input.addEventListener("focus", function(){
		mensaje.innerHTML = ""
		mensaje.className = "";
		input.className = "";
	});

	boton.addEventListener("click", function(){
		var numero = input.value;
		var unidades = parseInt(numero.slice(numero.length-1, numero.length));
		var decenas = parseInt(numero.slice(numero.length-2, numero.length-1));
		var numeroTexto;

		if (numero.length == 1)
			numeroTexto = obtenerUnidades(unidades, decenas);
		else
			numeroTexto = obtenerDecenas(unidades, decenas) + obtenerUnidades(unidades, decenas);

		if (numeroTexto == undefined || numeroTexto == "") {
			mensaje.innerHTML = "Solo se admiten números."
			mensaje.className = "error";
			input.className = "error";
		} else
			mensaje.innerHTML = numeroTexto;
	});
});

function obtenerUnidades(unidades, decenas){
	switch(unidades) {
		case 0:
			if(isNaN(decenas))
				return "cero";
			return "";
		case 1:
			return "uno";
		case 2: 
			return "dos";
		case 3: 
			return "tres";
		case 4:
			return "cuatro";
		case 5: 
			return "cinco";
		case 6:
			return "seis";
		case 7:
			return "siete";
		case 8:
			return "ocho";
		case 9 :
			return "nueve";
		default:
			return "";
	}
}

function obtenerDecenas(unidades, decenas) {
	switch (decenas) {
		case 1:
			switch (unidades) {
				case 0:
					return "diez";
				case 1:
					return "once";
				case 2:
					return "doce";
				case 3:
					return "trece";
				case 4: 
					return "catorce";
				case 5:
					return "quince";
				default:
					return "dieci";
			}
		case 2:
			if(unidades == 0)
				return "veinte";
			return "veinti";
		case 3:
			if(unidades == 0)
				return "treinta";
			return "treinta y ";
		case 4:
			if(unidades == 0)
				return "cuarenta"
			return "cuarenta y ";
		case 5:
			if(unidades == 0)
				return "cincuenta"
			return "cincuenta y ";
		case 6:
			if(unidades == 0)
				return "sesenta"
			return "sesenta y ";
		case 7:
			if(unidades == 0)
				return "setenta";
			return "setenta y ";
		case 8:
			if(unidades == 0)
				return "ochenta"
			return "ochenta y ";
		case 9:
			if(unidades == 0)
				return "noventa"
			return "noventa y ";
		default:
			return "";
	}
}