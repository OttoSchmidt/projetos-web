let inicioTempo;

function inicio () {
    //limpar tabela
    linha = document.getElementsByClassName("gravidade");
    while (linha.length > 0) {
        document.getElementById(linha[0].id).remove();
    }

    //gerar linhas
    tiposGravidades = ["Leve", "Média", "Grave", "Gravíssima"];
    gravidadesAdicionadas = [];
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
        tr.id = "ind" + index;
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

    inicioTempo = new Date;
}

function verificar () {
    tempoDecorrido = new Date() - inicioTempo;
    erros = 0;

    respostasPontosCerto = [3, 4, 5, 7];
    respostasValorCerto = [88.38, 130.16, 195.23, 293.47];

    respostasPontos = new Array;
    respostasValor = new Array;

    for (i = 0; i < 4; i++) {
        respostasPontos[i] = parseInt(document.getElementById("ind"+i).getElementsByClassName("0")[0].value);
        respostasValor[i] = parseFloat(document.getElementById("ind"+i).getElementsByClassName("1")[0].value.replace(/,/, '.'));
    }

    console.log(respostasValor);

    for (i = 0; i < 4; i++) {
        inputColuna0 = document.getElementById("ind"+i).getElementsByClassName("0")[0];
        inputColuna1 = document.getElementById("ind"+i).getElementsByClassName("1")[0];

        inputColuna0.disabled = "disabled";
        inputColuna1.disabled = "disabled";

        if (respostasPontos[i] != respostasPontosCerto[i]) {
            inputColuna0.classList.add("erro");
            erros++;
        }

        if (respostasValor[i] != respostasValorCerto[i]) {
            inputColuna1.classList.add("erro");
            erros++;
        }
    }

    li = document.createElement("li");
    li.innerHTML = "- " + erros + " erros (" + Math.floor(tempoDecorrido/1000) + "s)";
    document.getElementById("tentativas").appendChild(li);


    document.getElementById("iniciar").classList.remove("hidden");
    document.getElementById("terminar").classList.add("hidden");
}