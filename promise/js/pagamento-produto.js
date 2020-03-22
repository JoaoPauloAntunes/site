// Manipulador de eventos análogo a: "$(document).ready(function() {});"
$(document).ready(function() {
	$('.comprar').click(function() {
		$.ajax({
			async: true,
			url: 'ajax/ajax-pagamento-produto.php',
			type: 'post',
			dataType: 'json',
			data: {
				op: 'pagar-produto',
				// produto: {
				// 	id: '0193386052319',
				// 	nome: 'Notebook Ultrafino S145, Lenovo, Ideapad, Intel Core i7, 12 GB RAM, Tela 15.6", windows_10, Prata',
				// 	marca: 'Lenovo',
				// 	cor: 'prata',
				// 	qtd: 1,
				// 	pacoteOffice: true
				// }
			},
			success: function(response) {
				console.log(response);
			},
			error: function(response) {
				console.log(response);
			}
		});

		aguardando();
	});
});


function aguardando() {
	setInterval(function() { console.log("Já passou 1 segundo"); }, 1000);
}