<?php
    require_once __DIR__ . "/../models/ClienteModel.php";
    require_once __DIR__ . "/PasswordController.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";

    class ClientesController{
        public static function create($conn, $data){
            $data['senha'] = PasswordController::generateHash($data['senha']);

            $result = ClientesModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente criado com sucesso']);
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

        $user = ClientesModel::validateClient($conn, $data['email'], $data['senha']);
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