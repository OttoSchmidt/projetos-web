function alterarTab(indice) {
    tabs = document.getElementsByClassName("tab");
    dir = document.getElementById("mostrar").getAttribute("data-diretorio");

    if (dir == "academico/") {
        ordem = ["certificados", "diploma", "biblioteca", "historico", "horario", "webestagio", "eventos"];
    } else if (dir == "financeiro/") {
        ordem = ["taxas", "parcelas", "oferta", "divida"];
    }

    if (!tabs[indice].classList.contains("selecionado")) {
        selecionado = document.getElementById("tabs").getAttribute("data-selecionado");

        tabs[selecionado].classList.remove("selecionado");
        tabs[indice].classList.add("selecionado");

        document.getElementById("tabs").setAttribute("data-selecionado", indice);

        document.getElementById("mostrar").setAttribute("src", dir + ordem[indice] + ".html");
    }
};