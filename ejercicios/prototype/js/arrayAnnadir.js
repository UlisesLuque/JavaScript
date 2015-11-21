/*
 	Extender el objeto Array para que permita añadir nuevos elementos al final del array:

		var array1 = [0, 1, 2];
		array1.anadir(3);
		// array1 = [0, 1, 2, 3]

	Incluir la opción de controlar si se permiten elementos duplicados o no:

		var array1 = [0, 1, 2];
		 
		array1.anadir(2);
		// array1 = [0, 1, 2, 2]
		 
		array1.anadir(2, false);
		// array1 = [0, 1, 2]

	autor: Ulises Luque Páez
 */
Array.prototype.anadir = function(elemento, boolean){
	if(boolean)
		for(var i=0; i<this.length; i++)
			if(this[i] == elemento)
				return false;
	this[this.length] = elemento;
}

var arr = [0,1,2];
arr.anadir(2, false);
arr.anadir(3, false);
arr.anadir(3, true);
arr.anadir(4, true);
var mensaje = "";

for(var i=0; i<arr.length; i++)
	mensaje += arr[i] + "<br/>";

window.addEventListener("load", function(){
	var eMnsj = document.getElementById('mensaje');
	eMnsj.innerHTML = mensaje;
});