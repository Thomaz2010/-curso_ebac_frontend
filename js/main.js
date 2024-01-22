   // trabalhando co máscaras no formulário Jquery mask plugin

        $(document).ready(function () {
            $('#carrocel-img').slick({// função carrocel imagens
                autoplay: true
            });

            $(".menu-hamburguer").click(function () {
                $('nav').slideToggle();//função menu hamburguer
            });

            $('#telefone').mask("(00)00000-0000", {
                placeholder: '(__)_____-____'
            });//adic maskara com jquery mask plugins

            // validando formulário com jquery validate plugins

            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    mensagem: {
                        required: true
                    },
                    veiculoDeInteresse: {
                        required: false
                    }

                },
                // trabalhando com retorno do usuario eventos nos campos
                submitHandler: function (form) {
                    console.log(form);

                },
                // retornando campos ivalidos e nao preechidos pelo usuario
                invalidHandler: function (evento, validador) {

                    let camposIncorretos = validador.numberOfInvalids();
                    // alerta p o usuario com o numero de  campos nao preenchidos incorretos
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                },

            });
                // efeito de rolar a pagina com JQuery ao clicar no "tenho interesse"
            $('.lista-veiculos button').click(function(){
                const destino = $('#contato');
                //preenchenddo o formulario quando clicar em interesse
              const nomeVeiculo = ($(this).parent().find('h3').text());

                // setando o valor para o campo do formulario após o click
              $('#veiculo-interesse').val(nomeVeiculo);


                $('html').animate({
                     scrollTop:destino.offset().top
                },1000) 

            })
        });
