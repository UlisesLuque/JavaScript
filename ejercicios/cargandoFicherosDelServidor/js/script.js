(function(){

  window.addEventListener("load", function(){

    var READY_STATE_UNINITIALIZED=0; 
    var READY_STATE_LOADING=1; 
    var READY_STATE_LOADED=2;
    var READY_STATE_INTERACTIVE=3; 
    var READY_STATE_COMPLETE=4;

    var peticion_http;

    var estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];

    var inputURL = document.getElementById("recurso");
    var botonMostrar = document.getElementById("enviar");
    var textContenido = document.getElementById("contenidos");
    var textCabeceras = document.getElementById("cabeceras");
    var textPeticion = document.getElementById("estados");
    var textCodigoEstado = document.getElementById("codigo");

    function cargaContenido(url, metodo, funcion) {
      peticion_http = new XMLHttpRequest();
      if(peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
      }
    }

    function muestraContenido(input) {
      textPeticion.innerHTML += peticion_http.readyState + " --> " + estadosPosibles[peticion_http.readyState] + "<br/>";
      if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
          input.innerHTML = peticion_http.responseText;
        }
        textCabeceras.innerHTML = peticion_http.getAllResponseHeaders();
        textCodigoEstado.innerHTML = peticion_http.status + "<br/>";
        textCodigoEstado.innerHTML += peticion_http.statusText;
      }
    }
    
    botonMostrar.addEventListener("click", function(){
        var url = inputURL.value;
        cargaContenido(url, "get", function(){muestraContenido(textContenido)});
    });


    inputURL.value = location.href;
    cargaContenido(inputURL.value, "get", function(){muestraContenido(textContenido)})

  });

})();