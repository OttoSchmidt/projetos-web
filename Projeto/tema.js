//https://web.dev/building-a-theme-switch-component/ ---> MUDAR TEMA

const nomeChave = "tema";

const recuperarPreferencia = () => {
    valor = localStorage.getItem(nomeChave);

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
        localStorage.setItem(nomeChave, "dark");
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) 
        localStorage.setItem(nomeChave, "light");

    document.firstElementChild.setAttribute("data-tema", localStorage.getItem(nomeChave));
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