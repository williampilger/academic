<?php
    require_once __DIR__.'/_local/cred.php';
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Payment</title>
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
        #form-newUser {
            display: flex;
            flex-direction: column;
        }
        #form-newUser input{
            margin: 5px;
        }
        hr{
            width: 100%;
            margin: 5px 0 15px 0;
        }
  </style>
</head>
<body>
    <div class="center">
        <h1>Modificar Cadastro de Usuário</h1>
        <span>Os dados não são carregados automaticamente neste exemplo. <br> Somente serão substituidos dados preenchidos. <br> <br></span>
        
        <form id="form-newUser" action="/ajax/update_user.php/" method="POST">
            
            <input type="text" id="form-checkout__description" name="description" placeholder="Descrição da compra" />
            <input type="text" id="form-checkout__external_reference" name="external_reference" placeholder="ID do produto" />
            <input type="text" id="form-checkout__issuer_id", name="issuer_id", claceholder="APP ID" value="<?php echo MP_credentials['APP_ID'] ?>" required >
            <input type="hidden" id="form-checkout__installments" name="installments" value=1 required />

            <hr>
           
            <input type="text" id="form-checkout__payer" name="payer" placeholder="ID do Cliente" required />
            <input type="text" id="form-checkout__payment_method_id" name="payment_method_id" placeholder="ID do Método de pagamento" required />
            <input type="text" id="form-checkout__payment_token" name="token" placeholder="Token" required />
            <input type="number" id="form-checkout__payment_transaction_amount" name="transaction_amount" placeholder="Valor a ser cobrado" required />


           
    
            
            <button type="submit" id="form-newUser__submit">Atualizar</button>
        </form>

    </div>

</body>
</html>
