/*
	Make a generic function filter(arr, func) which filters an array using given function.
	Only those elements for which func(elem) returns true should compose the result.

	Every element which pass through and returns new array which contains only numeric values from arr.

	An example of how it should work:
	arr = ["a", -1, 2, "b"]
	 
	arr = filter(arr, isNumeric)
	// arr = [-1, 2], only numeric in result
	 
	arr = filter(arr, function(val) { return val > 0 })
	// arr = [2] , for other values function returns false

	autor: Ulises Luque Páez
 */


window.addEventListener("load", function(){
	var eMensaje = document.getElementById('mensaje');
	var mensaje  = "El array filtrado es: ";
	var arr = [1, true, "hola", false, "adios", 3.5, undefined];
	var arrFiltered = arr.filter(isStr);

	for(var i=0; i< arrFiltered.length; i++){
		mensaje += arrFiltered[i] + ", ";
	}

	eMensaje.innerHTML = mensaje;
		
	function isStr(elemento){
		return typeof(elemento) == "string";
	}
});