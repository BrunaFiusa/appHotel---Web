<?php
require_once "PasswordController.php";
require_once __DIR__ ."/../models/UserModel.php";
require_once __DIR__ ."/../models/ClientesModel.php";
require_once __DIR__ . "/../helpers/token_jwt.php";

class AutController {
    public static function login($conn, $data){
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

        // Confirma se tem algum campo vazio
        if (empty($data['email']) || empty($data['senha'])){
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Preencha todos os campos!"
            ], 401);
        }

        $user = UserModel::validateUser($conn, $data['email'], $data['senha']);
        if ($user){
            $token = createToken($user);
            return jsonResponse([ "token" => $token ]);
        }else{
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Credenciais inválidas!"
            ], 401);
        }
    }

    public static function loginCliente($conn, $data){
        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['senha']);

        // Confirma se tem algum campo vazio
        if (empty($data['email']) || empty($data['senha'])){
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Preencha todos os campos!"
            ], 401);
        }

        $user = ClientesModel::validateCliente($conn, $data['email'], $data['senha']);
        if ($user){
            $token = createToken($user);
            return jsonResponse([ "token" => $token ]);
        }else{
            return jsonResponse([
                "status"=>"erro",
                "message"=>"Credenciais inválidas!"
            ], 401);
        }
    }
}
?>