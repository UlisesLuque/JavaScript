/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */




(function(){
	function comprobarNombre(value){
		return /^[\wÁÉÍÓÚÑáéíóúñ]{3,}$/.test(value);
	}

	function comprobarFecha(fecha){
		if(!(/^(0?[1-9]|[1-2][0-9]|3[0-1])[-](0[1-9]|1[0-2])[-](19[0-9][0-9]|200[0-9]|201[0-5]$)/.test(fecha)))
			return false;
		var arrayFecha = fecha.split("-");
		var dia = parseInt(arrayFecha[0]);
		var mes = parseInt(arrayFecha[1])-1;
		var anio = parseInt(arrayFecha[2]);
		var fecha = new Date(anio, mes, dia);
		if(anio != fecha.getFullYear() || mes != fecha.getMonth() || dia != fecha.getDate())
			return false;
		var fechaActual = new Date();
		var edadMs = parseInt(fechaActual - fecha);
		if(edadMs < 0)
			return false;
		return true;
	}

	function comprobarCheckBox(checkBox){
			if(checkBox.checked){
				return true;
			}
			return false;
	}


	function comprobarDatos(nombre, apellido1, apellido2, fecha, checkbox){
		var mnjNombre = document.getElementById("errorNombre");
		var mnjApellido1 = document.getElementById("errorApellido1");
		var mnjApellido2 = document.getElementById("errorApellido2");
		var mnjFecha = document.getElementById("errorFecha");
		var mnjCheckbox = document.getElementById("errorCheckbox");
		var ok = true;
		if(!comprobarNombre(nombre.value)){
			mnjNombre.innerHTML = "Nombre no válido";
			nombre.className = "error";
			ok = false;
		} else {
			mnjNombre.innerHTML = "";
			nombre.className = "";
		}
		if(!comprobarNombre(apellido1.value)){
			mnjApellido1.innerHTML = "Apellido no válido";
			apellido1.className = "error";
			ok = false;
		} else {
			mnjApellido1.innerHTML = "";
			apellido1.className = "";
		}
		if(!comprobarNombre(apellido2.value)){
			mnjApellido2.innerHTML = "Apellido no válido";
			apellido2.className = "error";
			ok = false;
		} else {
			mnjApellido2.innerHTML = "";
			apellido2.className = "";
		}
		if(!comprobarFecha(fecha.value)){
			mnjFecha.innerHTML = "Fecha no válida";
			fecha.className = "error";
			ok = false;
		} else {
			mnjFecha = "";
			fecha.className = "";
		}
		if(!
			comprobarCheckBox(checkbox)){
			mnjCheckbox.innerHTML = "Debe aceptar las condiciones";
			checkbox.className = "error";
			ok = false;
		} else {
			mnjCheckbox.innerHTML = "";
			checkbox.className = "";
		}


		return ok;
	}

	function calcularEdad(fecha){
		var arrayFecha = fecha.split("-");
		var dia = parseInt(arrayFecha[0]);
		var mes = parseInt(arrayFecha[1])-1;
		var anio = parseInt(arrayFecha[2]);
		var fecha = new Date(anio, mes, dia);
		var fechaActual = new Date();
		var edadMs = parseInt(fechaActual - fecha);
		var edad = new Date(0, 0, 1, 0, 0, 0, edadMs);
		return edad.getYear() + " años, " + edad.getMonth() + " meses,  " + (edad.getDate()-1) + " dias.";
	}

	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	} 

	function Universitario(nombre, apellido1, apellido2, fecha){
		if(comprobarNombre(nombre))
			this.nombre = nombre;
		else
			throw {name:"nombreNoValido", message: "Nombre no válido"};
		if(comprobarNombre(apellido1))
			this.apellido1 = apellido1;
		else
			throw {name:"apellido1NoValido", message: "Apellido no válido"};
		if(comprobarNombre(apellido2))
			this.apellido2 = apellido2;
		else
			throw {name:"apellido2NoValido", message: "Apellido no válido"};
		if(comprobarFecha(fecha)){
			this.fecha = fecha;
			this.edad = calcularEdad(fecha);
		}
		else 
			throw {name:"fechaNoValida", message: "Fecha no válida."};
	}

	Universitario.prototype.mostrar = function(){
		var newWindow = window.open("");
		newWindow.document.open();
		newWindow.document.write(
			"<p>Nombre: " +this.nombre+
			"</p><p>Primer apellido: " +this.apellido1+
			"</p><p>Segundo apellido: " +this.apellido2+
			"</p><p>Edad: " +this.edad+ "</p>");
		newWindow.document.close();
	}

	window.addEventListener("load", function(){
		var botonCrear = document.getElementById("crear");
		var inputNombre = document.getElementById("nombre");
		var inputApellido1 = document.getElementById("apellido1");
		var inputApellido2 = document.getElementById("apellido2");
		var inputFecha = document.getElementById("fecha");
		var checkbox = document.getElementById("checkbox");
		var mesajesError = document.getElementsByTagName("span");
		var inputLimpiar = document.getElementById("limpiar");

		limpiar.addEventListener("click", function(){
			localStorage.removeItem("nombre");
			localStorage.removeItem("apellido1");
			localStorage.removeItem("apellido2");
			localStorage.removeItem("fecha");
		})


		if(localStorage.length != 0){
			inputNombre.value = localStorage.getItem("nombre");
			inputApellido1.value = localStorage.getItem("apellido1");
			inputApellido2.value = localStorage.getItem("apellido2");
			inputFecha.value = localStorage.getItem("fecha");
		}

		botonCrear.addEventListener("click", function(){
			if(comprobarDatos(inputNombre, inputApellido1, 
			inputApellido2, inputFecha, checkbox)){
				try {
					var universitario = new Universitario(inputNombre.value, inputApellido1.value, 
					inputApellido2.value, inputFecha.value);
					localStorage.setItem("nombre", universitario.nombre);
					localStorage.setItem("apellido1", universitario.apellido1);
					localStorage.setItem("apellido2", universitario.apellido2);
					localStorage.setItem("fecha", universitario.fecha);
					universitario.mostrar();
				} catch (e){
					var p = document.createElement("p");
					p.innerHTML = e.getMessage();
				}
			}
		});



			
	})
})();


