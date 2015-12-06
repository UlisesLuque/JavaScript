(function(){

	function calcularEdad(fecha){
		var arrayFecha = fecha.split("/");
		var dia = parseInt(arrayFecha[0]);
		var mes = parseInt(arrayFecha[1])-1;
		var anio = parseInt(arrayFecha[2]);
		var fecha = new Date(anio, mes, dia);
		var fechaActual = new Date();
		var edadMs = parseInt(fechaActual - fecha);
		var edad = new Date(0, 0, 1, 0, 0, 0, edadMs);
		return edad.getYear() + " años, " + edad.getMonth() + " meses,  " + (edad.getDate()-1) + " dias.";
	}

	function GatoMuertoException(){
		this.message = "El gato está muerto.";
	}

	function Gato(nombre, fecha, raza, peso){
		var patron = new RegExp("^(0?[1-9]|[1-2][0-9]|3[0-1])[\/](0[1-9]|1[0-2])[\/](19[0-9][0-9]|20[0-1][0-5]$)");
		if(nombre === "")
			throw new window.opener.campoRequeridoException("nombreVacioException");
		if(fecha === "")
			throw {name:"fechaVaciaException", message:"fecha requerida"}
		if(!window.opener.comprobarFecha(fecha))
			throw {name:"fechaInvalidaException", message:"fecha no válida"}
		if(!patron.test(fecha))
			throw {name:"formatoFechaException", message:"Formato de fecha inválido."}
		if(peso === "")
			throw new window.opener.campoRequeridoException("pesoVacioException");
		if(isNaN(peso) || peso < 1)
			throw {name:"pesoInvalidoException", message:"peso inválido."}
		this.nombre = nombre;
		this.fecha = fecha;
		this.raza = raza;
		this.peso = peso;
		this.vivo = true;
	}


	Gato.prototype.comer = function(){
		if(this.vivo){
			this.peso += 1;
			if(this.peso > 14){
				this.vivo = false;
				throw new GatoMuertoException();
			}
		} else
			throw new GatoMuertoException();
	}

	Gato.prototype.jugar = function(){
		if(this.vivo){
			this.peso -= 1;
			if(this.peso < 1){
				this.vivo = false;
				throw new GatoMuertoException();
			}	
		} else
			throw new GatoMuertoException();
	}

	Gato.prototype.dormir = function(){
		if(!this.vivo)
			throw new GatoMuertoException();
	}

	
	window.addEventListener("load", function(){
		var nombre = opener.document.getElementById('nombre').value;
		var fecha = opener.document.getElementById('fecha').value;
		var raza = opener.document.getElementById('raza').value;
		var peso = parseInt(opener.document.getElementById('peso').value);
		var botonComer = document.getElementById('comer');
		var botonDormir = document.getElementById('dormir');
		var botonJugar = document.getElementById('jugar');
		var botonEdad = document.getElementById("edad");
		var imagen = document.getElementById('imagen');
		var eNombre = document.getElementById('nombre');
		var eFecha = document.getElementById('fecha');
		var eRaza = document.getElementById('raza');
		var ePeso = document.getElementById('peso');
		var eMsj = document.getElementById("mensaje");
		eNombre.innerHTML = "Nombre: " + nombre;
		eFecha.innerHTML = "Fecha: " + fecha;
		eRaza.innerHTML = "Raza: " + raza;
		ePeso.innerHTML = "Peso: " + peso;
		var gato = new Gato(nombre, fecha, raza, peso);
		botonComer.addEventListener("click", function(){
			try {
				gato.comer();
				imagen.style.background = "url(img/comer.jpg)";
				imagen.style.backgroundSize = "cover";
				ePeso.innerHTML = "Peso " + gato.peso;
			} catch (e) {
				imagen.style.background = "url(img/muerto.jpg)";
				imagen.style.backgroundSize = "cover";
				eMsj.innerHTML = e.message;
			}
			
		});
		botonDormir.addEventListener("click", function(){
			try {
				gato.dormir();
				imagen.style.background = "url(img/dormir.jpg)";
				imagen.style.backgroundSize = "cover";
			} catch (e) {
				imagen.style.background = "url(img/muerto.jpg)";
				imagen.style.backgroundSize = "cover";
				eMsj.innerHTML = e.message;
			}
			
		});
		botonJugar.addEventListener("click", function(){
			try{
				gato.jugar();
				imagen.style.background = "url(img/jugar.jpg)";
				imagen.style.backgroundSize = "cover";
				ePeso.innerHTML = "Peso " + gato.peso;
			} catch (e) {
				imagen.style.background = "url(img/muerto.jpg)";
				imagen.style.backgroundSize = "cover";
				eMsj.innerHTML = e.message;
			}
			
		});

		botonEdad.addEventListener("click", function(){
			try {
				if(gato.vivo){
					var edad = calcularEdad(gato.fecha);
					eMsj.innerHTML = "Su edad es: " + edad;
				} else
					throw new GatoMuertoException();
			} catch (e) {
				eMsj.innerHTML=e.message;
			}
		})		
	});
})();

