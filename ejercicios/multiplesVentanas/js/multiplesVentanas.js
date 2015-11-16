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
	var boton = document.getElementById("boton");	
	var ventana = Array();
	boton.addEventListener("click", function(){
		for (var i = 1; i < 6; i++) {
			ventana[i] = window.open("","", "width=200, height=200, top="+i*5+", left="+i*5);
			ventana[i].document.open();
			ventana[i].document.write("<!DOCTYPE html>"+
										"<html lang=\"es\">" +
										"<head>" +
											"<meta charset=\"UTF-8\">" +
											"<title>Ventana "+i+"</title>" +
											"<script type=\"text/javascript\" src=\"js/ventanas.js\"></script>" +
										"</head>" +
										"<body>" +
										"<span>Ventana " +i+ " </span>" +
										"<button id=\"botonCerrar\">Cerrar</button>" +
										"</body>" +
										"</html>");
			ventana[i].document.close();
		}
	});
});