/*
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 *  window.open()
 *  document.write() 
 *      Añade el esqueleto básico: html, head, title, body, ul...
 * autor: Ulises Luque Páez
 * version:1.0
 */

window.addEventListener("load", function(){
	var titulo = document.createElement("h1");
	document.body.appendChild(titulo);
	titulo.innerHTML = "Ejemplo de Apariencia de una Ventana";
	titulo.style.textAlign = "center";
	var boton = document.createElement("button");
	boton.innerHTML = "Abre una Ventana";
	document.body.appendChild(boton);
	document.body.style.textAlign= "center";
	boton.addEventListener("click", function(){
		var ventana2 = window.open("", "Nueva ventana", "height=200, width=300, left=0, top=0");
		ventana2.document.open();
		ventana2.document.write("<!DOCTYPE html>" +
									"<html lang=\"es\">" +
										"<head>" +
											"<meta charset=\"UTF-8\">" +
											"<title>Apariencia de ventanas</title>" +
										"</head>" +
										"<body>" +
											"<span>Se ha utilizado las propiedades</span>" +
											"<ul>" +
												"<li>height=200</li>" +
												"<li>width=300</li>" +
											"</ul>" +
										"</body>" +
									"</html>");
		ventana2.document.close();
	});
});