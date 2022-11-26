/* Uma sala contém 5 alunos, e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98*/

const {gets, print} = require('./aula6');

const numSorteados = [];

for (let i = 0; i< 5; i++) {
    const numSorteado = gets();
    numSorteados.push(numSorteado);
    
}

let maiorValor = 0; 

for (let i= 0; i < numSorteados.length; i++) {
    const numSorteado = numSorteados[i];
    if (numSorteado > maiorValor) {
        maiorValor = numSorteado; 
    }
    
}

print(maiorValor);
