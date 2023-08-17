//https://web.dev/building-a-theme-switch-component/ ---> MUDAR TEMA

const nomeChave = "tema";
const nomeCor = "cor";

function recuperarPreferencia () {
    valorCor = localStorage.getItem(nomeCor);

    //recupera o tema do sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
        localStorage.setItem(nomeChave, "dark");
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) 
        localStorage.setItem(nomeChave, "light");

    if (valorCor == null) localStorage.setItem(nomeCor, "0");

    document.firstElementChild.setAttribute("data-tema", localStorage.getItem(nomeChave));
    document.firstElementChild.setAttribute("data-cor", localStorage.getItem(nomeCor));
}

if (localStorage.getItem(nomeChave) == null) recuperarPreferencia();

document.firstElementChild.setAttribute("data-tema", localStorage.getItem(nomeChave));

function alterarTema(indice) {
    opcoesDisponiveis = ["sistema", "dark", "light"];
    valor = opcoesDisponiveis[indice];

    if (indice == 0) {
        recuperarPreferencia();
    } else {
        document.firstElementChild.setAttribute("data-tema", valor);
        localStorage.setItem("tema", valor);
    }
}