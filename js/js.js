$(function () {

    $(".cargamas").click(function () {

        $.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/d0ab4a08/json/json.json", function (json) {
            
        console.log(json);
        $.each(json, function (i, noticia) {
                var titulo=noticia.titulo;
                alert(titulo);
                var imagen=noticia.imagen;
                var desc=noticia.descripcion;

                $("#masnoticias").append('"<div class="row "><div class="col-sm-4 miniatura"><a href="not-cardio.html"><img class="img-fluid " src='+imagen+' class="rounded " alt="Cinque Terre "></a></div><div class="col-sm-8" style="background-color:silver; "><div class="desc"><h2>No todo es cardio</h2><p>Descripcion perso.</p></div><div class="row"><div class="col-sm-4 text center"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></i></a><a href="#"><i class="fab fa-twitter-square fa-2x"></i></i></a><a href="#"><i class="fab fa-google-plus-square fa-2x"></i></i></a></div></div></div></div>"')


;

                

            });
        });

        var popup = $('#popup');
        popup.css({
            'left': ($(window).width() / 2 - $(popup).width() / 2) + 'px',
            'top': ($(window).height() / 2 - $(popup).height() / 2) + 'px'
        });

    });
});






/*function pintar(json) {
    $.each( json, function( i, obj ) {
    $("#masnoticias").append(obj.noticias.noticia.titulo)
    
})};*/


