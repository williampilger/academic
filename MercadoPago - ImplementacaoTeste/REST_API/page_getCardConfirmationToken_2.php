<?php
    require_once __DIR__.'/_local/cred.php';
    require_once __DIR__.'/../_local/MercadoPago.class.php';

    $mp = new MercadoPago(MP_credentials['ENV_ACCESS_TOKEN'], MP_credentials['APP_ID']);

    $cards = $mp->Customer_get($_)
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get card token</title>

    <script src="https://sdk.mercadopago.com/js/v2"></script>

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
        
        #form-checkout {
            display: flex;
            flex-direction: column;
            max-width: 600px;
        }

        .container {
            height: 18px;
            display: inline-block;
            border: 1px solid rgb(118, 118, 118);
            border-radius: 2px;
            padding: 1px 2px;
        }
  </style>

</head>
<body>
    <div class="center">

        <form id="form-checkout" method="POST" action="/process_payment">
            <select type="text" id="form-checkout__cardId"></select>
            <div id="form-checkout__securityCode-container" class="container"></div>
            <input name="token" id="token" hidden>
            <button>Enviar</button>
        </form>
    </div>
    <script>
        const mp = new window.MercadoPago('<?php echo MP_credentials['PUBLIC_KEY']; ?>');

        const securityCodeElement = mp.fields.create('securityCode', {
            placeholder: "CVV"
        }).mount('form-checkout__securityCode-container');

        const customerCards = <?php  ?>;

        function appendCardToSelect() {
        const selectElement = document.getElementById('form-checkout__cardId');
        const tmpFragment = document.createDocumentFragment();
        customerCards.forEach(({ id, last_four_digits, payment_method }) => {
            const optionElement = document.createElement('option');
            optionElement.setAttribute('value', id)
            optionElement.textContent = `${payment_method.name} ended in ${last_four_digits}`
            tmpFragment.appendChild(optionElement);
        })
        selectElement.appendChild(tmpFragment)
        }

        appendCardToSelect();

        const formElement = document.getElementById('form-checkout');
        formElement.addEventListener('submit', e => createCardToken(e));
        const createCardToken = async (event) => {
            try {
                const tokenElement = document.getElementById('token');
                if (!tokenElement.value) {
                event.preventDefault();
                const token = await mp.fields.createCardToken({
                    cardId: document.getElementById('form-checkout__cardId').value
                });
                tokenElement.value = token.id;
                console.log(tokenElement);
                }
            } catch (e) {
                console.error('error creating card token: ', e)
            }
        }

    </script>
    

</body>
</html>