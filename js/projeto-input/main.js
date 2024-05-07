import entradaDados from 'readline-sync';

// Entrada de dados
let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, "+nome);

let idade = entradaDados .question('Digite sua idade: ');
console.log("Você tem "+idade+" anos de idade");

// Soma
console.log("Calculadora de soma entre x e y: \n")

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);

// Transforme milhas em km
console.log("Conversor de Milhas para Quilômetros: \n");

let mi = entradaDados.question("Informe o valor em Milhas: ");

let km = mi / 0.62137;

console.log(mi+"mi equivale a "+km+"km");

// Area do triângulo
console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area);

