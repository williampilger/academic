<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HomePage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="base-flex">

    <div class='center base-flex'>
        <h1>Testes de API - MercadoPago - Checkout Transparente</h1>
        <span>Testando API MercadoPago, <strong>usando o SDK oficial no backend.</strong></span>
        <div class="group2 base-flex">
            <div class="sec base-flex">
                <h3>Clientes</h3>
                <div class="psec base-flex">
                    <h4>Cadastro</h4>
                    <a href="/page_Client-New.php">Cadastrar Novo Cliente</a>
                    <a href="/page_Client-List.php">Listar Clientes</a>
                    <a href="/.php">#Excluir Cliente</a>
                </div>
                <div class="psec base-flex">
                    <h4>Cartões</h4>
                    <a href="/page_Client-ListCards.php">Listar Cartões por Clientes</a>
                    <a href="/.php">#Atribuir Cartão ao Cliente</a>
                    <a href="/.php">#Criar Token de Cartão (Novo Cartão)</a>
                </div>
            </div>
            <div class="sec base-flex">
                <h3>Pagamentos</h3>
                <div class="psec base-flex">
                    <h4>Pagamento Simples (Cartão de Crédito)</h4>
                    <a href="/page_Payment-NewPay.php">Pagamento com Cartão de Crédico (Default Form) </a>
                    <a href="/.php">#Estornar Pagamento</a>
                    <a href="/.php">#Consultar Pagamento</a>
                </div>
                <div class="psec base-flex">
                    <h4>Assinaturas / Reccorência (Cartão de Crédito)</h4>
                    <a href="/.php">#Criar Pagamento Recorrente</a>
                    <a href="/.php">#Cancelar Assinatura Recorrente</a>
                    <a href="/.php">#Estornar Pagamento</a>
                    <a href="/.php">#Consultar Pagamento</a>
                </div>
            </div>
        </div>
        <span># - Recursos ainda não desenvolvidos</span>
    </div>

</body>
</html>
