function criarLinha (divisao, id, mascara, broadcast) {
	let subredeQuantidade = 2 ** (divisao % 8);
	let intervaloMascara = 256/subredeQuantidade;
	
	while (id.length < 4) {
		id.push(0);
		mascara.push(0);
		broadcast.push(255);
	}

	for (let i = 0; i < subredeQuantidade; i++) {
		id[Math.floor(divisao/8)] = i*intervaloMascara;
		broadcast[Math.floor(divisao/8)]=(1+i)*intervaloMascara-1;

		intervaloInicial = id.slice();
		intervaloInicial[3] += 1;
		intervaloFinal = broadcast.slice();
		intervaloFinal[3] -= 1;

		intervalo = intervaloInicial.join(".") + " até " + intervaloFinal.join(".");

		resultado = [i, id, mascara, broadcast, intervalo];
		linha = document.createElement("tr");
		for (let i = 0; i < resultado.length; i++) {
			elemento = document.createElement("td");
			if (i == 4 || i == 0) {
				elemento.innerHTML = resultado[i];
			} else {
				elemento.innerHTML = resultado[i].join(".");
			}
			linha.appendChild(elemento);
		}
		document.getElementById("resultado").appendChild(linha);
	}
}

function calc () {
	let ip = document.getElementById("num").value.split(".");
	let divisao = parseInt(document.getElementById("rede").value);
	
	if (ip == "" || divisao == "") {
		return 1;
	}

	let rede = [];
	let mascara = [];

	for (let i = 0; i < Math.floor(divisao/8); i++) {
		rede.push(ip[i]);
		mascara.push(255);
	}
	
	let id = rede.slice();
	let broadcast = rede.slice();

	if (divisao % 8 == 0) {
		criarLinha(divisao, id, mascara, broadcast);
	} else if (divisao < 24) {
		let submascara = 0;

		for (let i = 7; i > (7 - (divisao % 8)); i--) {
			submascara += 2 ** i;
		}

		mascara.push(submascara);
		id.push(0);
		broadcast.push(255);

		criarLinha(divisao, id, mascara, broadcast);
	}

	
}

