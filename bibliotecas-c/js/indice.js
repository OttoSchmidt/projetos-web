const h2 = document.querySelectorAll("h2");
const indiceLista = document.getElementById("indice").querySelectorAll("li");

window.addEventListener("scroll", ()=> {
    let atual;

    for (let i = 0; i < h2.length; i++) {
        if (scrollY > h2[i].offsetTop - window.innerHeight/3) {
            atual = i;
        }
        indiceLista[i].id = "";
    }

    if (atual === undefined) atual = 0;

    if (atual < 3) {
        indiceLista[atual].id = "selecionado";

        for (let i = 5; i < indiceLista.length; i++) {
            indiceLista[i].classList.remove("visivel-indice");
        }

        for (let i = 0; i < 5; i++) {
            indiceLista[i].classList.add("visivel-indice");
        }
    } else {
        let limite = atual + 3;

        for (let i = 0; i < indiceLista.length; i++) {
            indiceLista[i].classList.remove("visivel-indice");
        }

        indiceLista[atual].id = "selecionado";

        if (limite > indiceLista.length) limite = indiceLista.length;

        for (let i = atual-2; i < limite; i++) {
            indiceLista[i].classList.add("visivel-indice");
        }
    }
});
