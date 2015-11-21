/*
 * Implementa mediante javaScript el ejercicio primos mediante closure.

	Han de estar como elementos privados:

	    vector de números primos
	    acumulador de números primos
	    esPrimos () que está en el foro

	Recuerda que:

	    No podéis crear ninguna variable global (function(){...})();
	    El resultado se mostrará en una ventana nueva.

	 autor: Ulises Luque Páez
 */

(function(){
	window.addEventListener("load", function(){
		var eMnsj = document.getElementById('mensaje');
		eMnsj.innerHTML = mensaje + resultado;
	});

	var arrPrimos = [];
	var max = 100;
	var mensaje= "La suma de los número primos del 1 al 100 es: ";
	var resultado = 0;
	obtenerPrimos();
	obtSuma();

	function obtenerPrimos(){
		for(var i=1; i<max; i++){
			if(esPrimo(i , i-1))
				arrPrimos.push(i);
				
		}
	}

	function esPrimo(numero, anterior){
		if (anterior === 1)
			return true;
		if(numero%anterior === 0)
			return false;
		return esPrimo(numero, anterior-1);
	}

	function obtSuma(){
		for(var i=0; i<arrPrimos.length; i++)
			resultado += arrPrimos[i];
	}
})();

