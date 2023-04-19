function adicionar_linha_formulario () {
	let tabela = document.getElementById("adicionar-linha-localizacao");
	let tr = document.createElement("tr");

	let classes = ["nome", "host"];
	for (let i = 0; i < 2; i++) {
		let td = document.createElement("td");
		let input = document.createElement("input");
		input.type = "text";
		input.classList.add(classes[i]);
		input.classList.add("input-tabela");
		td.appendChild(input);
		tr.appendChild(td);
	}

	tabela.appendChild(tr);
}

function dados (divisao, ipRede) {
	let subredeQuantidade = 2 ** (divisao % 8);
	let intervaloMascara = 256/subredeQuantidade;
	enderecoSubrede = ipRede.slice();

	ipSubrede.push(intervaloMascara);
	let broadcast = ipSubrede.push();

	while (id.length < 4) {
		ipSubrede.push(0);
	}


	if (divisao != 32) {
		broadcast[Math.floor(divisao/8)]=(1+i)*intervaloMascara-1;
	}

	intervaloInicial = id.slice();
	intervaloInicial[3] += 1;
	intervaloFinal = broadcast.slice();
	intervaloFinal[3] -= 1;

}

function calc () {
	let inputHost = document.getElementsByClassName("host");
	let ipRede = document.getElementById("num").value.split(".");
	let divisao = [];
	for (let i = 0; i < inputHost.length; i++) {
		divisao[i] = Math.floor(32 - (Math.log(parseInt(inputHost[i].value))/Math.log(2)));
	}

	if (ipRede.length < 4) {
		dados(divisao, ipRede);
	}







}
