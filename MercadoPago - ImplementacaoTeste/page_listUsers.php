<?php require_once __DIR__.'/_local/cred.php'; ?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
  </style>
</head>
<body>
    <div class="center">
        <h1>Pesquisar usuários existentes</h1>
        <form id="form-newUser" action="/ajax/find_user.php/" method="POST">
            <input type="text" id="form" name="find" placeholder="Search" />
            <button type="submit" id="form-newUser__submit">Criar</button>
        </form>

    </div>

</body>
</html>