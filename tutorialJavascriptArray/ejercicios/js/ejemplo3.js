/*
	Create a function find(arr,value) which finds a value in given array and returns its index, or -1 if not found.
	For instance:
	arr = [ "test", 2, 1.5, false ]
	find(arr, "test") // 0
	find(arr, 2) // 1
	find(arr, 1.5) // 2
	find(arr, 0) // -1
 */


window.addEventListener("load", function(){
	var arr = ["test", 2, 1.5, false];
	var eMensaje = document.getElementById('mensaje');
	eMensaje.innerHTML = "El elemento " + arr[find(arr, 1.5)] + " está en el indice " + find(arr, 1.5);
});

function find(array, value){
	for (var i = 0; i < array.length; i++){
		if(array[i] == value)
			return i;
	}
	return -1;
}