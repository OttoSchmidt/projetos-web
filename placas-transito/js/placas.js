let dados_img_template, dados_alt_template, dados_img, dados_alt, tentativas, inicioTempo, tamanhoOriginal;

function removerFundo () {
    document.body.id = "";
}

function carregar () {
    document.getElementById("imagens").innerHTML = "";
    document.getElementById("frase").innerHTML = "";
    document.getElementById("resto").innerHTML = dados_img.length;
    index_img_selecionado = [];

    if (dados_img.length == 0) {
        document.getElementById("status").classList.add("hidden");
        document.getElementById("reiniciar").classList.remove("hidden");
        document.getElementById("frase").innerHTML = "Parabéns!";

        let tempoDecorridoTexto = "";
        tempoDecorrido = new Date() - inicioTempo;

        if (tempoDecorrido/60000 >= 1) {
            tempoDecorridoTexto = Math.floor(tempoDecorrido/60000) + " min e ";
            tempoDecorrido -= Math.floor(tempoDecorrido/60000) * 60000;
        }

        tempoDecorridoTexto += Math.floor(tempoDecorrido/1000) + "s";
        erros = tentativas - tamanhoOriginal;

        li = document.createElement("li");
        li.innerHTML = "- " + erros + " erros (" + tempoDecorridoTexto + ")";
        document.getElementById("tentativas").appendChild(li);
        document.getElementById("tentativas").classList.remove("hidden");

        return;
    }

    while (index_img_selecionado.length < 3) {
        div = document.createElement("div");
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
        div.setAttribute("onclick", "verificar(" + index_img_selecionado.length + ");");

        div.appendChild(img);
        document.getElementById("imagens").appendChild(div);

        index_img_selecionado.push(valor);
    }

    valor_img_correta = index_img_selecionado[Math.floor(Math.random() * 3)];
    
    frase = document.getElementById("frase");
    frase.innerHTML = dados_alt[valor_img_correta];

    frase.setAttribute("data-valor", valor_img_correta);
}

function verificar (index) {
    gabarito_valor = (document.getElementById("frase").getAttribute("data-valor"));

    imagemSelecionada = document.getElementsByClassName("placa")[index];
    imagemSelecionadaValor = imagemSelecionada.getAttribute("data-valor");

    tentativas++;

    if (imagemSelecionadaValor == gabarito_valor) {
        dados_img.splice(imagemSelecionadaValor, 1);
        dados_alt.splice(imagemSelecionadaValor, 1);

        document.body.id = "acerto";
    } else {
        document.body.id = "erro";
    }

    setTimeout(removerFundo, 300);
    carregar();
}

function reiniciar () {
    dados_img = Array.from(dados_img_template);
    dados_alt = Array.from(dados_alt_template);

    inicioTempo = new Date();
    tamanhoOriginal = dados_img.length;

    document.getElementById("reiniciar").classList.add("hidden");
    document.getElementById("status").classList.remove("hidden");

    tentativas = 0;

    carregar();
}

function carregarJSON () {
    var treeData;
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "json/dados.json", true);
    oReq.send();
    
    function reqListener(e) {
        treeData = JSON.parse(this.responseText);
        dados_img_template = treeData["imagens"];
        dados_alt_template = treeData["alts"];

        reiniciar();
    }
}