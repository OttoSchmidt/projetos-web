let dados_img, dados_alt;

function removerFundo () {
    document.body.id = "";
}

function carregar () {
    setTimeout(removerFundo, 300);

    document.getElementById("imagens").innerHTML = "";
    document.getElementById("frase").innerHTML = "";
    index_img_selecionado = [];

    if (dados_img.length == 0) {
        return;
    }

    while (index_img_selecionado.length < 3) {
        img = document.createElement("img");
        valor = Math.floor(Math.random() * (dados_img.length));

        if (dados_img.length > 3) {
            if (index_img_selecionado.includes(valor)) {
                continue;
            }
        }

        img.src = dados_img[valor];
        img.classList.add("placa");

        img.setAttribute("data-valor", valor);
        img.setAttribute("onclick", "verificar(" + index_img_selecionado.length + ");");

        document.getElementById("imagens").appendChild(img);

        index_img_selecionado.push(valor);
    }

    valor_img_correta = index_img_selecionado[Math.floor(Math.random() * 3)];
    
    frase = document.createElement("p");
    frase.innerHTML = dados_alt[valor_img_correta];

    frase.setAttribute("data-valor", valor_img_correta);

    frase.id = "correcao";

    document.getElementById("frase").appendChild(frase);
}

function verificar (index) {
    gabarito_valor = (document.getElementById("correcao").getAttribute("data-valor"));

    imagemSelecionada = document.getElementsByClassName("placa")[index];
    imagemSelecionadaValor = imagemSelecionada.getAttribute("data-valor");

    document.getElementById("total").innerHTML++;

    if (imagemSelecionadaValor == gabarito_valor) {
        document.getElementById("acertos").innerHTML++;

        dados_img.splice(imagemSelecionadaValor, 1);
        dados_alt.splice(imagemSelecionadaValor, 1);

        document.body.id = "acerto";
    } else {
        document.body.id = "erro";
    }

    carregar();
}

function carregarJSON () {
    var treeData;
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "dados.json", true);
    oReq.send();
    
    function reqListener(e) {
        treeData = JSON.parse(this.responseText);
        dados_img = treeData["imagens"];
        dados_alt = treeData["alts"];
        carregar();
    }
}