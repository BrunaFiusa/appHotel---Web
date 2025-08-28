<?php 
require_once __DIR__ ."/../controllers/PasswordController.php";

class QuartosModel{
    public static function listarTodos($conn){
        $sql = "SELECT * FROM quartos";
    }

    public static function buscarPorId($conn){
        $sql = "SELECT * FROM quartos WHERE id = ?";
    }

    public static function criar($conn){
    }

    public static function atualizar($conn){
    }

    public static function deletar($conn){
    }

    public static function buscarDisponiveis($conn){
    }
    
}
?>