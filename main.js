$(document).ready(function() {    
    $('form').on('submit', function(e) { //add um elemento através da função .on /chama o e.preventDefault pra prevenir que atualize a página assim que for enviado.
      e.preventDefault();
      
      const listaTarefa = $('#texto_tarefa').val();
      const novoElemento = $('<li></li>');
      
      $(novoElemento).html(listaTarefa); //pega o elemento e add entre o <li> da const novoElemento
      $(novoElemento).appendTo('ul');
      $('#texto_tarefa').val('');
      $("li").click(function () {
         $(this).css("text-decoration", "line-through");
      })
   })
   
   
})
