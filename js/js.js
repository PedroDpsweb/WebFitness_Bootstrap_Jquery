$(function () {

    var activado = true;
    var carga1 = true;
    var carga2 = true;


    $(window).scroll(function () {
        if ($(document).scrollTop() + window.innerHeight + 200 >= document.getElementsByTagName("body")[0].scrollHeight) {
            //logic when user has scrolled to the bottom of the page
            if (activado == true) {
                if (carga1 == true) {
                    cargado1();
                } else if (carga2 == true) {
                    cargado2();
                } else if (carga2 == false) {

                    $(".cargamas").css("display", "none");

                }

            }
        }
    });

    $(".noscroll").click(function () {
        if (activado == false) {
            if (carga1 == true) {
                cargado1();
            } else if (carga2 == true) {
                cargado2();
                $(".cargamas").css("display", "none");
            }

            



        }
    });








    $("#switch").click(function () {
        if (activado == true) {
            $("#switch").html('<button type="button" class="btn btn-danger carga"></button>');
            activado = false;
            $("#myModal").modal({
                backdrop: true
            });

        } else {
            $("#switch").html('<button type="button" class="btn btn-success carga"></button>');
            activado = true;
            $("#myModal1").modal({
                backdrop: true
            });
        }
    });

    $(".cargamas").click(function () {

        console.log(json);
        $.each(json, function (i, noticia) {
            var titulo = noticia.titulo;
            var imagen = noticia.imagen;
            var desc = noticia.descripcion;

            $("#masnoticias").append('"<div class="row "><div class="col-sm-4 miniatura"><a href="not-cardio.html"><img class="img-fluid " src=' + imagen + ' class="rounded " alt="Cinque Terre "></a></div><div class="col-sm-8" style="background-color:silver; "><div class="desc"><h2>' + titulo + '</h2><p>' + desc + '</p></div><div class="row"><div class="col-sm-4 text center"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></i></a><a href="#"><i class="fab fa-twitter-square fa-2x"></i></i></a><a href="#"><i class="fab fa-google-plus-square fa-2x"></i></i></a></div></div></div></div>"')


            ;

            carga1: false;

        });


        $.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/e125e4d7/json/json.json", function (json) {

            console.log(json);
            $.each(json, function (i, noticia) {
                var titulo = noticia.titulo;
                var imagen = noticia.imagen;
                var desc = noticia.descripcion;

                $("#masnoticias").append('"<div class="row "><div class="col-sm-4 miniatura"><a href="not-cardio.html"><img class="img-fluid " src=' + imagen + ' class="rounded " alt="Cinque Terre "></a></div><div class="col-sm-8" style="background-color:silver; "><div class="desc"><h2>' + titulo + '</h2><p>' + desc + '</p></div><div class="row"><div class="col-sm-4 text center"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></i></a><a href="#"><i class="fab fa-twitter-square fa-2x"></i></i></a><a href="#"><i class="fab fa-google-plus-square fa-2x"></i></i></a></div></div></div></div>"')


                ;



            });

            carga2 = false;
        });


        /*$.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/e125e4d7/json/json.json", function (json) {

            


        });

        */

        var popup = $('#popup');
        popup.css({
            'left': ($(window).width() / 2 - $(popup).width() / 2) + 'px',
            'top': ($(window).height() / 2 - $(popup).height() / 2) + 'px'
        });

    });

    //coso


    function cargado1() {

        carga1 = false;

        //json1
        $.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/4b44d6d2/json/json.json", function (json) {

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

    function cargado2() {

        carga2 = false;
        //json2
        $.getJSON("https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/e8232584/json/json2.json", function (json) {

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