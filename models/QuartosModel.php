<?php
class QuartosModel{
    public static function create($conn, $data) {
        $sql = "INSERT INTO quartos (nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco, disponivel) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidi",
            $data["nome"],
            $data["numero"],
            $data["qtd_cama_casal"],
            $data["qtd_cama_solteiro"],
            $data["preco"],
            $data["disponivel"]
        );
        return $stmt->execute();
    }

    public static function getAll($conn) {
        $sql = "SELECT * FROM quartos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM quartos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM quartos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE quartos SET nome=?, numero=?, qtd_cama_casal=?, qtd_cama_solteiro=?, preco=?, disponivel=? WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidii",
            $data["nome"],
            $data["numero"],
            $data["qtd_cama_casal"],
            $data["qtd_cama_solteiro"],
            $data["preco"],
            $data["disponivel"],
            $id
        );
        return $stmt->execute();
    }

    public static function buscarDisponivel($conn, $data) {
        $sql = "SELECT 
    q.*,
    (q.qtd_cama_casal * 2 + q.qtd_cama_solteiro) AS qtd
FROM quartos q
WHERE q.disponivel = 1 
AND (q.qtd_cama_casal * 2 + q.qtd_cama_solteiro) >= 4
AND q.id NOT IN (
    SELECT r.quarto_id 
    FROM reservas r
    WHERE r.fim > '2025-09-01 14:00:00'  
    AND r.inicio < '2025-09-30 12:00:00' 
);";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss",
            $data["reservas.fim"],
            $data["reservas.inicio"]
        );
        return $stmt->execute();
    }
}
?>