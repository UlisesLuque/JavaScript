/*
	Create a function camelize(str) which transforms a string from “my-short-string” to “myShortString”.

	So, all parts after a hyphen become camelcased instead. For instance:

	camelize("background-color") == 'backgroundColor'
	camelize("list-style-image") == 'listStyleImage'

	Such function may be useful when operating with CSS.

	Note. Remember charAt, substr and check str.toUpperCase() function which transforms the string to upper case.

	autor: Ulises Luque Páez
 */


window.addEventListener("load", function(){
	var eMensaje = document.getElementById('mensaje');

	var cad = "my-short-string";
	var cadCM = camelize(cad);
	eMensaje.innerHTML = "The string to camelize is " + cadCM;

	function camelize(str){
		var strArr = str.split("-");
		for(var i=0; i<strArr.length; i++){
			var primerCar = strArr[i][0];
			strArr[i] = strArr[i].replace(primerCar,primerCar.toUpperCase());
		}
		return strArr.join("");
	}
});