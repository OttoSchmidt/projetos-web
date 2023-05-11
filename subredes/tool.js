function alterarModo () {
	bodyID = document.body.id;
	if (bodyID == "dark") {
		document.body.id="claro";
	} else {
		document.body.id="dark";
	}

}

function atualizar () {
	document.getElementsByClassName("selecionado")[0].classList.remove("selecionado");

	let tipo = parseInt(document.getElementById("tipo-div").getAttribute("data-selecionado"));

	document.documentElement.style.setProperty("--fundo-botao-porcentagem", (-1 * parseInt(getComputedStyle(document.documentElement).getPropertyValue("--fundo-botao-porcentagem"))) + "%");

	if (tipo == 0) {
		tipo = 1;
		document.getElementById("tipo-div").setAttribute("data-selecionado", 1);
	} else {
		tipo = 0;
		document.getElementById("tipo-div").setAttribute("data-selecionado", 0);
	}

	let input = document.getElementsByClassName("inputs")[tipo];
	input.classList.add("selecionado");

	let inputsLimpar = document.getElementById("formulario").getElementsByTagName("input");
	for (let i = 0; i < inputsLimpar.length; i++) {
		inputsLimpar[i].value = "";
	}
}

function criarTabela () {
	let headers = ["Sub-rede", "Endereço de rede", "Máscara", "Endereço de broadcast", "Intervalo de host", "Quantidade de hosts"];
	let tabela = document.createElement("table");
	let tbody = document.createElement("tbody");
	tabela.id = "tabela";
	tbody.id = "tabelaConteudo";
	
	let tr = document.createElement("tr");
	for (let i = 0; i < headers.length; i++){
		let th = document.createElement("th");
		th.innerHTML = headers[i];
		tr.appendChild(th);
	}

	tbody.appendChild(tr);
	tabela.appendChild(tbody);
	document.getElementById("resultado").appendChild(tabela);
}

function criarLinha (divisao, id, mascara, broadcast, ip) {
	let subredeQuantidade = 2 ** (divisao % 8);
	let intervaloMascara = 256/subredeQuantidade;
	let quantidadeHost = [2**(32 - divisao)-2];

	while (id.length < 4) {
		id.push(0);
	}

	while (mascara.length < 4) {
		mascara.push(0);
	}

	while (broadcast.length < 4) {
		broadcast.push(255);
	}

	for (let i = 0; i < subredeQuantidade; i++) {
		if (divisao != 32) {
			id[Math.floor(divisao/8)] = i*intervaloMascara;
			broadcast[Math.floor(divisao/8)]=(1+i)*intervaloMascara-1;
		}

		let intervaloInicial = id.slice();
		let intervaloFinal = broadcast.slice();

		linha = document.createElement("tr");
		linha.classList.add("linha");

		for (let i = 0; i < 4; i++) {
			if ((ip[i] >= intervaloInicial[i]) && (ip[i] <= intervaloFinal[i])) {
				if (i == 3) {
					linha.classList.add("destaque-verde");
				}
			} else {
				break;
			}
		}

		if (divisao > 30) {
			intervalo = ["---"];
		} else {
			intervaloFinal[3] -= 1;
			intervaloInicial[3] += 1;
			intervalo = intervaloInicial.join(".") + " até " + intervaloFinal.join(".");
		}

		resultado = [i, id, mascara, broadcast, intervalo, quantidadeHost];

		for (let i = 0; i < resultado.length; i++) {
			elemento = document.createElement("td");
			if (i >= 1 && i <= 3) {
				elemento.innerHTML = resultado[i].join(".");
				if (i == 1) {
					elemento.innerHTML += "/" + divisao;
				}
			} else {
				elemento.innerHTML = resultado[i];
			}
			linha.appendChild(elemento);
		}
		document.getElementById("tabelaConteudo").appendChild(linha);
	}
}

function calc () {
	let tipo = parseInt(document.getElementById("tipo-div").getAttribute("data-selecionado"));
	let ip;
	let divisao;
	let quantidadeHost;

	switch (tipo) {
		case 0: //mascara
			ip = document.getElementById("ip-mascara").value.split(".");
			divisao = parseInt(document.getElementById("mascara-valor").value);
			break;
		case 1: //hosts
			ip = document.getElementById("ip-host").value.split(".");
			quantidadeHost = parseInt(document.getElementById("host-valor").value);
			divisao = Math.floor(32 - (Math.log(quantidadeHost+2)/Math.log(2)));
			break;
	}

	if (ip != "" && divisao >= 0 && divisao <= 31) {
		let rede = [];
		let mascara = [];
		let submascara, id, broadcast;

		if (document.getElementById("tabela") != null) {
			document.getElementById("tabela").remove();
		}
		criarTabela();

		for (let i = 0; i < Math.floor(divisao/8); i++) {
			rede.push(ip[i]);
			mascara.push(255);
		}
		
		id = rede.slice();
		broadcast = rede.slice();

		if (divisao % 8 !== 0) {
			submascara = 0;

			for (let i = 7; i > (7 - (divisao % 8)); i--) {
				submascara += 2 ** i;
			}
			mascara.push(submascara);

		}

		criarLinha(divisao, id, mascara, broadcast, ip);
	}
}

function adicionar () {
	let tabela = document.getElementById("tabela");
	document.getElementById("tabela").remove();
	tabela.id = "";

	let nome = document.createElement("input");
	nome.type = "text";
	nome.classList.add("nomeTabela");
	nome.placeholder = "Insira o nome da tabela";

	document.getElementById("imprimir").appendChild(nome);
	document.getElementById("imprimir").appendChild(tabela);

	if (document.getElementById("btnImprimir") == null) {
		let botao = document.createElement("button");
		botao.innerHTML = "Imprimir";
		botao.setAttribute('onclick','window.print()');
		botao.id = "btnImprimir";
		document.body.appendChild(botao);
	}
}
