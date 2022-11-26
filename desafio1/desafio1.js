/*1)Faça um programa que receba a média de um aluno.
Caso a média seja < 5, imprmita 'Reprovado'
Entre 5 e 7, imprima recuperação
Maior que 7, aprovado.
exemplo: entrada: 5.5
saida: recuperação */

const{gets, print} = require('./funcoes-auxiliares');
const med = gets();

if(med < 5) {
    print('Reprovado');
} else if (med >= 5 && med <7) {
    print('Recuperação'); 
} else{ 
        print('Aprovado.')

}
