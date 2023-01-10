$(document).ready(function(){
    $("#b-input").on("keyup", function(){

        var valor = $(this).val().toLowerCase();

        $("#imgbox #card").filter(function(){

            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);

        })

    })
})