function abrirVentana2() {
	var ventanaNueva = window.open("", "Nueva ventana", "resizable=no");
	ventanaNueva.document.open();
	ventanaNueva.document.write("<html>"+
						"<head>" +
							"<meta charset=\"UTF-8\">" +
							"<title>Tarea3</title>" +
							"<script type=\"text/javascript\" src=\"../js/Tarea3_2.js\"></script>" +
						"</head>" +
						"<body>" +
							"<h1>Ventana Nueva</h1>" +
						"</body>" +
					"</html>");
	ventanaNueva.document.close();
	
	

}

function abrirVentana3(){
	entanaGranCapitan = window.open("http://www.iesgrancapitan.org/portal/", "" , "width=800, height=600");
}


window.addEventListener("load", function(){
	abrirVentana2();
	abrirVentana3();

});
