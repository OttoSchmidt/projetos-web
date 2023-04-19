function atualizar () {
	let tipo = document.getElementById("tipo");
	let input = document.getElementsByClassName("input-mascara-hosts")[0];
	if (tipo.selectedIndex == 0) {
		input.id = "rede";
		input.placeholder = "/";
	} else if (tipo.selectedIndex == 1) {
		input.id = "host";
		input.placeholder = "";
	}
	input.value = "";

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

function criarLinha (divisao, id, mascara, broadcast) {
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

		intervaloInicial = id.slice();
		intervaloInicial[3] += 1;
		intervaloFinal = broadcast.slice();
		intervaloFinal[3] -= 1;
		
		if (divisao > 30) {
			intervalo = ["---"];
		} else {
			intervalo = intervaloInicial.join(".") + " até " + intervaloFinal.join(".");
		}

		resultado = [i, id, mascara, broadcast, intervalo, quantidadeHost];

		linha = document.createElement("tr");
		linha.classList.add("linha");
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
	let ip = document.getElementById("num").value.split(".");
	let divisao = document.getElementById("rede");
	let quantidadeHost = document.getElementById("host");

	if (divisao == null) {
		divisao = Math.floor(32 - (Math.log(parseInt(quantidadeHost.value)+2)/Math.log(2)));
		quantidadeHost = parseInt(quantidadeHost.value);
	} else {
		divisao = parseInt(divisao.value);
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

		if (divisao % 8 == 0) {
			criarLinha(divisao, id, mascara, broadcast);

		} else {
			submascara = 0;

			for (let i = 7; i > (7 - (divisao % 8)); i--) {
				submascara += 2 ** i;
			}
			mascara.push(submascara);

			criarLinha(divisao, id, mascara, broadcast);
		}
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
