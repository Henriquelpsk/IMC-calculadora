const form = document.querySelector('.form');

//CANCELAR RELOAD DA PAGINA
form.addEventListener('submit', function (evento) {
	evento.preventDefault();
	//SELECIONA OS INPUTS
	const inputPeso = document.querySelector('.peso');
	const inputAltura = document.querySelector('.altura');
	//CAPTURA OS VALORES
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);
	if (!peso) {
		resultadomsg('Peso invalido', false);
		return;
	}
	if (!altura) {
		resultadomsg('Altura invalida', false);
		return;
	}
	const imc = getImc(peso, altura);
	const getNivelImc = nivelImc(imc);

	const msg = `Seu IMC é ${imc} (${getNivelImc}).`;
	resultadomsg(msg, true);
});

//FUNÇÕES

//CALCULADOR DE NIVEL
function nivelImc(imc) {
	const nivel = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

	if (imc > 39.9) {
		return nivel[5];
	} else if (imc >= 35 && imc <= 39.9) {
		return nivel[4];
	} else if (imc >= 30 && imc <= 34.9) {
		return nivel[3];
	} else if (imc >= 25 && imc <= 29.9) {
		return nivel[2];
	} else if (imc >= 18.5 && imc <= 24.9) {
		return nivel[1];
	} else if (imc < 18.5) {
		return nivel[0];
	}
}
//CALCULADOR DE IMC
function getImc(peso, altura) {
	const total = peso / (altura * altura);
	return total.toFixed(2);
}
//CRIADOR DE PARAGRAFOS
function criaP() {
	const p = document.createElement('p');
	return p;
}
//MOSTRAR O RESULTADO NA TELA
function resultadomsg(msg, isValid) {
	const resultado = document.querySelector('.resultado');
	resultado.innerHTML = ''; // ZERA O RESULTADO
	const p = criaP();
	//DEFINE A COR DE FUNDO DEPENDENDO DA RESPOSTA	
	if (isValid) {
		p.classList.add('pResultadoTrue');
	} else {
		p.classList.add('pResultadoFalse')
	}

	p.innerHTML = msg
	resultado.appendChild(p)
}
