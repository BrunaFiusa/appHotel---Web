<?php
    require_once __DIR__ . "/../models/ClienteModel.php";

    class ClientesController{
        public static function create($conn, $data){
            $result = ClientesModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $roomList = ClientesModel::getAll($conn);
            return jsonResponse($roomList);
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