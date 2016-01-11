/*
 *	autor: Ulises Luque Páez
 * 	version: 1.0
 */


function comprobarNombre(value){
	return /^\w{3,}$/.test(value);
}

function comprobarFecha(fecha){
	if(!(/^(0?[1-9]|[1-2][0-9]|3[0-1])[\/](0[1-9]|1[0-2])[\/](19[0-9][0-9]|200[0-9]|201[0-5]$)/.test(fecha)))
		return false;
	var arrayFecha = fecha.split("/");
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

function comprobarDNI(value){
	var letras = ['T','R','W','A','G','M','Y','F','P','D','X', 'B','N','J','Z','S','Q','H','L','C','K','E','T'];
	if(!(/^\d{8}[a-zA-Z]$/.test(value)))
		return false;
	if(value.toUpperCase().charAt(8) != letras[(value.substring(0, 8)%23)])
		return false;
	return true;
}


function comprobarCuenta(value){
    var banco = value.substring(0,4);
    var sucursal = value.substring(4,8);
    var dc = value.substring(8,10);
    var cuenta=value.substring(10,20);
    var CCC = banco+sucursal+dc+cuenta;
    if (!/^[0-9]{20}$/.test(banco+sucursal+dc+cuenta)){
        return false;
    }
    else
    {
        valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
        control = 0;
        for (i=0; i<=9; i++)
        control += parseInt(cuenta.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) 
        	control = 0;
        else if (control == 10) 
        	control = 1;
        if(control!=parseInt(dc.charAt(1))) {
            return false;
        }
        control=0;
        var zbs="00"+banco+sucursal;
        for (i=0; i<=9; i++)
            control += parseInt(zbs.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
            else if (control == 10) control = 1;
        if(control!=parseInt(dc.charAt(0))) {
            return false;
        }
        return true;
    }
}

function comprobarTelefono(value){
	return /^[9678]\d{8}$/.test(value);
}

function comprobarURL(value){
	return /^((http|https)\:\/\/)?(www.)?[a-z0-9\.-]+\.[a-z]{2,4}/.test(value)
}

function comprobarRadio(input){
	for (i=0; i<input.childNodes.length; i++){
		if(input.childNodes[i].checked)
			return true;
	}
	return false;
}

function comprobarSelect(input){
	indice = input.selectedIndex;
	if( indice == null || indice == 0 ) {
		return false;
	}
	return true;
}

function comprobarCheckBoxes(checkBoxes){
	for(i=0; i<checkBoxes.length; i++){
		if(checkBoxes[i].checked){
			return true;
		}
		return false;
	}
}

function comprobarCorreo(value){
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value);
}


window.addEventListener("load", function(){
	function comprobarDatos(){
		var ok = true;
		if(!comprobarURL(inputCurriculum.value)){
			inputCurriculum.className="error";
			inputCurriculum.nextSibling.innerHTML = "Dirección no válida.";
			inputCurriculum.focus();
			ok = false;
		}
		if(!comprobarSelect(selectCirculacion)){
			selectCirculacion.className = "error";
			selectCirculacion.nextSibling.nextSibling.innerHTML = "Elige una opción.";
			ok = false;
		}
		if(!comprobarRadio(radioSexo)){
			radioSexo.nextSibling.nextSibling.className = "error";
			radioSexo.nextSibling.nextSibling.innerHTML = "Elige una opción.";
			console.log(radioSexo.id);
			ok = false;
		}
		if(!comprobarCheckBoxes([checkBoxIngles,checkBoxInformatica,checkBoxAdministracion])){
			checkBoxIngles.className = "error";
			checkBoxInformatica.className="error";
			checkBoxAdministracion.className="error";
			checkBoxAdministracion.nextSibling.nextSibling.innerHTML = "Elige una opción.";
			ok = false;
		}
		if(!comprobarTelefono(inputTelefono.value)){
			inputTelefono.className="error";
			inputTelefono.nextSibling.innerHTML = "Telefono no válido.";
			inputTelefono.focus();
			ok = false;
		}
		if(!comprobarCuenta(inputCuenta.value)){
			inputCuenta.className="error";
			inputCuenta.nextSibling.innerHTML = "Cuenta no válida.";
			inputCuenta.focus();
			ok = false;
		}
		if(!comprobarDNI(inputDNI.value)){
			inputDNI.className="error";
			inputDNI.nextSibling.innerHTML = "DNI no válido.";
			inputDNI.focus();
			ok = false;
		}
		if(!comprobarFecha(inputFecha.value)){
			inputFecha.className="error";
			inputFecha.nextSibling.innerHTML = "Fecha no válida.";
			inputFecha.focus();
			ok = false;
		}
		if(!comprobarNombre(inputNombre.value)){
			inputNombre.className="error";
			inputNombre.nextSibling.innerHTML = "Nombre no válido.";
			inputNombre.focus();
			ok = false;
		}
		if(!comprobarCorreo(inputCorreo.value)){
			inputCorreo.className="error";
			inputCorreo.nextSibling.innerHTML = "Nombre no válido.";
			inputCorreo.focus();
			ok = false;
		}

		return ok;
	}
	
	for(i=0; i<document.forms[0].length; i++){
		switch (document.forms[0][i].id){
			case "circulacion":
				document.forms[0][i].addEventListener("focus", function(){
					this.className="";
					this.nextSibling.nextSibling.innerHTML ="";
				})
				break;
			case "sexo":
				document.forms[0][i].addEventListener("click", function(){
					this.className="";
					this.nextSibling.nextSibling.innerHTML = "";
				})
				break;
			case "ingles":
			case "informatica":
			case "administracion":
				document.forms[0][i].addEventListener("click", function(){
					checkBoxIngles.className="";
					checkBoxInformatica.className="";
					checkBoxAdministracion.className="";
					checkBoxAdministracion.nextSibling.nextSibling.innerHTML="";
				})
				break;
			default:
				document.forms[0][i].addEventListener("change", function(){
					this.className="";
					this.nextSibling.innerHTML = "";
				})
				break;
		}

	}

	var inputNombre = document.getElementById("nombre");
	var inputFecha = document.getElementById("fecha");
	var inputDNI = document.getElementById("dni");
	var inputCorreo = document.getElementById("correo");
	var inputCuenta = document.getElementById("cuenta");
	var inputTelefono = document.getElementById("telefono");
	var checkBoxIngles = document.getElementById("ingles");
	var checkBoxInformatica = document.getElementById("informatica");
	var checkBoxAdministracion = document.getElementById("administracion");
	var radioSexo = document.getElementById("sexo");
	var selectCirculacion = document.getElementById("circulacion");
	var inputCurriculum = document.getElementById("curriculum");
	var inputEnviar = document.getElementById("enviar");

	inputNombre.addEventListener("blur", function(){
		if(!comprobarNombre(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "Nombre no válido.";
			this.focus();
		}
	})
	inputFecha.addEventListener("blur", function(){
		if(!comprobarFecha(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "Fecha no válida.";
			this.focus();
		}
	})
	inputDNI.addEventListener("blur", function(){
		if(!comprobarDNI(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "DNI no válido.";
			this.focus();
		}
	})
	inputCuenta.addEventListener("blur", function(){
		if(!comprobarCuenta(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "Cuenta no válida.";
			this.focus();
		}
	})
	inputCorreo.addEventListener("blur", function(){
		if(!comprobarCorreo(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "Dirección no válida.";
			this.focus();
		}
	})
	inputTelefono.addEventListener("blur", function(){
		if(!comprobarTelefono(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "Telefono no válido.";
			this.focus();
		}
	})

	inputCurriculum.addEventListener("blur", function(){
		if(!comprobarURL(this.value)){
			this.className="error";
			this.nextSibling.innerHTML = "Dirección no válida.";
			this.focus();
		}
	})
	document.forms[0].addEventListener("submit", comprobarDatos);
})
