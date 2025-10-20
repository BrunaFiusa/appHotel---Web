<?php
    require_once __DIR__ . "/../models/PedidoModel.php";
    require_once "ValidatorController.php";

    class PedidosController{
        public static function create($conn, $data){
            $result = PedidosModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Pedido criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function getAll($conn) {
            $list = PedidosModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = PedidosModel::getById($conn, $id);
            return jsonResponse($result);
        }

        public static function createOrder($conn, $data){
            $data["usuario_id"] = isset($data['usuario_id']) ? $data['usuario_id']: null;
            ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);
            foreach($data['quartos'] as $quarto){
                ValidatorController::validate_data($quarto, ["id", "inicio", "fim"]);
            }
            if( count($data['quartos']) == 0){
                return jsonResponse(['message' => 'Não existe reservas'], 400);
            }
            //PedidosModel::createOrder($conn, $data);
        }

        public static function createOrder($conn, $data){
            $data['usuario_id'] = isset($data['usuario_id']) ? $data['usuario_id'] : null;
            ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);

            foreach ($data['quartos'] as $quarto) {
                ValidatorController::validate_data($quarto, ["id", "inicio", "fim"]);
                $quarto['inicio'] = ValidatorController::fix_hours($quarto['inicio'], 14);
                $quarto['fim'] = ValidatorController::fix_hours($quarto['fim'], 12);
            }

            if(count($data['quartos']) == 0){
                jsonResponse(['message'=> 'Reservas não existentes'], 400);
                exit;
            }

            try {
                $result = PedidosModel::createOrder($conn, $data);
                return jsonResponse(['message'=> $result]);
            } catch (\Throwable $erro) {
                return jsonResponse(['message'=>$erro->getMessage()], 500);
            }
        }








        public static function delete($conn, $id){
            $result = PedidosModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Pedido deletado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function update($conn, $id, $data){
            $result = PedidosModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Pedido atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
}
?>