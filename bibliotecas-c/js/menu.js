function abrirMenu() {
    menu = document.getElementById("navBibliotecas");
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        remover = document.createElement("div");
        remover.id = "removerMenu";
        remover.setAttribute("onclick", "abrirMenu();");
        document.body.appendChild(remover);
    } else {
        document.getElementById("removerMenu").remove();
    }
}