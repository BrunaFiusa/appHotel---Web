<?php
class PhotoModel{
    
    public static function getAll($conn) {
        $sql = "SELECT * FROM imagens";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM imagens WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function getByRoomId($conn, $id) {
        $sql = "SELECT i.nome 
        FROM foto f
        JOIN imagens i ON f.imagem_id = i.id 
        WHERE f.quarto_id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $photos = [];
        while ($row = $result->fecth_assoc()){
            $photos[] = $row['nome'];
        }
        return $photos;
    }

    public static function create($conn, $name, $caminho) {
        $sql = "INSERT INTO imagens (nome, caminho) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $name, $caminho);
        if ($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }

    public static function createRelationRoom($conn, $idRoom, $idPhoto) {
        $sql = "INSERT INTO fotos (quarto_id, imagem_id) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $idRoom, $idPhoto);
        if ($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE imagens SET nome=?, caminho=? WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si",
            $data["nome"],
            $data["caminho"],
            $id
        );
        return $stmt->execute();
    }

     public static function delete($conn, $id) {
        $sql = "DELETE FROM imagens WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }
}
?>