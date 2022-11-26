// Preço pago À vista débito, 10% desconto. pix ou dinheiro, 15% desconto. Em 2x, sem jutos, acima de 2x juros 10%

const productPrice = 100;
const payForm = 1;

if (payForm === 1) {
    const price = productPrice - (productPrice * 0.1)
    console.log('O preço do produto com 10% de desconto é R$', price.toFixed(2))

} else if (payForm === 2){
    const price = productPrice - (productPrice * 0.15)
    console.log('O preço do produto com 15% de desconto é R$ ', price.toFixed(2))
} else if (payForm === 3) {
    const price = productPrice
    console.log('O preço do produto sem desconto é R$ ', price.toFixed(2))
} else {
    const price = productPrice + (productPrice * 0.10)
    console.log('O preço do produto dividivo em mais de 2x no cartão com 10% de juros é R$', price.toFixed(2))
}