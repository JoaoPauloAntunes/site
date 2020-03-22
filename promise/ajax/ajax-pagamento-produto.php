<?php
	$op = filter_input(INPUT_POST, 'op');
	if (!empty($op)) {
		$response = "Nenhuma operação foi realizada";
		if ($op == 'pagar-produto') {
			// faz esperar em segundos
			sleep(5);

			$response = 'pagamento realizado!';
		}

		echo json_encode($response);
		exit;
	}