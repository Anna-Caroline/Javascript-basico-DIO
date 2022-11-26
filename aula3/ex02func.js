function Imc(weight, height) {
    return  weight / Math.pow(height, 2);
}

function ImcType(imc) {
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

//Main
(function () {
    const weight = 75;
    const height = 1.75;

    const imc = Imc(weight, height);
    console.log(Imc(weight, height));
    console.log(ImcType(imc));
})();


