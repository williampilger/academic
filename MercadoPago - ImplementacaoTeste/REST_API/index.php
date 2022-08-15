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
        .base-flex {
            display: flex;
            margin: 5px;
            padding: 10px;
            border-radius: 10px;
        }
        body{
            
            justify-content: center;
            background-color: gray;
        }
        .center{
            flex-direction: column;
            width: fit-content;
            background-color: white;
        }
        a {
            display: inline-block;
            padding: 5px;
            margin: 5px;
            border: 1px solid black;
            border-radius: 7px;
            text-align: center;
            text-decoration: none;
            color: blue;
            font-weight: bold;
        }
        .group2{
            justify-content: space-around;
        }
        .psec{
            flex-direction: column;
            border: 1px solid green;
        }
        .gsec{
            flex-direction: column;
            border: 1px solid red;
        }
        .sec{
            flex-direction: column;
            justify-content: center;
            border: 1px solid green;
        }
        .sec h3{
            margin: 3px;
        }
  </style>
</head>
<body>
    <div class='center base-flex'>
        <h1>Testes de API - MercadoPago</h1>
        <span>Usando API REST com cURL no backend (Sem a biblioteca <strong>MercadoPago/sdk</strong> ).</span>
        <span>Assim as respostas e envios são sempre em JSON, mais fácil de entender o que está acontecendo.</span>
        <div class="group2 base-flex">
            <div class="psec base-flex">
                <h3>Clientes</h3>
                <a href="/page_UserCreateTest.php">Cadastrar Novo Cliente</a>
                <a href="/page_listUsers.php">Listar Clientes</a>
                <a href="/page_getUser.php">Obter Cliente</a>
                <a href="/page_UserModify.php">Modificar Cliente</a>
                <a href="/page_userAddCard.php">Adicionar Cartão</a>
                <a href="/page_listUsersCards.php">Listar Cartões por Clientes</a>
            </div>
            <div class="psec base-flex">
                <h3>Outros</h3>
                <a href="/page_CardTokenization.php">Criar Token de cartão (FRONT)</a>
                <a href="/page_CardGet.php">Obter dados "completos" de um cartão</a>
            </div>
        </div>
        <div class="group2 base-flex">

            <div class="gsec base-flex">
                <h3>Checkout Transparente</h3>
                <div class="sec base-flex">
                    <h4>Pagamento Único</h4>
                    <a href="/page_createPayment.php">Criar Pagamento <strong>[FAILL]</strong> </a>
                    <a href="/page_CardPaymentTest.php">Pagamento com Cartão de Crédico</a>
                </div>
            </div>
            <div class="gsec base-flex">
                <h3>Chekout PRO</h3>
                <div class="sec base-flex">
                    <h4>Pagamento único</h4>
                    <a href="/page_createOrder.php"> Criar Pedido (Checkout Pro - Passo 1) </a>
                </div>
                <div class="sec base-flex">
                    <h4>Pagamento Recorrente</h4>
                    <a href="/page_createSubscription.php">Criar Assinatura</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
