//alterar o tema da pagina

function alterarTema () {
    if (document.body.classList.contains("modoEscuro")) {
        document.body.classList.remove("modoEscuro");
        document.getElementById("btnTema").innerText = "dark_mode";
    } else {
        document.body.classList.add("modoEscuro");
        document.getElementById("btnTema").innerText = "light_mode";
    }
}