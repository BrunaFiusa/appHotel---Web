<?php
    require_once __DIR__ ."/controllers/AutController.php";
    require_once __DIR__ ."/controllers/PasswordController.php";
    
    $data = [
        "email" => "osanaam@gmail.com",
        "senha" => "121274"
    ];

    AutController::login($conn, $data);

    //echo PasswordController::generateHash($data['senha']);
    //$hash = '$2y$10$zVUF94elzqw1oGIh.dtL6Og5fHv/x/EFEeAtMQ6ncxg/o8mrvNcDu';
    //echo "<br>";
    //echo PasswordController::validateHash($data['senha'], $hash);

?>