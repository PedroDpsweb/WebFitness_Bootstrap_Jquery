$(function () {

    var activado = true;


    $(window).scroll(function () {
        if ($(document).scrollTop() + window.innerHeight >= document.getElementsByTagName("body")[0].scrollHeight) {
            //logic when user has scrolled to the bottom of the page
            alert("tamoh redy");
            if (activado == true) {
                cargado();
            }
        }
    });






    $("#switch").click(function () {
        if (activado == true) {
            $("#switch").html('<button type="button" class="btn btn-danger carga"></button>');
            activado = false;
        } else {
            $("#switch").html('<button type="button" class="btn btn-success carga"></button>');
            activado = true;
        }
    });

    $(".cargamas").click(function () {

        $.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/e125e4d7/json/json.json", function (json) {

            console.log(json);
            $.each(json, function (i, noticia) {
                var titulo = noticia.titulo;
                var imagen = noticia.imagen;
                var desc = noticia.descripcion;

                $("#masnoticias").append('"<div class="row "><div class="col-sm-4 miniatura"><a href="not-cardio.html"><img class="img-fluid " src=' + imagen + ' class="rounded " alt="Cinque Terre "></a></div><div class="col-sm-8" style="background-color:silver; "><div class="desc"><h2>' + titulo + '</h2><p>' + desc + '</p></div><div class="row"><div class="col-sm-4 text center"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></i></a><a href="#"><i class="fab fa-twitter-square fa-2x"></i></i></a><a href="#"><i class="fab fa-google-plus-square fa-2x"></i></i></a></div></div></div></div>"')


                ;



            });
        });

        var popup = $('#popup');
        popup.css({
            'left': ($(window).width() / 2 - $(popup).width() / 2) + 'px',
            'top': ($(window).height() / 2 - $(popup).height() / 2) + 'px'
        });

    });

    //coso


    function cargado() {



        $.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/e125e4d7/json/json.json", function (json) {

            console.log(json);
            $.each(json, function (i, noticia) {
                var titulo = noticia.titulo;
                var imagen = noticia.imagen;
                var desc = noticia.descripcion;

                $("#masnoticias").append('"<div class="row "><div class="col-sm-4 miniatura"><a href="not-cardio.html"><img class="img-fluid " src=' + imagen + ' class="rounded " alt="Cinque Terre "></a></div><div class="col-sm-8" style="background-color:silver; "><div class="desc"><h2>' + titulo + '</h2><p>' + desc + '</p></div><div class="row"><div class="col-sm-4 text center"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></i></a><a href="#"><i class="fab fa-twitter-square fa-2x"></i></i></a><a href="#"><i class="fab fa-google-plus-square fa-2x"></i></i></a></div></div></div></div>"')


                ;



            });
        });

        var popup = $('#popup');
        popup.css({
            'left': ($(window).width() / 2 - $(popup).width() / 2) + 'px',
            'top': ($(window).height() / 2 - $(popup).height() / 2) + 'px'
        });




    }






});