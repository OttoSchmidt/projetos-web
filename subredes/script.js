function calc () {
	let ip = document.getElementById("num").value.split(".");
	let divisao = parseInt(document.getElementById("rede").value);
	
	if (ip == "" || divisao == "") {
		return 1;
	}

	if (divisao % 8 == 0) {
		let intervaloInicial, intervaloFinal, id, broadcast, linha, elemento, intervalo, resultado;
		let rede = [ip[0]];
		let mascara = [255];
		
		for (let i = 1; i < Math.floor(divisao/8); i++) {
			rede.push(ip[i]);
			mascara.push(255);
		}
	
		id = rede.slice();
		broadcast = rede.slice();

	  	while (id.length < 4) {
			id.push(0);
			mascara.push(0);
			broadcast.push(255);
		}

		intervaloInicial = id.slice();
		intervaloInicial[3] += 1;
		intervaloFinal = broadcast.slice();
		intervaloFinal[3] -= 1;

		intervalo = intervaloInicial.join(".") + " até " + intervaloFinal.join(".");

		resultado = [id, mascara, broadcast, intervalo];
		linha = document.createElement("tr");
		for (let i = 0; i < resultado.length; i++) {
			elemento = document.createElement("td");
			if (i != 3) {
				elemento.innerHTML = resultado[i].join(".");
			} else {
				elemento.innerHTML = resultado[i];
			}
			linha.appendChild(elemento);
			
		}
		document.getElementById("resultado").appendChild(linha);
	} else if (divisao < 24) {
		
	}

	
}