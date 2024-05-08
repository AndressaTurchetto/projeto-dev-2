import entradaDados from 'readline-sync';

let valorDevido = entradaDados.question('Informe o valor devido: ');
let diasDeAtraso = entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto: ');

console.log('Valor original da dívida: '+valorDevido)
console.log('Dias atrasados'+diasDeAtraso)

let valorDivida = valorDevido;
let juros = 10;

let valorJuros = (valorDivida / 100) * juros;
let totalDivida = valorDivida + valorJuros;

console.log(totalDivida);


