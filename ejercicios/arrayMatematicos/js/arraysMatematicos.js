/*
 Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar a la clase ArraysMatematicos. Recuerda que el estado de un array deberían de ser los elementos. Recuerda las restricciones y posibilidades de un Array:

	    Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...)
	    Sobre las longitudes de los arrays implicados (1 en adelante)
	    Sobre los contenidos de los arrays implicados (numéricos)
	    Podemos rellenar un Array con valores aleatorios o directamente desde teclado.

	Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada. Evita las cajas de texto y hazla lo más dinámica
*/


function Exception(mensaje){
	this.mensaje = mensaje;
	this.name = "Exception";
}

function ArraysMatematicos(filas, columnas){
		this.matriz = [];
		this.filas = filas;
		this.columnas = columnas;


}

ArraysMatematicos.prototype.sumar = function(matriz2){
	var matrizResultado = [];
	if(this.filas == matriz2.filas && this.columnas == matriz2.columnas){
		for (var i=0; i<this.filas; i++) {
			matrizResultado[i] = [];
			for(var j=0; j<matriz2.columnas; j++){
				matrizResultado[i][j] = this.matriz[i][j] + matriz2.matriz[i][j];
			}
		}
		return matrizResultado;
	} else {
		throw new Exception("Para sumar dos matrices el número de filas y de columnas de ambas deben ser iguales.");
	}
	return -1;
}

ArraysMatematicos.prototype.restar = function(matriz2){
	var matrizResultado = [];
	if(this.filas == matriz2.filas && this.columnas == matriz2.columnas){
		for (var i=0; i<this.filas; i++) {
			matrizResultado[i] = [];
			for(var j=0; j<matriz2.columnas; j++){
				matrizResultado[i][j] = this.matriz[i][j] - matriz2.matriz[i][j];
			}
		}
		return matrizResultado;
	} else {
		throw new Exception("Para restar dos matrices el número de filas y de columnas de ambas deben ser iguales.");
	}
	return -1;
}

ArraysMatematicos.prototype.multiplicar = function(matriz2){
	var matrizResultado = [];
	if(this.filas == matriz2.columnas && this.columnas == matriz2.filas){
		for (var i = 0; i < this.filas; i++) {
			matrizResultado[i] = [];
			for (var j = 0; j < matriz2.columnas; j++) {
				matrizResultado[i][j]=0;
				for (var k = 0; k < this.columnas; k++) {
					matrizResultado[i][j] += this.matriz[i][k] * matriz2.matriz[k][j];
				}
			}
		}
		return matrizResultado;
	} else {
		throw new Exception("Para multiplicar dos matrices el número de filas de la primera debe ser igual al número de columnas de la segunda.");
	}
	return -1;
}

ArraysMatematicos.prototype.trasponer = function(){
	var matrizResultado = [];
	for (var i=0; i<this.columnas; i++) {
		matrizResultado[i] = [];
		for(var j=0; j<this.filas; j++){
			matrizResultado[i][j] = this.matriz[j][i];
		}
	}
	return matrizResultado;
}

ArraysMatematicos.prototype.toString = function(){
	var mensaje = "<table>";
	for(var i=0; i<this.matriz.length; i++){
		mensaje += "<tr>";
		for(var j=0; j<this.matriz[0].length; j++){
			mensaje += "<td>" +this.matriz[i][j] + "</td>";
		}
		mensaje += "</tr>";
	}
	mensaje += "</tr></table>";
	return mensaje;
}

ArraysMatematicos.prototype.rellenarMatriz = function(){
	for(var i=0; i<this.filas; i++){
		this.matriz[i] = [];
		for(var j=0; j<this.columnas; j++){
			this.matriz[i][j] = Math.round((Math.random()*10) + 1 ) ;
		}
	}
}


function operar(matriz1, matriz2){
	var matrizResultado = new ArraysMatematicos();
	try {
		switch (document.getElementById('opcion').value){
			case "sumar":
				matrizResultado.matriz = matriz1.sumar(matriz2);
				break;
			case "restar":
				matrizResultado.matriz = matriz1.restar(matriz2);
				break;
			case "trasponer":
				matrizResultado.matriz = matriz1.trasponer();
				break;
			case "multiplicar":
				matrizResultado.matriz = matriz1.multiplicar(matriz2);
				break;
		}
	} catch (e) {
		throw e;
	}
	return matrizResultado;
}

function toogleError(bool, e){
	var clase;
	if (bool){
		var eMnsj = document.getElementById('mensaje');
		eMnsj.innerHTML =  "<span class='error'>" + e.mensaje + "</span>";
		clase = "error";
	} else {
		clase = "";
	}
	document.getElementById("filas1").className = clase;
	document.getElementById("columnas1").className = clase;
	document.getElementById("filas2").className = clase;
	document.getElementById("columnas2").className = clase;
}

window.addEventListener("load", function(){
	var boton = document.getElementById('establecer');
	boton.addEventListener("click", function(){
		var filas1 = document.getElementById('filas1').value;
		var columnas1 = document.getElementById('columnas1').value;
		var filas2 = document.getElementById('filas2').value;
		var columnas2 = document.getElementById('columnas2').value;
		if(filas1 === "" || columnas1 === "" || filas2 === ""  || columnas2 === ""){
			toogleError(true, new Exception("Los campos no pueden estar vacíos"));
		} else {
			var matriz1 = new ArraysMatematicos(filas1, columnas1);
			matriz1.rellenarMatriz();
			var matriz2 = new ArraysMatematicos(filas2, columnas2);
			matriz2.rellenarMatriz();
			var matrizResultado = new ArraysMatematicos();
			try{
				matrizResultado = operar(matriz1, matriz2);
				document.getElementById('mensaje').innerHTML = "<div>Matriz 1: " + 
				matriz1.toString() + "</div><div>Matriz 2: " + matriz2.toString() + 
				"</div><div>Matriz resultado: " +matrizResultado.toString() + "</div>";
				toogleError(false);
			} catch (e) {
				toogleError(true, e);
			}
			
		}	
	});
});