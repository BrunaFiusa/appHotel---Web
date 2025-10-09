<?php
require_once __DIR__ . "/../controllers/PedidosController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $segments[2] ?? null;

    if (isset($id)) {
        PedidosController::getById($conn, $id);
    } else {
        PedidosController::getAll($conn);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $opcao = $segments[2] ?? null;
    $data = json_decode(file_get_contents('php://input'), true);

    if ( $opcao == "reservar") {
        PedidosController::createOrder($conn, $data);
    } else {
        PedidosController::create($conn, $data);
    }
}

else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}
?>