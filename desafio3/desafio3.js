/* 3) Faça um programa que calcule e imprima o salário a ser transferido
para um funcionário.
Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios
O salário a ser transferido  é calculado da seguinte forma:
valor bruto - percentual de imposto mediante a faixa salarial + benefícios
para calcular o percentual do imposto:
até 1100 reais - 5%
de 1100 a 2500 - 10%
maior que 2500 - 15%

Exemplo: entrada 2000, 250
Saída: 2050
*/

const{gets, print} = require('./funcoes-auxiliares')

const salarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPercentual(valor, percentual){
    return valor * (percentual/100);
}


function percentualBaseSalario(salario){
    if(salario <= 1100){
        return 5;
    } else if(salario > 1100 && salario <= 2500){
        return 10;
    } else {
        return 15;
    }
}

const valorTransferir = salarioBruto - calcularPercentual(salarioBruto, percentualBaseSalario(salarioBruto)) + adicionalBeneficios

print(valorTransferir)