/*
 * Implementa DeSieteEnSiete que escriba
 * los números del 100 al 0 de 7 en 7
 */

window.addEventListener("load", function() {

	var parrafo = document.getElementById('parrafo');
	for (i=100; i>-1; i-=7){
		parrafo.innerHTML += i + "<br/>";
	}
});