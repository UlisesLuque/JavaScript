window.addEventListener("load", function(){
	var html = document.getElementsByTagName("html")[0];
	// var html  = document.chlidNodes[1];
	var body = html.lastChild;
	var head = html.childNodes[0];
	var numHijosBody = body.childNodes.length;
	var parrafo = document.createElement("p");
	parrafo.innerHTML = "hola a todos";
	body.appendChild(parrafo);
	var lista = document.createElement("ol");
	var elementoLista1 = document.createElement("li");
	elementoLista1.innerHTML = "Ulises Luque Páez";
	var elementoLista2 = document.createElement("li");
	elementoLista2.innerHTML = "Ulises Luque Páez";
	lista.appendChild(elementoLista1);
	lista.appendChild(elementoLista2);
	body.appendChild(lista);
	body.removeChild(body.childNodes[3]);
});