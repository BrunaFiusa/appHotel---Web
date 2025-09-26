<?php
    require_once __DIR__ . "/../models/QuartosModel.php";

    class QuartosController{
        public static function create($conn, $data){
            $camposObrigatorios = ['nome', 'numero', 'qtd_cama_casal', 'qtd_cama_solteiro', 'preco', 'disponivel'];
            $camposFaltando = [];

            foreach ($camposObrigatorios as $campo) {
                if (!isset($data[$campo]) || empty($data[$campo])) {
                    $camposFaltando[] = $campo;
                }
            }

            if (!empty($camposFaltando)) {
                return jsonResponse(['message' => 'Erro, falta o campo: ' . implode(', ', $camposFaltando)]);
            }

            $result = QuartosModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Quarto criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = QuartosModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = QuartosModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function delete($conn, $id){
            $result = QuartosModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Quarto deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
            $result = QuartosModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function buscarDisponivel($conn,$data) {
            $resultado = QuartosModel::buscarDisponiveis($conn,$data);
            if ($resultado !== false && !empty($resultado)) {
                return jsonResponse(['mesage'=>"quartos Disponiveis", 'data'=> $resultado]);
            } else {
                return jsonResponse(['mesage'=>"erro ao buscar quartos disponiveis"],400);
            }
        }
}
?>