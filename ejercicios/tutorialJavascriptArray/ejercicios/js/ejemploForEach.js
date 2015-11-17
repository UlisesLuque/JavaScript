/*
	Ejemplo del uso del método forEach();
	autor: Ulises Luque Páez
*/

window.addEventListener("load", function(){
	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.forEach(showResults);

	function showResults(value, index, ar) {
	    document.write("value: " + value);
	    document.write(" index: " + index);
	    document.write("<br/>");
   	}
});