// funções auxiliares gets e print

const entradas = [5, 50, 10, 98, 23];
let i = 0;

// a lógica do for aplicado na função pra simular a entrada
function gets() {
   const valor = entradas[i];
   i++;
   return valor;
}

 function print(texto) {
    console.log(texto);
 }

 module.exports = {gets, print}
 // estou definindo um objeto
 /* Outra forma de criar um objeto literal:
 module.exports ={
    gets: gets,
    print: print
 }
 Método gets e método print.
 Outra forma:
 module.exports.gets = gets;
 */