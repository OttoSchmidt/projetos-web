function abrirMenu() {
    const menu = document.getElementById("navBibliotecas");
    menu.classList.toggle("ativo"); /*se o elemento já tem a classe ativo, ele remove, caso contrario, ele adiciona*/

    if (menu.classList.contains("ativo")) {
        //cria o fundo para remover o menu do nav
        const remover = document.createElement("div");
        remover.id = "removerMenu";
        remover.setAttribute("onclick", "abrirMenu();");
        document.body.appendChild(remover);
    } else {
        //remove o fundo criado anteriormente
        document.getElementById("removerMenu").remove();
    }
}