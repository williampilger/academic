<?php require_once __DIR__.'/_local/cred.php'; ?>

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
        <h1> <span class="side">[CLIENT-SIDE]</span> Criar Token de cartão</h1>
        <span>Obtém Token para cartão de crédito.</span>
        
        <form id="form-newCard" method="POST">
            <div>
                <label for="cardNumber">Número do Cartão (sem espaços, traços ou pontos)</label>
                <input type="text" id="cardNumber" placeholder="0000000000000000">
            </div>
            <div>
                <label for="expMonth">Mês de vencimento</label>
                <input type="number" id="expMonth" placeholder="XX">
            </div>
            <div>
                <label for="expYear">Ano de vencimento</label>
                <input type="number" id="expYear" placeholder="XXXX">
            </div>
            <div>
                <label for="cvv">CVV</label>
                <input type="number" id="cvv" placeholder="000">
            </div>
            <div>
                <label for="cpf">CPF do titular (sem traços ou pontos)</label>
                <input type="text" id="cpf" placeholder="00000000000">
            </div>
            <div>
                <label for="name">Nome do titular (bem como no cartão)</label>
                <input type="text" id="name" placeholder="JOAO DA SILVA">
            </div>

            <button type="submit" id="form-newCard__submit">Criar</button>
        </form>

    </div>

    <script src="https://sdk.mercadopago.com/js/v2"></script>

    <script>

        const createToken = async (e) => {

            e.preventDefault();

            const mp = new window.MercadoPago(
                '<?php echo MP_credentials['PUBLIC_KEY']; ?>'
            );

            const token = await mp.createCardToken({
                cardNumber: document.getElementById('cardNumber').value,
                cardholderName: document.getElementById('name').value,
                cardExpirationMonth: document.getElementById('expMonth').value,
                cardExpirationYear: document.getElementById('expYear').value,
                securityCode: document.getElementById('cvv').value,
                identificationType: 'CPF',
                identificationNumber: document.getElementById('cpf').value,
            });

            console.log("Token: ", token);
            //form.style = "display: none";

            alert(token.id);
        };

        const form = document.getElementById('form-newCard');
        const submit = document.getElementById('form-newCard__submit');
        submit.addEventListener('click', createToken);

    </script>
</body>
</html>