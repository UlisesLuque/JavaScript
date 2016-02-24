/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

(function(){
	window.addEventListener("load", function(){


		var btCrearUsuario = document.getElementById("crearUsuario");
		var btLimpiar = document.getElementById("limpiar");
		var inputNombre = document.getElementById("nombre");
		var inputApellido1 = document.getElementById("apellido1");
		var inputApellido2 = document.getElementById("apellido2");
		var inputDNI = document.getElementById("DNI");
		var inputSexo = document.getElementById("sexo");
		var inputMujer = inputSexo.childNodes[5];
		var inputHombre = inputSexo.childNodes[10];
		var inputCheckbox = document.getElementById("aceptar");

		var errorNombre = document.getElementById("errorNombre");
		var errorApellido1 = document.getElementById("errorApellido1");
		var errorApellido2 = document.getElementById("errorApellido2");
		var errorDNI = document.getElementById("errorDNI");
		var errorSexo = document.getElementById("errorSexo");
		var errorCheckbox = document.getElementById("errorCheckbox");

		var info = document.getElementById("info");
		var lista = document.getElementById("lista");

		function comprobarNombres(value){
			return /^[\wÁÉÍÓÚÑáéíóúñ\-\_]{4,}$/.test(value);
		}


		function comprobarDNI(dni){
			return /^\d{8}[a-zA-Z]$/.test(dni);
		}


		function comprobarRadio(){
			for (i=0; i<inputSexo.childNodes.length; i++){
				if(inputSexo.childNodes[i].checked){
					return true;
				}
			}
			return false;
		}


		function obtenerRadio(){
			for (i=0; i<inputSexo.childNodes.length; i++){
				if(inputSexo.childNodes[i].checked)
					return inputSexo.childNodes[i].value;
			}
			return false;
		}

		function comprobarCheckbox(checkbox){
			return checkbox.checked;
		}


		function comrprobarInputsNombres(nombre, input, span){
			if(comprobarNombres(nombre)){
				mostrarError(input, span, false);
				return true;
			} else {
				mostrarError(input, span, true, "Solo se admiten letras, números, \"_\" o \"-\". 4 mínimo.");
				return false;
			}
		}

		function comprobarInputDNI(dni){
			if(comprobarDNI(dni)){
				mostrarError(inputDNI, errorDNI, false);
				return true;
			} else {
				mostrarError(inputDNI, errorDNI, true, "DNI no válido.");
				return false;
			}

		}

		function comprobarInputRadio(){
			if(comprobarRadio()){
				mostrarError(inputMujer, errorSexo, false);
				mostrarError(inputHombre, errorSexo, false);
				return true;
			} else {
				mostrarError(inputMujer, errorSexo, true);
				mostrarError(inputHombre, errorSexo, true, "Debe seleccionar una opción.");
				return false;
			}
		}

		function comprobarInputCheckbox(){
			if(comprobarCheckbox(inputCheckbox)){
				mostrarError(inputCheckbox, errorCheckbox, false);
				return true;
			} else {
				mostrarError(inputCheckbox, errorCheckbox, true, "Debe aceptar las condiciones de uso.");
				return false;
			}
		}

		function comprobarDatos(nombre, apellido1, apellido2, dni){
			var ok = true;
			if(!comrprobarInputsNombres(nombre, inputHombre, errorNombre))
				ok = false;
			if(!comrprobarInputsNombres(apellido1, inputApellido1, errorApellido1))
				ok = false;
			if(!comrprobarInputsNombres(apellido2, inputApellido2, errorApellido2))
				ok = false;
			if(!comprobarInputDNI(dni))
				ok = false;
			if(!comprobarInputRadio())
				ok = false;
			if(!comprobarInputCheckbox())
				ok = false;
			return ok;
		}

		function setCookie(clave, valor, dias) {
		    var date = new Date();
		    date.setTime(date.getTime() + (dias*24*60*60*1000));
		    var expiracion = "expires="+date.toUTCString();
		    document.cookie = clave + "=" + valor + "; " + expiracion;
		} 

		function borrarCookie(clave){
			setCookie(clave, "", -1);
		}

		function mostrarError(input, span, bool, mensaje){
			var mensaje = mensaje || "";
			if(bool){
				input.className = "error";
				span.innerHTML = mensaje;
				span.className  = "error";
			} else {
				input.className = "";
				span.innerHTML = "";
				span.className  = "";
			}
		}

		function Usuario(nombre, apellido1, apellido2, dni){
			this.nombre = nombre;
			this.apellido1 = apellido1;
			this.apellido2 = apellido2;
			this.dni = dni;
			this.sexo = obtenerRadio();
		}

		Usuario.prototype.mostrar = function(){
			info.innerHTML = "Nombre: " +
			 this.nombre + ", Apellidos: " + this.apellido1 + " " +
			  this.apellido2 + ", DNI: " + this.dni + ", Sexo: " + this.sexo;
		}

		Usuario.prototype.crearListItem = function(){
			var li = document.createElement("li");
			li.innerHTML = "Nombre: " +
			 this.nombre + ", Apellidos: " + this.apellido1 + " " +
			  this.apellido2 + ", DNI: " + this.dni + ", Sexo: " + this.sexo;
			lista.appendChild(li);
		}


		inputNombre.addEventListener("blur", function(){
			comrprobarInputsNombres(inputNombre.value.trim(), inputNombre, errorNombre);
		});
		inputApellido1.addEventListener("blur", function(){
			comrprobarInputsNombres(inputApellido1.value.trim(), inputApellido1, errorApellido1);
		});

		inputApellido2.addEventListener("blur", function(){
			comrprobarInputsNombres(inputApellido2.value.trim(), inputApellido2, errorApellido2);
		});

		inputDNI.addEventListener("blur", function(){
			comprobarInputDNI(inputDNI.value.trim());
		});

		inputHombre.addEventListener("blur",comprobarInputRadio);

		inputMujer.addEventListener("blur",comprobarInputRadio);

		inputCheckbox.addEventListener("blur", comprobarInputCheckbox);


		inputNombre.addEventListener("focus", function(){
			mostrarError(inputNombre, errorNombre, false);
		});

		inputApellido1.addEventListener("focus", function(){
			mostrarError(inputApellido1, errorApellido1, false);
		});

		inputApellido2.addEventListener("focus", function(){
			mostrarError(inputApellido2, errorApellido2, false);
		});

		inputDNI.addEventListener("focus", function(){
			mostrarError(inputDNI, errorDNI, false);
		});

		inputMujer.addEventListener("focus",function(){
		 	mostrarError(inputHombre, errorSexo, false);
		 	mostrarError(inputMujer, errorSexo, false);
		});

		inputHombre.addEventListener("focus",function(){
		 	mostrarError(inputHombre, errorSexo, false);
		 	mostrarError(inputMujer, errorSexo, false);
		});

		inputCheckbox.addEventListener("focus", function(){
			mostrarError(inputCheckbox, errorCheckbox, false);
		});


		btLimpiar.addEventListener("click", function(){
			inputNombre.value = "";
			inputApellido1.value = "";
			inputApellido2.value = "";
			inputDNI.value = ""; 
			inputMujer.checked = false;
			inputHombre.checked = false;
			inputCheckbox.checked = false;
			info.innerHTML = "";
			mostrarError(inputNombre, errorNombre, false);
			mostrarError(inputApellido1, errorApellido1, false);
			mostrarError(inputApellido2, errorApellido2, false);
			mostrarError(inputDNI, errorDNI, false);
			mostrarError(inputHombre, errorSexo, false);
			mostrarError(inputMujer, errorSexo, false);
			mostrarError(inputCheckbox, errorCheckbox, false);
			borrarCookie("nombre");
			borrarCookie("apellido1");
			borrarCookie("apellido2");
			borrarCookie("dni");
			borrarCookie("sexo");
		});


		btCrearUsuario.addEventListener("click", function(){

			var nombre = inputNombre.value.trim();
			var apellido1 = inputApellido1.value.trim();
			var apellido2 = inputApellido2.value.trim();
			var dni = inputDNI.value.trim();

			if(comprobarDatos(nombre, apellido1, apellido2 ,dni)){
				console.log(inputSexo)
				var usuario = new Usuario(nombre, apellido1, apellido2, dni);
				setCookie("nombre", usuario.nombre, 10);
				setCookie("apellido1", usuario.apellido1, 10);
				setCookie("apellido2", usuario.apellido2, 10);
				setCookie("dni", usuario.dni, 10);
				setCookie("sexo", usuario.sexo, 10);
				usuario.mostrar();
				usuario.crearListItem();
			}
		});
	});
})();


