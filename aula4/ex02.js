/* 2) Crie uma classse para representar pessoas.
PAra cada pessoa teremos os atributos peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC.
Instancie uma pessoa chamada José para que tenha 7-Kg e 1,75 de altura
e peça para José dizer qual o valor do seu IMC.
*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    imcCalculate() {
       return this.weight / (this.height * this.height);
    }
    imcClass(){
        const imc = this.imcCalculate();
        if (imc < 18.5){
            return ('Abaixo do peso.')
        } else if (imc >= 18.5 && imc <= 25) {
            return ('Peso normal.')
        } else if (imc >= 25 && imc <= 30) {
            return('Acima do peso.')
        } else if (imc >= 30 && imc <= 40) {
            return ('Obeso.')
        } else {
            return ('Obesidade grave.')
        }
    }
}

const jose = new Person('José', 70, 1.75);
console.log(jose);
console.log(jose.imcClass());