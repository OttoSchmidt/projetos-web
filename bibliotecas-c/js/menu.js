function removeOnclickRezise () {
    console.log("a");
    const biblioteca = document.getElementById("biblioteca");
    if (window.innerWidth > 900) {
        biblioteca.setAttribute("onclick", null);
    } else {
        biblioteca.setAttribute("onclick", "abrirMenu();");
    }
}

window.addEventListener("DOMContentLoaded", removeOnclickRezise);

window.addEventListener("resize", removeOnclickRezise);

function removerMenuFundo (tipo) {
    if (tipo) {
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

function abrirMenu() {
    const menu = document.getElementById("navBibliotecas");
    menu.classList.toggle("ativo"); /*se o elemento já tem a classe ativo, ele remove, caso contrario, ele adiciona*/
    removerMenuFundo(menu.classList.contains('ativo'));
}

function abrirMenuMobile () {
    const nav = document.getElementsByClassName("navPrincipal")[0];
    const menuBiblioteca = document.getElementById("navBibliotecas");
    
    nav.classList.toggle("ativo");
    if (!nav.classList.contains("ativo")) {
        menuBiblioteca.classList.remove("ativo");
    }
}

function abrirMenuSearch () {

}