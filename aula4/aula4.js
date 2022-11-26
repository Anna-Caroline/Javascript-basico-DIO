// Um objeto é uma coleção dinâmica de chave-valor
// uma função dentro de um objeto é chamda de método
// this é o contexto onde a função está sendo executada
const pessoa = {
    nome: 'Caroline Lima',
    idade: 30,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


pessoa.nome ='Renan';
pessoa.idade = 34;
pessoa.descrever();

// sintaxe dinâmica

const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';