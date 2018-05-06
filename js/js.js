$(function () {

    $(".cargamas").click(function () {
        pintar();
        // $.getJSON( "https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/3754ebc6/json/jsonprueba.json", function( jsonObject  ) {
        //    pintarjson(jsonObject );
        //});

        var popup = $('#popup');
        popup.css({ 
            'left': ($(window).width() / 2 - $(popup).width() / 2) + 'px', 
            'top': ($(window).height() / 2 - $(popup).height() / 2) + 'px'
        });
        
    });



});










function pintar() {
    //$.each( json, function( i, obj ) {
    $("#masnoticias").append('<div class="container-fluid secundario"><div class="row"><div class="col-sm-4 style"><img class="img-fluid" src="img/n2.jpg" class="rounded" alt="Cinque Terre"></div><div class="col-sm-8" style="background-color:pink; "><h2></h2><p></p></div></div></div>')
    // }); 
}
/*function pintarjson(json){
    $.each( json, function( i,empleado ) {
        var prueba= empleado.firstName;
        alert(prueba);
      $("#masnoticias").append(prueba);
    });  
  }*/

 