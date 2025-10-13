<?php
    require_once __DIR__ ."/controllers/AutController.php";
    require_once __DIR__ ."/controllers/QuartosController.php";
    require_once __DIR__ ."/controllers/PasswordController.php";
    require_once __DIR__ ."/helpers/token_jwt.php";
    require_once __DIR__ "/models/ReservaModel.php";
    
    // $data = [
    //     "nome" => "Quarto kids",
    //     "numero" => 1,
    //     "qtd_cama_casal" => 2,
    //     "qtd_cama_solteiro" => 0,
    //     "preco" => 2500,
    //     "disponivel" => 1
    // ];

    // QuartosController::create($conn, $data);
    //QuartosController::update($conn, 5, $data);

    $id = 7;
    $inicio = "2025-10-10";
    $fim = "2025-10-15";

    if(ReservaModel::isConflict($id, $inicio, $fim)){
        echo("Deu merda!");
    } else {
        echo("Deu certo");
    }
    
    //AutController::login($conn, $data);
    //$token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNZXVTaXRlIiwiaWF0IjoxNzU2OTMwMTE5LCJleHAiOjE3NTY5MzM3MTksInN1YiI6eyJpZCI6Niwibm9tZSI6Ik9zYW5hIiwiZW1haWwiOiJvc2FuYWFtQGdtYWlsLmNvbSIsImNhcmdvIjoiR2VyZW50ZSJ9fQ.Yxm4ZKAoQTlswo6jW_DHMbFlUa-BYs5FsmhCuLlsLDk";
    //echo var_dump( validateToken($token));
    echo PasswordController::generateHash($data['senha']);
    //$hash = '$2y$10$zVUF94elzqw1oGIh.dtL6Og5fHv/x/EFEeAtMQ6ncxg/o8mrvNcDu';
    //echo "<br>";
    //echo PasswordController::validateHash($data['senha'], $hash);

?>