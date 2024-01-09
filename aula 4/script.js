
const prompt = require('prompt-sync')();

let calculoNumeroUm = prompt('escolha um número: ');
let calculoNumeroDois = prompt('escolha outro Número: ');

calculoNumeroUm = parseFloat(calculoNumeroUm);
calculoNumeroDois = parseFloat(calculoNumeroDois);

let soma = calculoNumeroUm + calculoNumeroDois;

console.log(soma)






