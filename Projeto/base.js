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
