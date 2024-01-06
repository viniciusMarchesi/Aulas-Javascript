/*
Luiz otavio Miranda tem 30 anos, pesa 84 Kg
tem 1.8 de altura e seu IMC é de 25.9259...
luiz otavio nasceu em 1980
*/ 

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let anoAtual = 2019;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);  //peso / (altura * altura)
let anoNascimento = anoAtual - idade;

// tamplate string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`Luiz Otávio nasceu em ${anoNascimento}`);