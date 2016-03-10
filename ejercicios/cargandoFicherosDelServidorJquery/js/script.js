$(function(){
    var inputRecurso = $("#recurso");
    var botonMostrar = $("#enviar"); 
    var textContenido = $("#contenidos");
    var textPeticion = $("#estados");
    var limpiar = $("#limpiar");

      inputRecurso.val($(location).attr('href'));

  botonMostrar.on('click', function() {
    $.get(inputRecurso.val())
      .done(function(data) {
        textContenido.text(data);
        textPeticion.text(textPeticion.html() + 'Done\n');
      })
      .fail(function() {
        textContenido.text('Error! La página solicitada no se ha podido encontrar.');
        textPeticion.text(textPeticion.html() + 'Error\n');
      })
      .always(function() {
        textPeticion.text(textPeticion.html() + 'Finished\n');
      });
  });

  limpiar.on('click', function() {
    textContenido.text('');
    textPeticion.text('');
  });
  
})




