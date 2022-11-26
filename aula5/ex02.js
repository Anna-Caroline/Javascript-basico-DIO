// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numbers = [7,12,14,15,22,35,44];
console.log('Os números pares presentes na lista são, respectivamente:')
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(number%2===0){
        console.log(number);
    }
}