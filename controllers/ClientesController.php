<?php
    require_once __DIR__ . "/../models/ClientesModel.php";
    require_once __DIR__ . "/PasswordController.php";
    require_once __DIR__ . "/AutController.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";

    class ClientesController{

        public static function create($conn, $data){
            $login = [
                "email" => $data['email'],
                "senha" => $data['senha'],
            ];

            $data['senha'] = PasswordController::generateHash($data['senha']);
            $result = ClientesModel::create($conn, $data);

            if($result){
                AutController::loginCliente($conn, $login);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = ClientesModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = ClientesModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function delete($conn, $id){
            $result = ClientesModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Cliente deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
            $result = ClientesModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
    }
?>