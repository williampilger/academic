<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HomePage</title>
    <style>
        html, body{
            width: 100%;
            height: 100%;
        }
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: gray;
        }
        .center{
            display: flex;
            flex-direction: column;
            width: fit-content;
            background-color: white;
            border-radius: 10px;
            padding: 20px;
        }
        a {
            display: inline-block;
            padding: 5px;
            border: 1px solid black;
            border-radius: 7px;
            text-align: center;
        }
  </style>
</head>
<body>
    <div class='center'>
        <h1>Testes de API - MercadoPago</h1>
        <a href="/page_UserCreateTest.php">Cadastrar Novo Cliente</a>
        <a href="/page_listUsers.php">Listar Clientes</a>
        <a href="/page_listUsersCards.php">Listar Cartões por Clientes</a>
        <a href="/page_CardPaymentTest.php">Pagamento com Cartão de Crédico</a>
    </div>
</body>
</html>
