//https://web.dev/building-a-theme-switch-component/ ---> MUDAR TEMA

const nomeChave = "tema";
const nomeCor = "cor";

function recuperarPreferencia () {
    //recupera o tema do sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
        localStorage.setItem(nomeChave, "dark");
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) 
        localStorage.setItem(nomeChave, "light");

    document.firstElementChild.setAttribute("data-tema", localStorage.getItem(nomeChave));
    document.firstElementChild.setAttribute("data-cor", localStorage.getItem(nomeCor));
}

if (localStorage.getItem(nomeChave) == null) recuperarPreferencia();
if (localStorage.getItem(nomeCor) == null) localStorage.setItem(nomeCor, "0");

document.firstElementChild.setAttribute("data-tema", localStorage.getItem(nomeChave));
document.firstElementChild.setAttribute("data-cor", localStorage.getItem(nomeCor));

function alterarTema(indice) {
    const opcoesDisponiveis = ["sistema", "dark", "light"];
    valor = opcoesDisponiveis[indice];

    if (indice == 0) {
        recuperarPreferencia();
    } else {
        document.firstElementChild.setAttribute("data-tema", valor);
        localStorage.setItem(nomeChave, valor);
    }
}

function mudarCores (indice) {
    document.firstElementChild.setAttribute("data-cor", indice);
    localStorage.setItem(nomeCor, indice);
}