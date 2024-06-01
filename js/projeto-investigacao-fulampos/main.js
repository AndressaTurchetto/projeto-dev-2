let suspeitos = [
    [100, 20, 20, 10], // Suspeito 1
    [50, 50, 50], // Suspeito 2
    [50, 50, 20, 20, 10],  // Suspeito 3
    [100, 50]   // Suspeito 4
];

function verificarSuspeito(notas) {
    if (notas.length !== 2) {
        return false;
    }

    return notas[0] < 150 && (notas[0] + notas[1] === 150);
}

for (let i = 0; i < suspeitos.length; i++) {
    if (verificarSuspeito(suspeitos[i])) {
        console.log(`Suspeito ${i + 1} pode ter roubado os 150 fulampos`);
    }
}
