class Veiculo {
    constructor(marca, cor, anoDeFabricacao) {
        if (this.constructor === Veiculo) {
           
        }
        this.marca = marca;
        this.cor = cor;
        this.anoDeFabricacao = anoDeFabricacao;
    }

    ligarMotor() {
       
    }

    desligarMotor() {
        
    }

    dirigir() {
        
    }

    detalhes() {
        console.log(`Marca: ${this.marca}, Cor: ${this.cor}, Ano de Fabricação: ${this.anoDeFabricacao}`);
    }
}

class Carro extends Veiculo {
    ligarMotor() {
        console.log("Motor do carro ligado.");
    }

    desligarMotor() {
        console.log("Motor do carro desligado.");
    }

    dirigir() {
        console.log("Carro está sendo dirigido.");
    }
}

class Caminhao extends Veiculo {
    ligarMotor() {
        console.log("Motor do caminhão ligado.");
    }

    desligarMotor() {
        console.log("Motor do caminhão desligado.");
    }

    dirigir() {
        console.log("Caminhão está sendo dirigido.");
    }
}

// Criação de instâncias 
const meuCarro = new Carro('Toyota', 'Vermelho', 2022);
meuCarro.detalhes();
meuCarro.ligarMotor();
meuCarro.dirigir();
meuCarro.desligarMotor();

const meuCaminhao = new Caminhao('Volvo', 'Azul', 2020);
meuCaminhao.detalhes();
meuCaminhao.ligarMotor();
meuCaminhao.dirigir();
meuCaminhao.desligarMotor();

const outroCarro = new Carro('Honda', 'Preto', 2021);
outroCarro.detalhes();
outroCarro.ligarMotor();
outroCarro.dirigir();
outroCarro.desligarMotor();
