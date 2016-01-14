/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

window.addEventListener("load", function(){

	var eBotonPulsado = document.getElementById("boton");
	var eEvento = document.getElementById("evento");
	var ePosicionX = document.getElementById("posicionX");
	var ePosicionY = document.getElementById("posicionY");

	this.addEventListener("click", function(evento){
		mostrarInfo(evento, document.getElementById("click"));
	});
	this.addEventListener("dblclick", function(evento){
		mostrarInfo(evento, document.getElementById("dblclick"));
	});
	this.addEventListener("mousedown", function(evento){
		mostrarInfo(evento, document.getElementById("mousedown"));
	});
	this.addEventListener("mouseup", function(evento){
		mostrarInfo(evento, document.getElementById("mouseup"));
	});
	this.addEventListener("contextmenu", function(evento){
		mostrarInfo(evento, document.getElementById("contextmenu"));
	});
	this.addEventListener("mousemove", function(evento){
		mostrarInfo(evento, document.getElementById("mousemove"));
	});

	this.addEventListener("mouseenter", function(evento){
		mostrarInfo(evento, document.getElementById("mouseenter"));
	});
	this.addEventListener("mouseout", function(evento){
		mostrarInfo(evento, document.getElementById("mouseout"));
	});
	this.addEventListener("mouseover", function(evento){
		mostrarInfo(evento, document.getElementById("mouseover"));
	});
	this.addEventListener("mouseleave", function(evento){
		mostrarInfo(evento, document.getElementById("mouseleave"));
	});
	
	this.addEventListener("show", function(evento){
		mostrarInfo(evento, document.getElementById("show"));
	});
	

	function mostrarInfo(evento, elemento){
		for (var i = document.getElementById("valores").childNodes.length - 1; i >= 0; i--) {
			document.getElementById("valores").childNodes[i].innerHTML="";
		};
		var evento = evento || window.event;
		var tipoEvento = evento.type;
		var coordenadasX = evento.clientX;
		var coordenadasY = evento.clientY;
		if(tipoEvento == "click" || tipoEvento == "dblclick" || tipoEvento == "contextmenu"
			|| tipoEvento == "mouseup" || tipoEvento == "mousedown")
			eBotonPulsado.innerHTML = comprobarBoton(evento);
		else 
			eBotonPulsado.innerHTML = "ninguno";
		elemento.innerHTML = "X";
		eEvento.innerHTML= tipoEvento;
		ePosicionX.innerHTML = coordenadasX;
		ePosicionY.innerHTML = coordenadasY;

	}

	function comprobarBoton(evento){
		var boton = "";
		switch (evento.button){
			case 0:
				boton = "izquierdo";
				break;
			case 1:
				boton = "centro";
				break;
			case 2:
				boton = "derecho";
				break;
		}
		return boton;

	}
});
