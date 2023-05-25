function inicio () {
    //limpar tabela
    linha = document.getElementsByClassName("gravidade");
    while (linha.length > 0) {
        document.getElementById(linha[0].id).remove();
    }

    //gerar linhas
    tiposGravidades = ["Leve", "Média", "Grave", "Gravíssima"];
    gravidadesAdicionadas = new Array;
    for (i = 0; i < 4; i++) {
        table = document.getElementById("tabela");

        do {
            index = Math.floor(Math.random() * tiposGravidades.length);
            existe = false;

            for (i = 0; i < gravidadesAdicionadas.length; i++) {
                if (gravidadesAdicionadas[i] == index) {
                    existe = true;
                    break;
                }
            }
        } while (existe);

        tr = document.createElement("tr");
        tr.id = index;
        tr.classList.add("gravidade");

        legenda = document.createElement("td");
        legenda.innerHTML = tiposGravidades[index];
        legenda.classList.add("legenda");
        tr.appendChild(legenda);

        for (j = 0; j < 2; j++) {
            td = document.createElement("td");
            input = document.createElement("input");
            input.classList.add(j);
            td.appendChild(input);
            tr.appendChild(td);
        }
        
        gravidadesAdicionadas.push(index);
        tabela.appendChild(tr);
    }

    document.getElementById("iniciar").classList.add("hidden");
    document.getElementById("terminar").classList.remove("hidden");
}

function verificar () {
    respostasPontosCerto = [3, 4, 5, 7];
    respostasValorCerto = [88.38, 130.16, 195.23, 293.47];

    respostasPontos = new Array;
    respostasValor = new Array;

    for (i = 0; i < 4; i++) {
        respostasPontos[i] = document.getElementsByClassName("0")[i].value;
        respostasValor[i] = document.getElementsByClassName("1")[i].value;
    }

    //verificar pontos
    for (i = 0; i < 4; i++) {
        
    }

}