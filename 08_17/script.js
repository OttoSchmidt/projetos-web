function gerarTable (linhas, colunas) {
    table = document.createElement("table");

    for (i = 0; i < linhas; i++) {
        tr = document.createElement("tr");

        if (i == 0) {
            for (j = 0; j < colunas; j++) {
                th = document.createElement("th");
                th.innerHTML = j + 1;
                tr.appendChild(th);
            }
        } else {
            for (j = 0; j < colunas; j++) {
                td = document.createElement("td");
                td.innerHTML = "dados";
                tr.appendChild(td);
            }
        }

        table.appendChild(tr);
    }

    document.body.appendChild(table);
}

function gerarLista (tipo, tam, ordem) {
    lista = null;

    if (tipo == "ol") {
        lista = document.createElement("ol");
        lista.setAttribute("type", ordem);
    } else {
        lista = document.createElement("ul");
    }

    for (i = 0; i < tam; i++) {
        li = document.createElement("li");
        li.innerHTML = "Item " + (i + 1);
        lista.appendChild(li);
    }

    document.body.appendChild(lista);
}