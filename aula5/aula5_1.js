//Estruturas de repetição
// O for funciona para percorrer uma quantidade específica de vezes
// precisa de uma variável para controlar a iteração (let), normalmente chamda de i
// primeira parte declaração do index (variável de controle)
// segunda parte é a estrutura condicional, retorna um booleano. Diz se entra ou não dentro do for
// terceira parte, o que vai acontecer depois que terminar de executar o for. FAz a condição que vai alternar a variável para ir pro próximo passo
// i ++ equivale a let i = 1; i = i +1. Incrementa um na própria variável
//Obs: a string é um array de caracteres

const nome = 'Anna Caroline';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

for (let index = 0; index < nome.length; index++) {
    const letra = nome[index];
    console.log(letra);
    
}