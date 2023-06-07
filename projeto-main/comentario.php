<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Receitinhas</title>

    <!---css--->
    <link rel="stylesheet" type="text/css" href="assets/base.css">
    <link rel="stylesheet" type="text/css" href="assets/receita-individual.css">
    <link rel="icon" href="img/cupcake.png">


    <!--icons-->
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <!--fonte-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

</head>

<body>

    <!---header--->
    <header>
        <a href="index.html" class="logo"><img src="img/cupcake.png"></a>

        <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Sobre</a></li>
            <li><a href="receitas.html">Receitas</a></li>
            <li><a href="comunidade.html">Novidades</a></li>
            <li><a href="index.html">Contato</a></li>
        </ul>

        <div class="icons">
            <div class="bx bx-menu" id="menu-icon"></div>
        </div>

    </header>

    <section class="receitas">
        <div class="principal-receita">
            <div class="imagem">
                <img src="img/bolo-chocolate.jpg">
            </div>
            <div class="titulos">
                <div class="caixa-titulos">
                    <h1>Bolo de chocolate com calda 🍫🎂</h1>
                    <h5>Bolo delicioso com calda quente!</h5>
                </div>
            </div>
        </div>

        <div class="outros">
            <div class="informacoes">
                <div class="informacao1">
                    <i class="ri-bar-chart-line"></i>
                    <h3>DIFICULDADE</h3>
                    <h4>Fácil</h4>
                </div>
                <div class="informacao">
                    <i class="ri-team-line"></i>
                    <h3>PORÇÕES</h3>
                    <h4>6</h4>
                </div>
                <div class="informacao">
                    <i class="ri-time-line"></i>
                    <h3>TOTAL</h3>
                    <h4>40 min</h4>
                </div>
            </div>

            <div class="ingredientes">
                <div class="detalhes">
                    <h1>Ingredientes</h1>
                    <ul>
                        <li>2 xícaras (chá) de farinha de trigo</li>
                        <li>1 e 3/4 xícaras (chá) de açúcar</li>
                        <li>3/4 xícara (chá) de cacau em pó</li>
                        <li>1 e 1/2 colheres (chá) de fermento em pó</li>
                        <li>1 e 1/2 colheres (chá) de bicarbonato de sódio</li>
                        <li>1 colher (chá) de sal</li>
                        <li>2 ovos</li>
                        <li>1 xícara (chá) de leite</li>
                        <li>1/2 xícara (chá) de óleo vegetal</li>
                        <li>2 colheres (chá) de extrato de baunilha</li>
                        <li>1 xícara (chá) de água quente</li>
                        <li>1 xícara (chá) de açúcar de confeiteiro</li>
                        <li>3 colheres (sopa) de cacau em pó</li>
                        <li>3 colheres (sopa) de manteiga derretida</li>
                        <li>3 colheres (sopa) de leite</li>
                    </ul>
                </div>
                <hr>
                <div class="preparo">
                    <h1>Modo de preparo</h1>
                    <ul>
                        <li>1. Preaqueça o forno a 180°C. Unte e enfarinhe uma forma redonda.</li>
                        <li>2. Em uma tigela grande, misture a farinha, o açúcar, o cacau em pó, o fermento, o
                            bicarbonato e o sal.</li>
                        <li>3. Adicione os ovos, o leite, o óleo e a baunilha à mistura seca. Bata em velocidade média
                            por cerca de 2 minutos.</li>
                        <li>4. Adicione a água quente e bata novamente até que a massa fique homogênea.</li>
                        <li>5. Despeje a massa na forma preparada e leve ao forno por aproximadamente 30-35 minutos, ou
                            até que um palito inserido no centro saia limpo.</li>
                        <li>6. Enquanto o bolo assa, prepare a calda: em uma tigela, misture o açúcar de confeiteiro, o
                            cacau em pó, a manteiga derretida e o leite até obter uma consistência lisa.</li>
                        <li>7. Retire o bolo do forno e deixe esfriar por alguns minutos na forma. Em seguida,
                            desenforme-o e coloque-o em um prato de servir.</li>
                        <li>8. Regue o bolo com a calda de chocolate, permitindo que escorra pelas laterais.</li>
                        <li>9. Sirva o bolo de chocolate com calda acompanhado de sorvete ou frutas, se desejar.</li>
                    </ul>

                </div>
            </div>

            <div class="dicas">
                <div class="dicas-img">
                    <img src="img/ame.png">
                </div>
                <div class="dicas-texto">
                    <h1>Dicas</h1>
                    <ul>
                        <li>- Utilize ingredientes de boa qualidade.</li>
                        <li>- Pré-aqueça o forno corretamente antes de assar o bolo.</li>
                        <li>- Peneire os ingredientes secos para evitar grumos na massa.</li>
                        <li>- Não bata a massa em excesso para evitar que o bolo fique duro.</li>
                    </ul>
                </div>
            </div>

    <h1>Sistema de Comentários</h1>

    <h2>Deixe um comentário:</h2>
    <form action="processa_comentario.php" method="POST">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" required><br>
        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" required></textarea><br>
        <input type="submit" value="Enviar">
    </form>

    <h2>Comentários:</h2>
    <?php
    // Conexão com o banco de dados
    $conn = new mysqli('localhost', 'root', '', 'syscomentario');
    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Consulta os comentários no banco de dados
    $sql = "SELECT * FROM comentario";
    $result = $conn->query($sql);

    if (!$result) {
        echo "Erro na consulta SQL: " . $conn->error;
    } else {
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<p><strong>" . $row['nome'] . "</strong>: " . $row['mensagem'] . "</p>";
            }
        } else {
            echo "Nenhum comentário encontrado.";
        }
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
    ?>

<section>
        <div class="footer">
            <div class="principal">
                <div class="caixa-f">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Sobre mim</a></li>
                        <li><a href="#hobbies">Hobbies</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div class="caixa-f">
                    <h4>Redes sociais</h4>
                    <div class="social">
                        <a href="https://www.linkedin.com/in/dayse-campos-dev/"><i
                                class='bx bxl-linkedin-square'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                        <a href="https://github.com/dayseCampos"><i class='bx bxl-github'></i></a>
                        <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                    </div>
                </div>

                <div class="caixa-f">
                    <h4>Colaboradores</h4>
                    <ul>
                        <li><a href="#home">Dayse Campos</a></li>
                        <li><a href="#sobre">Carlos Brittes</a></li>
                        <li><a href="#destaques">Thiago Espirito Santo</a></li>
                        <li><a href="#materias">Pedro Pedroca</a></li>
                        <li><a href="#contato">Dandan</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </section>


    <!---javascript--->
    <script type="text/javascript" src="scripts/receitas.js"></script>
    <script type="text/javascript" src="scripts/script.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>

</body>

</html>
