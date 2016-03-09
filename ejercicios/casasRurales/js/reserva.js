/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */

$(function(){

	var inputNombre = $("#nombre");
	var inputApellido1 = $("#apellido1");
	var inputApellido2 = $("#apellido2");
	var inputCorreo = $("#correo");
	var inputTelefono = $("#telefono");
	var inputNumeroPersonas = $("#numeroPersonas");
	var inputCheckbox = $("#checkbox");
	var inputFechaEntrada = $("#fechaEntrada");
	var inputFechaSalida = $("#fechaSalida");

	var errorNombre = $("#errorNombre");
	var errorApellido1 = $("#errorApellido1");
	var errorApellido2 = $("#errorApellido2");
	var errorCorreo = $("#errorCorreo");
	var errorTelefono = $("#errorTelefono");
	var errorNumeroPersonas = $("#errorNumeroPersonas");
	var errorCheckbox = $("#errorCheckbox");
	var errorFechaEntrada = $("#errorFechaEntrada");
	var errorFechaSalida = $("#errorFechaSalida");

	function comprobarNombre(value){
		return /^[\wÁÉÍÓÚÑáéíóúñ]{3,}$/.test(value);
	}

	function comprobarCorreo(value){
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value);
	}

	function comprobarTelefono(value){
		return /^[957]\d{8}$/.test(value);
	}

	function comprobarNumeroPersonas(numero){
		return (numero > 0 && numero < 5)
	}

	function comprobarFecha(fecha){
		return fecha != "";
	}

	function comprobarCheckbox(checkbox){
		return inputCheckbox.prop("checked");
	}


	function comprobarInputsNombre(nombre, input, span){
		if(comprobarNombre(nombre)){
			mostrarError(input, span, false);
			return true;
		} else {
			mostrarError(input, span, true, "Cuatro letras mínimo.");
			return false;
		}
	}

	function comprobarInputCorreo(correo){
		if(comprobarCorreo(correo)){
			mostrarError(inputCorreo, errorCorreo, false);
			return true;
		} else {
			mostrarError(inputCorreo, errorCorreo, true, "Correo no válido.");
			return false;
		}
	}

	function comprobarInputTelefono(telefono){
		if(comprobarTelefono(telefono)){
			mostrarError(inputTelefono, errorTelefono, false);
			return true;
		} else {
			mostrarError(inputTelefono, errorTelefono, true, "Teléfono no válido.");
			return false;
		}
	}

	function comprobarInputNumeroPersonas(numeroPersonas){
		if(comprobarNumeroPersonas(numeroPersonas)){
			mostrarError(inputNumeroPersonas, errorNumeroPersonas, false);
			return true;
		} else {
			mostrarError(inputNumeroPersonas, errorNumeroPersonas, true, "Solo se admite entre 1 y 5 personas.");
			return false;
		}
	}

	function comprobarInputsFecha(fecha, input, span){
		if(comprobarFecha(fecha)){
			mostrarError(input, span, false);
			return true;
		} else {
			mostrarError(input, span, true, "Debe elegir una fecha.");
			return false;
		}
	}

	function comprobarInputCheckbox(){
		if(comprobarCheckbox()){
			mostrarError(inputCheckbox, errorCheckbox, false);
			return true;
		} else {
			mostrarError(inputCheckbox, errorCheckbox, true, "Debe aceptar las condiciones.");
			return false;
		}
	}

	function setCookie(clave, valor, dias) {
	    var date = new Date();
	    date.setTime(date.getTime() + (dias*24*60*60*1000));
	    var expiracion = "expiracion="+date.toUTCString();
	    document.cookie = clave + "=" + valor + "; " + expiracion;
	} 

	function comprobarDatos(nombre, apellido1, apellido2, correo, telefono, numeroPersonas, fechaEntrada, fechaSalida){
		var ok = true;
		if(!comprobarInputsNombre(nombre, inputNombre, errorNombre))
			ok = false;
		if(!comprobarInputsNombre(apellido1, inputApellido1, errorApellido1))
			ok = false;
		if(!comprobarInputsNombre(apellido2, inputApellido2, errorApellido2))
			ok = false;
		if(!comprobarInputCorreo(correo))
			ok = false;
		if(!comprobarInputTelefono(telefono))
			ok = false;
		if(!comprobarInputNumeroPersonas(numeroPersonas))
			ok = false;
		if(!comprobarInputCheckbox())
			ok = false;
		if(!comprobarInputsFecha(fechaEntrada, inputFechaEntrada, errorFechaEntrada))
			ok = false;
		if(!comprobarInputsFecha(fechaSalida, inputFechaSalida, errorFechaSalida))
			ok = false
		return ok;
	}

	function mostrarError(input, span, bool, mensaje){
		var mensaje = mensaje || "";
		if(bool){
			input.addClass("error");
			span.html(mensaje);
			span.addClass("error");
		} else {
			input.removeClass("error");
			span.html("");
			span.removeClass("error");
		}
	}

	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '<Ant',
		nextText: 'Sig>',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);

	$( "#fechaEntrada" ).datepicker({
	  changeMonth: true,
	  dateFormat: "dd-mm-yy",
	  numberOfMonths: 1,
	  minDate: +1, 
	  onClose: function( selectedDate ) {
	  	if(selectedDate){
	  		fecha = selectedDate.split("-");
	    	$( "#fechaSalida" ).datepicker( "option", "minDate", (parseInt(fecha[0])+1) + "-" + fecha[1] + "-" + fecha[2]);
	  	}
	  }
	});
	$( "#fechaSalida" ).datepicker({
	  changeMonth: true,
	  dateFormat: "dd-mm-yy",
	  numberOfMonths: 1,
	  maxDate: 30,
	  minDate: +2, 
	  onClose: function( selectedDate ) {
	  	if(selectedDate){
	  		fecha = selectedDate.split("-");
	    	$( "#fechaEntrada" ).datepicker( "option", "maxDate", (parseInt(fecha[0])-1) + "-" + fecha[1] + "-" + fecha[2]);
	  	}
	  }
	});


	inputNombre.on("blur", function(){
		comprobarInputsNombre(inputNombre.val().trim(), inputNombre ,errorNombre);
	})

	inputApellido1.on("blur", function(){
		comprobarInputsNombre(inputApellido1.val().trim(), inputApellido1 ,errorApellido1);
	})

	inputApellido2.on("blur", function(){
		comprobarInputsNombre(inputApellido2.val().trim(), inputApellido2 ,errorApellido2);
	})

	inputCorreo.on("blur", function(){
		comprobarInputCorreo(inputCorreo.val().trim());
	})

	inputTelefono.on("blur", function(){
		comprobarInputTelefono(inputTelefono.val().trim());
	})

	inputNumeroPersonas.on("blur", function(){
		comprobarInputNumeroPersonas(inputNumeroPersonas.val().trim());
	})

	inputFechaEntrada.on("blur", function(){
		comprobarInputsFecha(inputFechaEntrada.val(), inputFechaEntrada, errorFechaEntrada);
	});

	inputFechaSalida.on("blur", function(){
		comprobarInputsFecha(inputFechaSalida.val(), inputFechaSalida, errorFechaSalida)
	});

	inputCheckbox.on("blur", comprobarInputCheckbox);

	inputNombre.on("focus", function(){
		mostrarError(inputNombre, errorNombre, false)
	})

	inputApellido1.on("focus", function(){
		mostrarError(inputApellido1, errorApellido1, false)
	})

	inputApellido2.on("focus", function(){
		mostrarError(inputApellido2, errorApellido2, false)
	})

	inputCorreo.on("focus", function(){
		mostrarError(inputCorreo, errorCorreo, false)
	})

	inputTelefono.on("focus", function(){
		mostrarError(inputTelefono, errorTelefono, false)
	})

	inputNumeroPersonas.on("focus", function(){
		mostrarError(inputNumeroPersonas, errorNumeroPersonas, false)
	})

	inputCheckbox.on("focus", function(){
		mostrarError(inputCheckbox, errorCheckbox, false)
	});

	inputFechaEntrada.on("focus", function(){
		mostrarError(inputFechaEntrada, errorFechaEntrada, false)
	});

	inputFechaSalida.on("focus", function(){
		mostrarError(inputFechaSalida, errorFechaSalida, false)
	});


	$("#enviar").on("click", function(event){
		event.preventDefault();
		var nombre = inputNombre.val().trim();
		var apellido1 = inputApellido1.val().trim();
		var apellido2 = inputApellido2.val().trim();
		var correo = inputCorreo.val().trim();
		var telefono = inputTelefono.val().trim();
		var numeroPersonas = inputNumeroPersonas.val();
		var fechaEntrada = inputFechaEntrada.val();
		var fechaSalida = inputFechaSalida.val();
		if(comprobarDatos(nombre, apellido1, apellido2, correo, telefono, numeroPersonas, fechaEntrada, fechaSalida)){
			setCookie("nombre", nombre, 365);
			setCookie("apellido1", apellido1, 365);
			setCookie("apellido2", apellido2, 365);
			setCookie("correo", correo, 365);
			setCookie("telefono", telefono, 365);
			setCookie("numeroPersonas", numeroPersonas, 365);
			setCookie("fechaEntrada", numeroPersonas, 365);
			setCookie("fechaSalida", numeroPersonas, 365);
		}
	})
});