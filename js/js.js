var json1 = "https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/4b44d6d2/json/json.json"
var json2 = "https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/e8232584/json/json2.json"
//aqui definimos todos los json que habrá
var lista_json = [json1, json2]
//lista de json que usaremos
var carga_json = 0
//numero de json cargados
var activado = true;
//carga de json automatica está activada
var todo_cargado = false;
//todos los json cargados


$(function () {




    $(window).scroll(function () {
        if ($(document).scrollTop() + window.innerHeight + 200 >= document.getElementsByTagName("body")[0].scrollHeight) {
            //Cuando la pagina haga scroll casi al final
            if (todo_cargado == false && activado == true) {

                iterar_json(carga_json);
                carga_json++;
            };
        }
    })


    $(".noscroll").click(function () {

        iterar_json(carga_json);
        carga_json++;
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






    //--------------------------------------------------------------------------------------------------//

    function iterar_json(posicion) {
        if (todo_cargado == false) {

            carga(posicion);

        } else {
            $(".cargamas").html('<button type="button" class="btn btn-default" data-dismiss="modal">No hay mas noticias</button>');

        }

    }
    //--------------------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------//

    function carga(posicion) {
        $.getJSON(lista_json[posicion], function (json) {

            console.log(json);
            $.each(json, function (i, noticia) {
                var titulo = noticia.titulo;
                var imagen = noticia.imagen;
                var desc = noticia.descripcion;

                $("#masnoticias").append('"<div class="row "><div class="col-sm-4 miniatura"><a href="not-cardio.html"><img class="img-fluid " src=' + imagen + ' class="rounded " alt="Cinque Terre "></a></div><div class="col-sm-8" style="background-color:silver; "><div class="desc"><h2>' + titulo + '</h2><p>' + desc + '</p></div><div class="row"><div class="col-sm-4 text center"><a href="#"><i class="fab fa-facebook-square fa-2x"></i></i></a><a href="#"><i class="fab fa-twitter-square fa-2x"></i></i></a><a href="#"><i class="fab fa-google-plus-square fa-2x"></i></i></a></div></div></div></div>"');
            });
        });

        if (posicion == (lista_json.length - 1)) {
            todo_cargado = true;
        }

        
    }




    //--------------------------------------------------------------------------------------------------//




    var popup = $('#popup');
    var anchura = $(window).width();
    if (anchura > 720) {
        popup.css({

            'left': ($(window).width() / 2 - $(popup).width() / 2) + 'px',
            'top': ($(window).height() / 2 - $(popup).height() / 2) + 'px'


        });

    } else {
        popup.css('display', 'none')

    }






});