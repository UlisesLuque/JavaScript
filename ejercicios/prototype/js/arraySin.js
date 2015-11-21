/*
	Añadir a la clase Array un método llamado sin() que permita filtrar los elementos del array original y obtenga un nuevo array con todos los valores diferentes al indicado:

		var array1 = [1, 2, 3, 4, 5];
		var filtrado = array1.sin(4);  // filtrado = [1, 2, 3, 5]

	autor: Ulises Luque Páez
 */

Array.prototype.sin = function(elemento){
	for(var i=0; i<this.length; i++)
		if(this[i] == elemento)
			this.splice(i, 1);
};

var arr = [0,1,2,1,4,5];

var mensaje = "Array inicial: ";

for(var i=0; i<arr.length; i++)
	mensaje += arr[i] + ", ";

mensaje += "<br/> Array aplicando sin(1): ";
arr.sin(1);

for(var i=0; i<arr.length; i++)
	mensaje += arr[i] + ", ";

window.addEventListener("load", function(){
	var eMnsj = document.getElementById('mensaje');
	eMnsj.innerHTML = mensaje;
});