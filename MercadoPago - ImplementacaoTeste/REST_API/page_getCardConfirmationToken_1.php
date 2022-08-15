<?php
    require_once __DIR__.'/_local/cred.php';
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Start Payment - Saved Card</title>
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
        .side{
            color: orange;
            font-size: small;
            vertical-align: middle;
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
        <h1> <span class="side">[SERVER-SIDE]</span> Iniciar pagamento com cartão salvo.</h1>
        <span>Este passo serve apenas para obter o ID de usuário. Em seguida será exibido o formulário para o usuário correspondente. <br> <br></span>
        
        <form id="form-newUser" action="/page_getCardConfirmationToken_2.php/" method="POST">
            
            <input type="text" id="form-checkout__payer" name="id" placeholder="ID do Cliente" required />
            
            <button type="submit" id="form-newUser__submit">Continuar para o passo 2 (Autorização) </button>
        </form>

    </div>

</body>
</html>
