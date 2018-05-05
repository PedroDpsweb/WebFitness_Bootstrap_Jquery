$(function() {
    //leer y parsear
    $.getJSON( "https://rawgit.com/urbinapro/news/master/data/names.json", function( jsonObject  ) {
      pintar(jsonObject );
    });
    
  });

  function pintar(json){
    $.each( json, function( i, noticia ) {
      $("#masnoticias").append( "<li id='" + i + "'>" + noticia.titulo+ "</li>" );
    });  
  }