function alterarTab(indice) {
    tabs = document.getElementsByClassName("tab");
    dir = document.getElementById("mostrar").getAttribute("data-diretorio");

    if (dir == "academico/") {
        ordem = ["certificados", "diploma", "biblioteca", "historico", "horario", "webestagio", "eventos"];
    } else if (dir == "financeiro/") {
        ordem = ["taxas", "parcelas", "oferta", "divida"];
    } else if (dir == "documentos/") {
        ordem = ["academicos", "financeiros", "ensino"];
    }

    if (!tabs[indice].classList.contains("selecionado")) {
        selecionado = document.getElementById("tabs").getAttribute("data-selecionado");

        tabs[selecionado].classList.remove("selecionado");
        tabs[indice].classList.add("selecionado");

        document.getElementById("tabs").setAttribute("data-selecionado", indice);

        document.getElementById("mostrar").setAttribute("src", dir + ordem[indice] + ".html");
    }
}

function atualizarBarras () {
    barras = document.getElementsByClassName("progresso");

    if (barras.length != 0) {
        for (i = 0; i < barras.length; i++) {
            valor = barras[i].getAttribute("data-progresso");

            barras[i].style.width = valor + "%";
        }
    }
}

function menuUsuario () {
    document.getElementById("conta-mobile").getElementsByClassName("menuConta")[0].id = "ativo";
    document.getElementById("fundoContexto").style.right = "0vw";
}

function removerMenuUsuario () {
    document.getElementById("mudarCurso").style.top = "-100%";
    document.getElementById("fundoContexto").style.right = "200vw";
    document.getElementById("fundoContexto").style.opacity = "0";

    document.getElementById("conta-mobile").getElementsByClassName("menuConta")[0].id = "";
}

function mudarCurso () {
    document.getElementById("mudarCurso").style.top = "50%";
    document.getElementById("fundoContexto").style.right = "0vw";
    document.getElementById("fundoContexto").style.opacity = "0.25";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("conta-mobile").addEventListener("click", menuUsuario);
});

function gerarTabelaCurriculo () {
    div = document.createElement("div");
    div.classList.add("materias");

    p = document.createElement("p");
    p.innerHTML = "teste";
    div.appendChild(p);

    table = document.createElement("table");
    tbody = document.createElement("tbody");

    titulos = ["Código:", "CH:", "Faltas:", "Média:", "Situação:"];

    for (i = 0; i < 5; i++) {
        linha = document.createElement("tr");
        th = document.createElement("th");
        td = document.createElement("td");

        th.innerHTML = titulos[i];
        td.innerHTML = i;

        linha.appendChild(th);
        linha.appendChild(td);
        tbody.appendChild(linha);
    }

    table.appendChild(tbody);
    div.appendChild(table);
    document.getElementsByClassName("semestres")[0].appendChild(div);
}
