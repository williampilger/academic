# MercadoPago -> Testes de API

Implementação básica da API de pagamentos do MercadoPago.
Este repositório trata-se apenas de uma página com exemplos da utilização em pequenas etapas.

No exemplo `MP_Default` foi usado o SDK padrão fornecido pelo MercadoPago, no entanto não consegui entender as necessidades, não é intuitiva o suficiente para se saber o que está errado nas requisições, as classes não parecem estar atualizadas. Não achei a solução boa, e não é funcional. Mantive o código para fins de consulta.

No exemplo `REST_API` usei apenas a API REST do MercadoPago, fazendo requisições usando cURL, inclusive no server-side. Respostas bem claras em JSON, muito, mas muito mais fácil de utilizar.

## Como usar

 - **1** - Preencha suas credenciais no arquivo `_local/cred.php` dentro da pasta do exemplo.
 - **2** - *APENAS NO EXEMPLO DEFAULT* instale as dependências:
   - **Ambiente local, linux**: `composer install`
   - **Ambiente de produção, servidor apache**: `php composer.phar install`
 - **3** - Execute o servidor PHP de teste (ou suba pro seu site...):
   - **No linux**: `php -S localhost:8080` por exemplo.