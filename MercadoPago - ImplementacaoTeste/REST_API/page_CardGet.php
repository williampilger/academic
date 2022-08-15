<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Card</title>
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
  </style>
</head>
<body>
    <div class="center">
        <h1> <span class="side">[SERVER-SIDE]</span> Obter dados do cartão por cliente</h1>
        <span>Função um tanto quanto inútil, aparentemente. <br> Retorna algumas poucas informações a mais que a listagem simples. <br> <br> </span>
        <form id="form-newUser" action="/ajax/get_card.php/" method="POST">
            <input type="text" id="user" name="userid" placeholder="ID do USUÁRIO" />
            <input type="text" id="card" name="cardid" placeholder="ID do CARTÃO" />
            <div>
                <input type="checkbox" id="json" name="json">
                <label for="json">Resultado Completo</label>
            </div>
            <button type="submit" id="form-newUser__submit">Carregar</button>
        </form>

    </div>

</body>
</html>