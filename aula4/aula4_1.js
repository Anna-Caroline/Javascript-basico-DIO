class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
// quando for declarar um método não precisa adicionar a palavra function dentro da sintaxe de classe
//Classe define o objeto. Uma instância é a ocorrência do objeto
// constructor o que acontece quando uma pessoa é instanciada
const victor = new Pessoa('victor', 25);
//victor.nome = 'Vicstor J Guerra';
//victor.idade = 25;

const renan = new Pessoa('renan', 30);
//renan.nome = 'Renan J Paula';
//renan.idade = 30;

console.log(renan);
console.log(victor);

victor.descrever();
renan.descrever();