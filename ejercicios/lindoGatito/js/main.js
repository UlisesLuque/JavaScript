function campoRequeridoException(name){
	this.name= name;
	this.message = "Este campo es requerido.";
}

function comprobarFecha(fecha){
	var arrayFecha = fecha.split("/");
	var dia = parseInt(arrayFecha[0]);
	var mes = parseInt(arrayFecha[1]-1);
	var anio = parseInt(arrayFecha[2]);
	var fecha = new Date(anio, mes, dia);
	if(fecha.getDate() == dia && fecha.getMonth() == mes && fecha.getFullYear() == anio)
		return true;
	return false;
}

(function(){
	function comprobarDatos(nombre, fecha, raza, peso){
		var patron = new RegExp("^(0?[1-9]|[1-2][0-9]|3[0-1])[\/](0[1-9]|1[0-2])[\/](19[0-9][0-9]|200[0-9]|201[0-5]$)");
		if(nombre === "")
			throw new campoRequeridoException("nombreVacioException");
		if(fecha === "")
			throw {name:"fechaVaciaException", message:"fecha requerida"}
		if(!patron.test(fecha))
			throw {name:"formatoFechaException", message:"Formato de fecha inválido."}
		if(!comprobarFecha(fecha))
			throw {name:"fechaInvalidaException", message:"fecha no válida"}
		if(peso === "")
			throw new campoRequeridoException("pesoVacioException");
		if(isNaN(peso) || peso < 1)
			throw {name:"pesoInvalidoException", message:"peso inválido."}
		return true;
	}

	function limpiarErrores(){
		var elementos = document.getElementById("form").childNodes;
		for(var i=0; i<elementos.length; i++){
			elementos[i].addEventListener("focus", function(){
				this.className = "";
				this.nextSibling.className = "";
				this.nextSibling.innerHTML = "";
			})
		}
			
	}

	window.addEventListener("load", function(){
		limpiarErrores();
		var eFecha = document.getElementById("fecha");
		eFecha.addEventListener("focus", function(){
			if(this.value == "dd/mm/aaaa"){
				this.value= "";
				this.style.color= "black";
			}
		})
		eFecha.addEventListener("blur", function(){
			if(this.value == ""){
				this.value= "dd/mm/aaaa";
				this.style.color= "grey";
			}
			
		})
		var botonCrear = document.getElementById('crea');
		botonCrear.addEventListener("click", function(){
			var nombre = document.getElementById('nombre').value;
			var fecha = document.getElementById('fecha').value;
			var raza = document.getElementById('raza').value;
			var peso = parseInt(document.getElementById('peso').value);
			try {
				if(comprobarDatos(nombre, fecha, raza, peso)){
					var nuevaVentana = window.open("", "" , "width=800, height=500, resizable=0");
					nuevaVentana.document.open();
					nuevaVentana.document.write( ""+
						"<!DOCTYPE html>"+
						"<html lang='en'>"+
							"<head>"+
							"<meta charset='UTF-8'>"+
							"<title>Lindo gatito</title>"+
							"<link rel='stylesheet' href='css/style.css'>"+
							"<script type='text/javascript' src='js/newWindow.js'></script>"+
							"</head>"+
							"<body>"+
								"<div id='content'>"+
									"<form>"+
										"<input id='comer' type='button' value='Comer'>"+
										"<input id='jugar' type='button' value='Jugar'>"+
										"<input id='dormir' type='button' value='Dormir'>"+
										"<input id='edad' type='button' value='edad'>"+
									"</form>"+
									"<div id='imagen'></div>"+
								"</div>"+
								"<div id='Descripcion'>"+
									"<p id='nombre'></p>"+
									"<p id='fecha'></p>"+
									"<p id='raza'></p>"+
									"<p id='peso'></p>"+
									"<p id='mensaje'></p>"+
								"</div>"+
							"</body>"+
							"</html>"+
					"");
					nuevaVentana.document.close();
				}
			} catch (e) {
				var elemento;
				switch (e.name) {
					case "nombreVacioException":
						elemento = document.getElementById("errorNombre");
						break;
					case "fechaInvalidaException":
					case "fechaVaciaException":
					case "formatoFechaException":
						elemento = document.getElementById("errorFecha");
						break;
					case "pesoVacioException":
					case "pesoInvalidoException":
						elemento = document.getElementById("errorPeso");
						break;
				}
				elemento.innerHTML = e.message;
				elemento.className = "error";
			}	
		});
	});
})();
