$(document).ready(function() {
    $(".block-cat").click(function() {
        $.get("https://eko-dev3.github.io/digimusic.github.io/function/fetchdetail.html", function(data) {


            $("#blog").html(data);

        });
    });


    /* gaelria */
    $("#conciertos").click(function() {
        $.get("/function/multimedia.html", function(data) {


            $("#gallery").html(data);

        });
    });

    $("#estudio").click(function() {
        $.get("/function/estudio.html", function(data) {

            $("#gallery").html(data);

        });
    });

    $("#video").click(function() {
        $.get("/function/video.html", function(data) {


            $("#gallery").html(data);

        });
    });



    /*  */
});
