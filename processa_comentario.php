<?php
// Verifica se o formulário foi submetido
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Dados do formulário
    $nome = $_POST['nome'];
    $mensagem = $_POST['mensagem'];

    // Conexão com o banco de dados
    $conn = new mysqli('localhost', 'root', '', 'syscomentario');
    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Insere o comentário no banco de dados
    $sql = "INSERT INTO comentario (nome, mensagem) VALUES ('$nome', '$mensagem')";
    if ($conn->query($sql) === TRUE) {
        echo "Comentário enviado com sucesso!";
    } else {
        echo "Erro ao enviar o comentário: " . $conn->error;
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>