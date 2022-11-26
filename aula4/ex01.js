/* 1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km
Crie um método que dado a quantidade de quilometros e o preço do combustível 
nos dê o valor gasto em reais para realizar este percurso.
*/
//Obs.: classes sempre começam com letra maiuscula
// um método é uma ação dentro de um objeto
// brand = variável local / this.brand é uma variável do contexto da função que é o objeto
class CarType {
    brand;
    color;
    averageSpendPerKm;

    constructor(brand, color, averageSpendPerKm) {
        this.brand = brand; // pega a variável brand e coloca dentro do atributo brand
        this.color = color;
        this.averageSpendPerKm = averageSpendPerKm;
    }

    totalSpend(rangeKm, fuelPrice){
        return rangeKm * fuelPrice * this.averageSpendPerKm
    }
}

const uno = new CarType('Fiat', 'Vermelho', 1/12)
// invocando o método:
uno.totalSpend(100, 7);
console.log('O valor gasto é R$', uno.totalSpend(100, 7));