/*
*Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número 
*entre el 1 y el 100. Mostrará un mensaje:
*a.Para indicar si has acertado (en una nueva ventana)
*b.Para indicar si la solución es mayor o es menor.
* autor: Ulises Luque Páez
* version: 1.0
*/

var numberAl = Math.round(Math.random() * 100);

window.addEventListener("load", function(){
	var input  = document.getElementById('input');
	var button = document.getElementById("comprobar");
	var parrafo = document.getElementById("mensaje");
	input.addEventListener("focus", function(){
		parrafo.innerHTML = "";
		parrafo.className= "";
		input.className="";
	})
	button.addEventListener("click", function(){
		var numberUser = input.value;
		if (numberUser == "" || isNaN(numberUser)) {
			parrafo.innerHTML = "*Introduce un número";
			parrafo.className= "error";
			input.className="error";
		}
		else {
			if(numberUser < numberAl)
				parrafo.innerHTML = "Más";
			else if (numberUser > numberAl)
				parrafo.innerHTML = "Menos";
			else {
				var ventana = window.open("", "Has acertado", "width=400, height=400");
				ventana.document.write("Enhorabuena, has acertado<br/>");
				ventana.document.write("<button id= \"again\">Jugar otra vez </button>");
				ventana.document.close();
				var againButton = ventana.document.getElementById('again');
				againButton.addEventListener("click", function() {
					ventana.close();
					numberAl = Math.round(Math.random() * 100);
					input.value = "";
				});
			}
		}
	});
});
