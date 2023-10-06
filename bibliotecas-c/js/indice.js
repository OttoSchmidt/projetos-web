const h2 = document.querySelectorAll("h2");
const indiceLista = document.getElementById("indice").querySelectorAll("li");

window.addEventListener("scroll", ()=> {
    let atual = 0;

    document.getElementById("selecionado").id = "";

    for (let i = 0; i < h2.length; i++) {
        if (scrollY > h2[i].offsetTop - window.innerHeight * 0.3) {
            atual = i;
            document.getElementById("indice").scrollTo(0, i * indiceLista[0].offsetHeight);
        } else {
            break;
        }
    }

    indiceLista[atual].id = "selecionado";
});

function procurar() {
    texto = document.getElementById("barraPesquisa").value;
    navLista = document.getElementById("indice").getElementsByTagName("li");

    for (let item of navLista) {
        conteudo = item.getElementsByTagName("a")[0].textContent;
        texto = texto.toLowerCase();

        if (conteudo.includes(texto)) {
            item.classList.remove("esconder");
        } else {
            item.classList.add("esconder");
        }
    }
}
