<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";

class ClientesModel{
    public static function listarTodos($conn){
        $sql = "SELECT * FROM clientes";
    }

    public static function buscarPorId($conn){
        $sql = "SELECT * FROM clientes WHERE id = ?";
    }

    public static function criar($conn){
    }

    public static function atualizar($conn){
    }

    public static function deletar($conn){
    }
}
?>