   // trabalhando co máscaras no formulário Jquery mask plugin

    $('#telefone').mask("(00)00000-0000", {
        placeholder: '(__)_____-____'
    });//adic maskara com jquery mask plugins

    $('#cpf').mask("000.000.000-00" ,{
        placeholder:"___.___.___-__"
    });

    $('#cep').mask("00.000-000" ,{
        placeholder:'__.___-___'

    });

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
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required:true
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
        
        

    
