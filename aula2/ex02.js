// Cálculo de IMC

const weight = 65;
const height = 1.68;
const imc = weight / Math.pow(height, 2);

console.log('O IMC é ', imc.toFixed(2));

if (imc < 18.5){
    console.log('Abaixo do peso.')
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal.')
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso.')
} else if (imc >= 30 && imc <= 40) {
    console.log('Obeso.')
} else {
    console.log('Obesidade grave.')
}