$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })


    $('#btn-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const novatarefa = $("#endereço-tarefa").val();
        //console.log(novatarefa)

        const novoItem = $(`<li>${novatarefa}</li>`);
        $(`${novatarefa}`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $("#endereço-tarefa").val('');

    })

    $("ul").on("click", "li", function () {
        $(this).toggleClass("tConcluido");
    });
})






