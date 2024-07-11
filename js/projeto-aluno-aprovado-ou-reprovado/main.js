import readlineSync from 'readline-sync';

function calcularMedia() {
    let notas = [];
    const quantidade_notas = 5;

    for (let i = 0; i < quantidade_notas; i++) {
        let nota = parseFloat(readlineSync.question(`Informe a nota ${i + 1}: `));
        while (isNaN(nota)) {
            nota = parseFloat(readlineSync.question(`Entrada inválida. Informe a nota ${i + 1}: `));
        }
        notas.push(nota);
    }

    let soma_notas = 0;
    for (let i = 0; i < quantidade_notas; i++) {
        soma_notas += notas[i];
    }

    let media = soma_notas / quantidade_notas;

    if (media >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }

    console.log(`Média: ${media}`);
}

calcularMedia();

