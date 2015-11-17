/*
	Create a function filterNumeric(arr) which takes an array and returns new array which contains only numeric values from arr.

	An example of how it should work:
		arr = ["a", 1, "b", 2];
		arr = filterNumeric(arr);
		// now arr = [1,2]
	autor: Ulises Luque Paez
 */


window.addEventListener("load", function(){
	arr = filterNumeric(["a", 1, "b", 2]);
	var eMensaje  = document.getElementById('mensaje');
	var mensaje = "Los elementos que son numéricos son: ";
	for(var i=0; i<arr.length; i++){
		mensaje += arr[i] + ", ";
	}
	eMensaje.innerHTML += mensaje;
});

function filterNumeric(arr){
	var arrayNumbers = [];
	for (var i=0; i<arr.length; i++){
		if(!isNaN(arr[i]))
			arrayNumbers.push(arr[i]);
	}
	return arrayNumbers;
}