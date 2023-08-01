/*
	ZeroFour by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		offsetY: -22,
		mode: 'fade',
		noOpenerFade: true,
		speed: 300,
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'<span class="title">' + $('#logo').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

})(jQuery);

function checkboxToString(theField) {
	if (theField.checked == true) {
		return 'Sim';
	} else {
		return 'Não';
	}
}

//-------------------------------------------------------



var mapa = L.map('mapa').setView([39.3999, -8.2245], 6); // Define a posição inicial do mapa e o nível de zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18,
}).addTo(mapa);

function buscarPontosDeInteresse() {
	var localidade = document.getElementById('localidade').value;

	// Fazer uma solicitação AJAX para obter dados de pontos de interesse da localidade desejada
	// e adicionar marcadores ao mapa

	// Exemplo de código para adicionar um marcador
	var marcador = L.marker([40.6339, -8.6599]).addTo(mapa);
	marcador.bindPopup('Estrada do Cercal 449, 3720-511 Santiago da Riba-Ul').openPopup();

	var marcador = L.marker([41.1456, -8.6110]).addTo(mapa);
	marcador.bindPopup('R. de São Filipe de Nery, 4050-546 Porto').openPopup();

	var marcador = L.marker([38.7223, -9.1393]).addTo(mapa);
	marcador.bindPopup('Praça Marquês de Pombal, 1250-097 Lisboa').openPopup();

	var marcador = L.marker([40.4168, -3.7038]).addTo(mapa);
	marcador.bindPopup('A-4, salida 22, 28330 San Martín de la Vega, Madrid, Espanha').openPopup();
}

function numberonly(input) {
	var num = /[^0-9]/g;
	input.value = input.value.replace(num, "");
}

function lettersonly(input) {
	var let = /[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/gi;
	input.value = input.value.replace(let, "");
}

function Email(input) {
	var mail = /[^\S+\@\S+\.\S]/gi;
	input.value = input.value.replace(mail, "");
}

function codpostal(input) {
	var cod = /[^\d-]/gi;
	input.value = input.value.replace(cod, "");
}


function validarFormulario() {
	var campo1 = document.getElementById('nome').value;
	var campo2 = document.getElementById('tele').value;
	var campo3 = document.getElementById('mail').value;
	var campo4 = document.getElementById('postal').value;
	var campo5 = document.getElementById('predio').value;
	var campo6 = document.getElementById('fracoes').value;

	if (campo1 === '' || campo2 === '' || campo3 === '' || campo4 === '' || campo5 === '' || campo6 === '') {
		alert('Por favor, preencha todos os campos!');
		return false; // Impede o envio do formulário
	}

	// Outras validações, se necessário
	else {
		const cliente = {};

		cliente.nome = document.formulario.nome.value;
		cliente.tele = document.formulario.tele.value;
		cliente.mail = document.formulario.mail.value;
		cliente.postal = document.formulario.postal.value;
		cliente.predio = document.formulario.predio.value;
		cliente.fracoes = document.formulario.fracoes.value;

		console.log(cliente);
		alert("Pedido realizado com sucesso!");
		return true;
	} // Permite o envio do formulário
}






