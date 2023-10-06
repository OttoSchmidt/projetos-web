//pegar o valor do cookie
temaPreferencia = document.cookie.split('=')[1];

//funcao do botao para alterar o tema
function alterarTema () {
    if (document.documentElement.getAttribute('data-tema') === 'dark') {
        document.documentElement.setAttribute('data-tema', 'light');
        document.getElementById("btnTema").innerText = "dark_mode";
        document.cookie = "tema=";
    } else {
        document.documentElement.setAttribute('data-tema', 'dark');
        document.getElementById("btnTema").innerText = "light_mode";
        document.cookie = "tema=dark";
    }
}

/*quando a pagina é aberta (sem o html carregar), é atribuido um atributo ao elemento HTML de acordo com o cookie
(assim, a pagina não pisca quando carrega) */
if (temaPreferencia === 'dark') {
    document.documentElement.setAttribute('data-tema', 'dark');
} else {
    document.documentElement.setAttribute('data-tema', 'light');
}

//quando o html carregar, caso a pagina esteja em modo noturno, altera o icone do botao
document.addEventListener('DOMContentLoaded',function() {
    if (document.documentElement.getAttribute('data-tema') === 'dark')
        document.getElementById("btnTema").innerText = "light_mode";
});