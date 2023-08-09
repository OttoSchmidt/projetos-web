function alterarTab(indice) {
    tabs = document.getElementsByClassName("tab");
    ordem = ["certificados", "diploma", "biblioteca", "historico", "horario", "webestagio", "eventos"];

    if (!tabs[indice].classList.contains("selecionado")) {
        selecionado = document.getElementById("tabs").getAttribute("data-selecionado");

        tabs[selecionado].classList.remove("selecionado");
        tabs[indice].classList.add("selecionado");

        document.getElementById("tabs").setAttribute("data-selecionado", indice);

        document.getElementById("mostrar").setAttribute("src", "academico/" + ordem[indice] + ".html");
    }
};