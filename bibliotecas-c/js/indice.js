//carrega todos os elementos relevantes em variaveis
const h2 = document.querySelectorAll("h2");
const indiceLista = document.getElementById("indice").querySelectorAll("li");

//funcao para atualizar o destaque do indice
window.addEventListener("scroll", ()=> {
    let atual = 0; //inicia a variavel
    document.getElementById("selecionado").id = ""; //remove o destaque atual

    for (let i = 0; i < h2.length; i++) {
        //verifica se o scrollY (o scroll atual da pagina) é maior que a posicao Y do h2[i] em relacao ao topo da pagina menos 1/3 da altura da janela
        if (scrollY > h2[i].offsetTop - window.innerHeight * 0.3) {
            atual = i;
            document.getElementById("indice").scrollTo(0, i * indiceLista[0].offsetHeight);
        } else {
            break;
        }
    }

    //atualiza o destaque do indice
    indiceLista[atual].id = "selecionado";
});

//funcao para pesquisa
function procurar() {
    texto = document.getElementById("barraPesquisa").value.toLowerCase(); //valor do input em letras minusculas (compatibilidade)
    navLista = document.getElementById("indice").getElementsByTagName("li");

    //loop para cada elemento na lista de indices
    for (let item of navLista) {
        conteudo = item.getElementsByTagName("a")[0].textContent; //recebe o conteudo do elemento atual do loop

        //verificar se o elemento atual do loop contem o valor do input
        if (conteudo.includes(texto)) {
            item.classList.remove("esconder");
        } else {
            item.classList.add("esconder");
        }
    }
}
