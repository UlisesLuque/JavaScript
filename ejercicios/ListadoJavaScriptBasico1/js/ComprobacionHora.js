/*
 * Implementa ComprobacionHora que solicite los segundos, minutos y hora e 
 * indique si es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
 * autor: Ulises Luque Páez
 * version: 1.0
 */

//Muestra un error en un elemento.
 function mostrarError(mostrar, elementoMensaje, elemento, mensaje){
	if(mostrar){
		elementoMensaje.innerHTML= mensaje;
		elementoMensaje.className = "error";
		elemento.className = "error";
	} else {
		elementoMensaje.innerHTML= "";
		elementoMensaje.className = "";
		elemento.className = "";
	}
}

window.addEventListener("load",  function() {
	var elementoErrorHoras = document.createElement("p");
	var elementoErrorMinutos = document.createElement("p");
	var elementoErrorSegundos = document.createElement("p");
	var elementoMensaje = document.createElement("p");
	var errorHoras = "Horas incorrectas.";
	var errorMinutos = "Minutos incorrectos.";
	var errorSegundos  = "Segundos incorrectos."

	document.body.appendChild(elementoErrorHoras);
	document.body.appendChild(elementoErrorMinutos);
	document.body.appendChild(elementoErrorSegundos);
	document.body.appendChild(elementoMensaje);

	var inputHoras = document.getElementById('horas');
	var inputMinutos = document.getElementById('minutos');
	var inputSegundos = document.getElementById('segundos');
	var boton = document.getElementById('comprobar');
	var hora = new Date();

	function comprobarHoras(){
		var horas = inputHoras.value;
		hora.setHours(horas);
		if(horas == "" || horas != hora.getHours()) {
			mostrarError(true, elementoErrorHoras, inputHoras, errorHoras);
			return false;
		}
	}

	function comprobarMinutos(){
		var minutos = inputMinutos.value;
		hora.setMinutes(minutos);
		if (minutos == "" || minutos != hora.getMinutes()) {
			mostrarError(true, elementoErrorMinutos, inputMinutos, errorMinutos);
			return false;
		}
	}

	function comprobarSegundos() {
		var segundos = inputSegundos.value;
		hora.setSeconds(segundos);
		if (segundos == "" || segundos != hora.getSeconds()) {
			mostrarError(true, elementoErrorSegundos, inputSegundos, errorSegundos);
			return false;
		}
	}

	inputHoras.addEventListener("blur", comprobarHoras);

	inputHoras.addEventListener("focus", function() {
		mostrarError(false, elementoErrorHoras, inputHoras, errorHoras);
	});

	inputMinutos.addEventListener("blur", comprobarMinutos);

	inputMinutos.addEventListener("focus", function() {
		mostrarError(false, elementoErrorMinutos, inputMinutos, errorMinutos);
	});

	inputSegundos.addEventListener("blur", comprobarSegundos);

	inputSegundos.addEventListener("focus", function() {
		mostrarError(false, elementoErrorSegundos, inputSegundos, errorSegundos);
	});

	boton.addEventListener("click", function() {
		if(comprobarHoras() && comprobarMinutos() && comprobarSegundos())
			elementoMensaje.innerHTML= "Hora correcta. La hora más un segundo es " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
	});
});
