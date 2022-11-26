// Calculando a média de três notas de um aluno

const n1 = 10;
const n2 = 5.6;
const n3 = 8;

const med = (n1+n2+n3)/3;

console.log('A média final do aluno é: ', med.toFixed(2))

if (med < 5) {
    console.log('Aluno reprovado.')
} else if (med >= 5 && med <=7){
    console.log('Aluno vai para a recuperação.')
} else {console.log('Aluno aprovado.')
}