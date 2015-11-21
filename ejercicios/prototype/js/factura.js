/*
 Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase llamada Factura 
 y que permita crear objetos de ese tipo. 
 Se deben utilizar las funciones constructoras y la propiedad prototype.

Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, elementos), 
donde cliente también es una pseudoclase que guarda los datos del cliente y 
elementos es un array simple que contiene las pseudoclases de todos los elementos 
que forman la factura.

autor: Ulises Luque Páez

 */

function Factura(cliente, elementos){
	this.cliente = cliente;
	this.elementos = elementos;

}
function Cliente(nombre, apellidos){
	this.nombre = nombre;
	this.apellidos = apellidos;
}

function Elementos(descripcion, cantidad, precio){
	this.descripcion = descripcion;
	this.cantidad = cantidad; 
	this.precio = precio;
}

var cliente1 = new Cliente("Rafael", "Navarro");
var cliente2 = new Cliente("Elisa", "Navarro");

var elementos1 = new Elementos("Disco duro", 1, 49.95);
var elementos2 = new Elementos("Disco SSD", 2, 300);


var factura1 = new Factura(cliente1, elementos1);
var factura2 = new Factura(cliente2, elementos2);

var facturas = [factura1, factura2];

window.addEventListener("load", function(){
	var eMnsj = document.getElementById('mensaje');
	var mensaje = "";
	for(var i=0 ; i<facturas.length; i++){ //Recorro las facturas
		for (var objeto in facturas[i]) { //Recorro los elementos de cada factura
			for (var obj in facturas[i][objeto]) { //Recorro los elementos de cada elemeto de cada factura
				mensaje += obj + ": " + facturas[i][objeto][obj] + "<br/>";
			 }
		}
		mensaje +="<br/>"
	}
	eMnsj.innerHTML = mensaje;
});

