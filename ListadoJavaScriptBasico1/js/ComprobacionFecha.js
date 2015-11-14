/*
 * Implementa ComprobacionFecha que solicite el día, el mes y el a´ño e indique si la fecha es 
 * correcta. Si lo fuera, ha de mostrar el día después.
 * autor: Ulises Luque Páez
 * versión: 1.0
 */


window.addEventListener("load", function() {
	var boton = document.getElementById('comprobar');
	var parrafo = document.createElement("p");
	var input = document.getElementById('fecha');
	document.body.appendChild(parrafo);
	input.addEventListener("focus", function() {
		parrafo.innerHTML = "";
		parrafo.className = "";
		input.className = "";
	});

	boton.addEventListener("click", function() {
		var fechaUsuario = input.value;
		var dia = fechaUsuario.slice(0,2);
		var mes = fechaUsuario.slice(3,5) - 1;
		var anio = fechaUsuario.slice(6,10);
		var fecha = new Date(anio, mes, dia);
		var diaDeLaSemana = fecha.getDay();
		if (/^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|[1][0-2])\2(\d{4})$/.test(fechaUsuario) && dia == fecha.getDate() && mes == fecha.getMonth())
			parrafo.innerHTML = "Fecha válida.<br/> El día de la semana es " + obtenerDiaSemana(diaDeLaSemana) + ".";	
		else {
			parrafo.innerHTML = "Fecha no válida.";
			parrafo.className = "error";
			input.className = "error";
		}
	});
});

//Devuelve el día de la semana
function obtenerDiaSemana(dia) {
	switch (dia) {
		case 0:
			return "Domingo";
			break;
		case 1:
			return "Lunes";
			break;
		case 2:
			return "Martes";
			break;
		case 3:
			return "Miércoles";
			break;
		case 4:
			return "Jueves";
			break;
		case 5:
			return "Viernes";
			break;
		case 6:
			return "Sábado";
			break;
	}
}