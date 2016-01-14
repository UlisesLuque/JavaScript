/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

window.addEventListener("load", function(){
	var eEvento = document.getElementById("evento");
	var eKeycode = document.getElementById("keycode");
	var eCharcode = document.getElementById("Charcode");

	this.addEventListener("keypress", mostrarInfo);
	this.addEventListener("keydown", mostrarInfo);
	this.addEventListener("keyup", mostrarInfo);

	function mostrarInfo(evento){
		var evento = evento || window.event;
		var tipoEvento = evento.type;
		var charCode = evento.charCode;
		var keyCode = evento.keyCode;

		eEvento.innerHTML = tipoEvento;
		eKeycode.innerHTML = charCode;
		eCharcode.innerHTML = keyCode;

	}
});
