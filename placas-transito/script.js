function carregar (treeData) {
    //tipos = ["auxiliar", "regulamentacao", "advertencia"];
    tipos = "regulamentacao";
    document.getElementById("imagens").innerHTML = "";
    document.getElementById("frase").innerHTML = "";

    for (let i = 0; i < 3; i++) {
        img = document.createElement("img");
        valor = Math.floor(Math.random() * (treeData[tipos+"-img"].length - 1));
        img.src = treeData[tipos+"-img"][valor];
        img.classList.add("placa");
        img.setAttribute("data-valor", valor);
        img.setAttribute("onclick", "verificar(" + i + ");");
        document.getElementById("imagens").appendChild(img);
    }

    texto_index_random = Math.floor(Math.random() * 2);
    texto_index_json = parseInt(document.getElementsByClassName("placa")[texto_index_random].getAttribute("data-valor"));
    frase = document.createElement("p");
    frase.innerHTML = treeData[tipos+"-alt"][texto_index_json];
    frase.setAttribute("data-valor", texto_index_json);
    frase.id = "correcao";
    document.getElementById("frase").appendChild(frase);
}

function carregarJSON () {
    var treeData;
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "dados.json", true);
    oReq.send();
    
    function reqListener(e) {
        treeData = JSON.parse(this.responseText);
        carregar(treeData);
    }
}

function verificar (index) {
    gabarito = (document.getElementById("correcao").getAttribute("data-valor"));
    imagemSelecionada = document.getElementsByClassName("placa")[index];

    document.getElementById("total").innerHTML++;

    if (imagemSelecionada.getAttribute("data-valor") == gabarito) {
        document.getElementById("acertos").innerHTML++;
    } else {
        console.log("errado");
    }

    carregarJSON();

}