/*
    Create an array styles with elements “Jazz”, “Blues”.
    Append a value “Rock’n’Roll”
    Replace the second value from tail by “Classic”. The array should become “Jazz”,”Classic”,”Rock’n’Roll”. The code should work for any array length.
    Extract the last value from the array and alert it.
    autor: Ulises Luque Paez
 */

var styles = ["Jazz", "Blues"];
styles.push("Rock'n'roll");
styles[1] = "Classic";

window.addEventListener("load", function(){
	var eMensaje = document.getElementById('mensaje');
	var mensaje = "";
	for(var i = 0; i < styles.length; i++)
		mensaje += styles[i] + ", ";
	eMensaje.innerHTML = mensaje;
});