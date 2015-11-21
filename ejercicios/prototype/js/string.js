/*
	Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro:

		var cadena = "hola mundo";
		cadena2 = cadena.truncar(6); // cadena2 = "hola m"

	Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado:

		var cadena = "hola mundo";
		cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."

	autor: Ulises Luque Páez
 */

String.prototype.truncar = function(longitud, texto){
	if(this.length > longitud){
		return this.substring(0, longitud) + texto;
	}
	return this;
		
}

window.addEventListener("load", function(){
	var mensaje = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto";
	mensaje = mensaje.truncar(15, "|truncado");
	var eMnsj = document.getElementById('mensaje');
	eMnsj.innerHTML = mensaje;
});