// Faça um programa para calcular o valor gasto de combustível em uma viagem
// 3 variáveis. Sendo elas: preço do combustível, valor médio de gasto do carro, distância percorrida em Km 
// imprima no console o valor que será gasto de combusítvel para realizar esta viagem

const priceOil = 5.66;
const averageSpending = 10;
const rangeKm = 100;

const oilSpending = rangeKm/averageSpending;
const totalSpending = oilSpending * priceOil;
console.log(totalSpending.toFixed(2));

