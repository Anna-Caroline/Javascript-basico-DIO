//Faça um programa que receba N (quantidade de números) e seus respectivos valores
//Imprima o maior número par e o melhor número ímpar.
//Exemplo :
//Entrada: 5, 3, 4, 1, 10, 8
//Saída: Maior número par 10
// E o menor número ímpar


const {gets, print} = require('./funcoes-auxiliares');

const numeros = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < numeros; i++) {
    const num = gets();
    if(num % 2 === 0) {
        if(maiorPar === null || num > maiorPar){
            maiorPar = num;
        }
    } else {
        if(menorImpar === null || num < menorImpar){
            menorImpar = num;
        } 
    } 
}

print(maiorPar);
print(menorImpar);