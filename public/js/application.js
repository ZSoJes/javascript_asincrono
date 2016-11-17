$(function(){

  // cuando se de click al boton nuevo comentario
  // se lanza la siguiente accion
  $("#new_comment_button").on("click",function(){

    $("#new_comment_button").hide();

    $("#comment_switch").html("<form id='new_comment' method='post' action='/upload'>"+ 
      "<textarea form='new_comment' name='comment' placeholder='Comentario'></textarea>"+
      "<input type='text' name='author' id='authorName' placeholder='Autor'>"+
       "<input type='submit' value='Enviar' id='check'> </form>");


    // cuando se abra el formulario y se presiona el boton
    // submit se hace la siguiente accion
  $("form#new_comment").on("submit",function(event){

    event.preventDefault();
     if( $("textarea").val() != "" && $("#authorName").val() != ""){
      var comment = $("textarea").val();
      var author = $("#authorName").val();
      var url = $("form#new_comment").attr( "action" );

      $("#new_comment_button").show();
      $("#comment_list").append("<li>" + comment + "<span class='author'>" + author + "</span></li>");
      
      // console.log($( "form#new_comment" ).serialize());
      $.post(url,$( "#new_comment" ).serialize()).done(function() {
        alert( "Informacion Guardada ");
      });
      
      $("#comment_switch").html("");
     }//cierre if
     else{
       $("#myModal").css("display","block");
     }//cierre if
  });//cierre submit

    $("span.close,body").click(function(){
      $("#myModal").css("display","none");
    });

  }); //cierre de on click 
});
