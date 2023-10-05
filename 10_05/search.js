function procurar() {
    texto = document.getElementById("barraPesquisa").value;
    navLista = document.getElementById("conteudoPesquisa").getElementsByTagName("li");

    for (let li of navLista) {
        conteudo = li.textContent.toLowerCase();

        if (conteudo.includes(texto)) {
            li.classList.remove("esconder");
        } else {
            li.classList.add("esconder");
        }
    }
}