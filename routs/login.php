<?php
require_once __DIR__ . "/../controllers/AutController.php";


if ( $_SERVER['REQUEST_METHOD'] == "POST" ){
    $opcao = $segments[2] ?? null;
    $data = json_decode( file_get_contents('php://input'), true );

    if ( $opcao == "clientes" ) {
        AutController::loginCliente($conn, $data);
    } else if ( $opcao == "funcionarios" ) {
        AutController::login($conn, $data);
    } else {
        jsonResponse(['status'=>'erro', 'message'=>'rota não existe'], 405);
    }
    
} 

//Teste
elseif ( $_SERVER['REQUEST_METHOD'] == "PUT" ){
    validateTokenAPI();
    jsonResponse(['message'=> 'resposta que deu certo'], 200);
}
//Fim do teste

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'
    ], 405);
}
?>