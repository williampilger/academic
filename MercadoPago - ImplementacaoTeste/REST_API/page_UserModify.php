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
        <h1> <span class="side">[SERVER-SIDE]</span> Modificar Cadastro de Usuário</h1>
        <span>Os dados não são carregados automaticamente neste exemplo. <br> Somente serão substituidos dados preenchidos. <br> <br></span>
        
        <form id="form-newUser" action="/ajax/update_user.php/" method="POST">
            <input type="text" id="form-checkout__id" name="id" placeholder="ID do usuário (OBRIGATÓRIO)" />
            <hr>
            <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />
            <input type="text" id="form-checkout__cpf" name="cpf" placeholder="CPF, sem pontos e traço" />
            <div>
                <input type="text" id="form-checkout__zip" name="zip" placeholder="CEP" />
                <input type="text" id="form-checkout__street" name="street" placeholder="Rua" />
                <input type="number" id="form-checkout__number" name="number" placeholder="Número" />
            </div>
    
            
            <button type="submit" id="form-newUser__submit">Atualizar</button>
        </form>

    </div>

</body>
</html>
