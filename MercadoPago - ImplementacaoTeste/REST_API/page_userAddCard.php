<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar Cartão</title>
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
        <h1> <span class="side">[SERVER-SIDE]</span> Salvar cartão</h1>
        <span>Salvar cartão (tokenizado, usando o serviço adequado) para um usuário específico.</span>
        <form id="form-newUser" action="/ajax/saveCard_user.php/" method="POST">
            <input type="text" id="card" name="card" placeholder="Card Token" />
            <input type="text" id="ID" name="id" placeholder="User ID" />
            <div>
                <input type="checkbox" id="json" name="json">
                <label for="json">Resultado Completo</label>
            </div>
            <button type="submit" id="form-newUser__submit">Salvar</button>
        </form>
    </div>
</body>
</html>