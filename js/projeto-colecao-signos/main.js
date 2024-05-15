let colecao_signos = [
    {"Nome": "Aquário", "dataInicio": "01-20", "dataFim": "02-18"},
    {"Nome": "Peixes", "dataInicio": "02-19", "dataFim": "03-20"},
    {"Nome": "Áries", "dataInicio": "03-21", "dataFim": "04-19"},
    {"Nome": "Touro", "dataInicio": "04-20", "dataFim": "05-20"},
    {"Nome": "Gêmeos", "dataInicio": "05-21", "dataFim": "06-21"},
    {"Nome": "Câncer", "dataInicio": "06-22", "dataFim": "07-23"},
    {"Nome": "Leão", "dataInicio": "07-24", "dataFim": "08-22"},
    {"Nome": "Virgem", "dataInicio": "08-23", "dataFim": "09-22"},
    {"Nome": "Libra", "dataInicio": "09-23", "dataFim": "10-22"},
    {"Nome": "Escorpião", "dataInicio": "10-23", "dataFim": "11-21"},
    {"Nome": "Sagitário", "dataInicio": "11-22", "dataFim": "12-21"},
    {"Nome": "Capricórnio", "dataInicio": "12-22", "dataFim": "01-19"},
];

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
    if (tipo_comparacao == "and" ) {
        return (data >= data_inicio & data <= data_fim);
    } else if (tipo_comparacao == "or") {
        return (data >= data_inicio || data <= data_fim);
    }
}

const retorna_signo = (signos, data) => {
    let ano = data.getFullYear();

    for (const signo of signos) {
        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");
        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao) ) {
            return signo["Nome"];
        }
    }
}

let data_app = new Date("2024-05-15 00:00:00");
const nome_signo = retorna_signo(colecao_signo, data_app);

console.log('O signo de hoje é: ' + nome_signo);