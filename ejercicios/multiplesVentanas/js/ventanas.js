/*
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 *  miVentana = window.open('','','width=200,height=200');
 *  miVentana.document.open();
 *  miVentana.document.write() 
 *      Añade el esqueleto básico: html, head, title, body, ul...
 *  miVentana.document.close();
 * autor:Ulises Luque Páez
 * version:1.0
 */

window.addEventListener("load", function(){
	var boton = document.getElementById('botonCerrar');
	boton.addEventListener("click", function(){
		window.close();
	})
});