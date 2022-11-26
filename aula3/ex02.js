// Preço pago À vista débito, 10% desconto. pix ou dinheiro, 15% desconto. Em 2x, sem jutos, acima de 2x juros 10%

function saleProduct(price, form) {   
    if (form === 1) {
        const payValue = price - (price * 0.1)
        return ('O preço do produto com 10% de desconto é R$', payValue.toFixed(2))

    } else if (form === 2){
        const payValue = price - (price * 0.15)
        return ('O preço do produto com 15% de desconto é R$ ', payValue.toFixed(2))
    } else if (form === 3) {
        const payValue = price
        return ('O preço do produto sem desconto é R$ ', payValue.toFixed(2))
    } else {
        const payValue = price + (price * 0.10)
        return('O preço do produto dividivo em mais de 2x no cartão com 10% de juros é R$', payValue.toFixed(2))
    }
}


console.log('O valor a ser pago será:', saleProduct(100,1));
