function obtenerFormulario(){
	mensaje = 	"Nombre y apellidos<input id=\"nombre\"type=\"text\" ></input><br/>" +
				"Dia de nacimiento<input id=\"dia\"type=\"number\" ></input><br/>" +
				"Mes de nacimiento<input id=\"mes\"type=\"number\" ></input><br/>" +
				"Año de nacimiento<input id=\"anio\"type=\"number\" ></input><br/>" +
				"<button id=\"boton\">Establecer</button>";
	return mensaje;
}


function obtenerDatosForm() {
	var nombre = document.getElementById('nombre').value;
	var dia = document.getElementById('dia').value;
	var mes = document.getElementById('mes').value;
	var anio = document.getElementById('anio').value;
	var primeraLetra = posPrimeraLetra(nombre);
	var ultimaLetra = posUltimaLetra(nombre);
	var mensaje = "Buenos dias " + nombre + "<br/>" +
				  "Tu nombre tiene: " + nombre.length + " caracteres, incluidos espacios.<br/>" +
				  "La primera letra " + nombre.substr(primeraLetra,1) + " de tu nombre está en la posíción:" + primeraLetra  + "<br/>" +
				  "La última letra " + nombre.substr(ultimaLetra,1) + " de tu nombre está en la posíción:" + ultimaLetra  + "<br/>" +
				  "Tu nombre todo en mayúsculas es: " + nombre.toUpperCase() + "<br/>" +
				  "Tu edad es: " + calcularEdad(anio) + "<br/>" +
				  "Naciste un feliz " + dia + " del mes " + mes + " del año " + anio + 
				  ", No te acuerdas pero era " + calcularDiaSemana(dia, mes, anio) + " y el año " + comprobarBisiesto(anio) + ".</br>" +
				  "El coseno de 90 es: " + Math.cos(Math.PI/2) + "<br/>" +
				  "El número mayor de (65, 22, 69, 99, 12) es " + Math.max(65, 22, 69, 99, 12) + "<br/>" +
				  "Ejemplo de número al azar entre 1 y 10 es " + Math.floor((Math.random() * 10) + 1);
	return mensaje;
}

function obtenerDatosVentana(){
	mensaje="<p>" +
				"URL Completa: " + window.location + "<br/>" +
				"Protocolo utilizado: " + window.location.protocol + "<br/>" +
				"Nombre en código del navegador: " + window.navigator.userAgent + "<br/>" +
				"JAVA está disponible: " + comprobarJava() + "<br/>" +
			"</p>" ;
	return mensaje;
}

function comprobarJava() {
	if(navigator.javaEnabled())
		return "si";
	return "no";
}

function posPrimeraLetra(palabra){
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i] != " ")
			return i;
	};
}

function posUltimaLetra(palabra) {
	for (var i = palabra.length -1; i > -1 ; i--) {
		if (palabra[i] != " ")
			return i;
	};
} 

function calcularEdad(anioNacimiento) {
	fechaActual = new Date();
	return fechaActual.getFullYear() - anioNacimiento;
}

function calcularDiaSemana(dia, mes, anio){
	fecha = new Date(anio, mes-1, dia);
	switch (fecha.getDay()) {
		case 0:
			return "Domingo";
		case 1:
			return "Lunes";
		case 2:
			return "Martes";
		case 3:
			return "Miercoles";
		case 4:
			return "Jueves";
		case 5:
			return "Viernes";
		case 6:
			return "Sabado";
	}
}

function comprobarBisiesto(anio){
	fecha = new Date(anio, 1, 29);
	if(fecha.getDate() == 29)
		return "es bisiesto";
	return "no es bisiesto";
}

window.addEventListener("load", function(){
	document.open();
	document.write(obtenerDatosVentana() + obtenerFormulario());
	document.close();
	var titulo = document.createElement("h1");
	opener.document.body.appendChild(titulo);
	titulo.innerHTML = "<h1>Tarea del tema 3</h1>";
	var parrafo = document.createElement("p");
	opener.document.body.appendChild(parrafo);
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function(){
		parrafo.innerHTML = obtenerDatosForm();
	});
});

