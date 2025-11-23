<?php
    // Conectar ao banco SQLite
    $db = new PDO("sqlite:database.db");

    // Receber dados do formulário
    $username = $_POST['username'];
    $email = $_POST['email'];

    // Preparar e inserir no banco
    $stmt = $db->prepare("INSERT INTO users (username, email) VALUES (:username, :email)");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);

    if ($stmt->execute()) {
        echo "Usuário salvo com sucesso!";
    } else {
        echo "Erro ao salvar usuário.";
    }
?>