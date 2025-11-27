# Elicitação de Requisitos (Admin e Funcionário)

3.2 REQUISITOS FUNCIONAIS DO ATOR ADMINISTRADOR
RF01.: O sistema deve permitir que o administrador cadastre um funcionário.

Regras relacionadas: Devem ser preenchidos os campos obrigatórios:
Nome completo: deve conter pelo menos 4 caracteres. Não são permitidos números 
nem caracteres especiais, apenas letras e espaços;
E-mail: deve ser único;
Telefone: deve permitir apenas números.
Caso todos os campos sejam preenchidos, sistema deve permitir a finalização do 
cadastro. Caso o cadastro seja concluído com sucesso, o sistema deve armazenar os 
dados do funcionário, definir o status do funcionário como "ativo", gerar e salvar uma 
senha temporária e enviar um e-mail contendo essa senha ao funcionário. Também 
deve ser exibida uma mensagem de sucesso e retornar à tela inicial do administrador. 
Caso algum campo obrigatório seja preenchido incorretamente, não seja preenchido 
e/ou o e-mail já esteja em uso, o sistema deve exibir uma mensagem de erro 
informando o motivo.

RF02.: O sistema deve permitir que o administrador liste os funcionários cadastrados.

Regras relacionadas:
A consulta deve exibir uma listagem contendo, para cada funcionário, nome completo, 
e-mail, telefone, status e opção para visualizar o funcionário.
A listagem deve ser apresentada em ordem alfabética ascendente pelo nome do 
funcionário.
O sistema deve permitir a filtragem dos resultados por nome.
Caso não existam funcionários cadastrados, o sistema deve exibir a mensagem 
"Nenhum funcionário cadastrado".


RF03.: O sistema deve permitir que o administrador edite um funcionário.

Regras relacionadas: Podem ser editados os seguintes campos obrigatórios:
Status (ativo ou inativo);
Nome completo: deve conter pelo menos 4 caracteres. Não são permitidos números 
nem caracteres especiais, apenas letras e espaços;
E-mail: deve ser único;
Telefone: deve permitir apenas números.

O sistema deve apresentar também um botão para redefinir a senha do funcionário. 
Caso seja pressionado, o sistema deve exibir um botão “Confirmar” e um “Cancelar”.
Pressionando em “Cancelar”, o sistema deve retornar a tela de visualizar o perfil do 
funcionário. Pressionando em “Confirmar”, o sistema deve gerar e salvar uma nova 
senha temporária, após isso, envia um e-mail para o funcionário contendo a  senha.
As mesmas regras de validação aplicadas ao cadastro (RF01) devem ser consideradas 
na atualização.
Após a atualização, o sistema deve exibir uma mensagem de confirmação indicando 
que as informações foram atualizadas com sucesso e retornar à tela de listagem de 
funcionários.
Caso algum campo obrigatório seja preenchido incorretamente, não seja preenchido 
e/ou o e-mail já esteja em uso, o sistema deve exibir uma mensagem de erro 
informando o motivo.

RF04. O sistema deve permitir que o administrador e o funcionário listem os perfis de 
usuários.

Regras relacionadas:
A listagem deve exibir, para cada usuário, nome completo, se possui dependente (sim 
ou não), status e opção para visualizar o perfil;
A listagem deve ser apresentada em ordem alfabética ascendente pelo nome completo;
O sistema deve permitir a filtragem dos resultados por nome ou status;
Caso não existam usuários cadastrados, o sistema deve exibir a mensagem: "Nenhum 
usuário cadastrado.".

RF05. O sistema deve permitir que o administrador e o funcionário visualizem o perfil 
de um usuário.

Regras relacionadas: A visualização deve apresentar todas as informações 
cadastradas do usuário, com exceção do campo senha, incluindo:
Foto de perfil;
Descrição do perfil;
Status (ativo, inativo ou pendente);
Nome do usuário;
Nome completo;
E-mail;
Telefone;
Data de nascimento;
Endereço;

A tela de visualização deve conter opção para alterar o status do usuário, redefinir a 
senha e voltar à listagem. Caso o botão redefinir senha seja pressionado, o sistema 
deve exibir um botão “Confirmar” e um “Cancelar”. 
Pressionando “Cancelar”, o sistema deve retornar a tela de visualizar o perfil do 
usuário. Pressionando em “Confirmar”, o sistema deve gerar e salvar uma nova senha 
temporária, após isso, envia um e-mail para o usuário contendo a  senha. 
Após a atualização, o sistema deve exibir uma mensagem de confirmação indicando 
que as informações foram atualizadas com sucesso e retornar à tela de visualizar o 
perfil do usuario.

RF06. O sistema deve permitir que o administrador e o funcionário alterem o status um 
perfil de usuário.

Regras relacionadas:
Inativação:
Caso o administrador ou funcionário altere o status do usuário para inativo, o sistema 
deve verificar se o usuário possui pagamentos em aberto. Caso existam pagamentos 
em aberto, o sistema não deve permitir a inativação, exibindo uma mensagem 
informando o motivo.
Caso o usuário não tenha pagamentos em aberto, o administrador ou funcionário deve 
informar obrigatoriamente o motivo da inativação. Logo após, o sistema deve:
Alterar o status do usuário para inativo;
Registrar o motivo da inativação;
Enviar ao usuário uma notificação contendo o motivo da inativação;
Cancelar todos os agendamentos ativos do usuário;
Finalizar todas as sessões ativas do usuário;
Não permitir novos logins do usuário;
Exibir uma mensagem de sucesso ao administrador ou funcionário responsável pela 
ação;
Permanecer na tela de visualizar usuário.

Ativação:
Caso o status seja alterado para ativo, o administrador ou funcionário deve informar 
obrigatoriamente o motivo da ativação. Logo após, o sistema deve:
Alterar o status do usuário para ativo;
Registrar o motivo da ativação;
Exibir uma mensagem de sucesso ao administrador ou funcionário responsável pela 
ação;
Permanecer na tela de visualizar usuário.

RF07. O sistema deve permitir que o Administrador e o funcionário listem o histórico de 
pagamentos de um usuário.
Regras relacionadas: Deve haver um campo de busca onde será informado o nome do 
usuário ou seu e-mail. A consulta deve exibir uma listagem contendo os seguintes 
dados do usuário informado na busca: nome completo, e-mail, data do pagamento e 
status do pagamento ("Pago", "Em atraso", "Estorno" ou "Cancelado"), opção: alterar o 
status e opção: visualizar histórico.
A listagem deve ser apresentada em ordem decrescente pela data do pagamento.
O sistema deve permitir a filtragem dos resultados por status do pagamento e data.
Caso não existam pagamentos registrados no histórico, o sistema deve exibir a 
mensagem: "Nenhum pagamento registrado".

RF08. O sistema deve permitir que o Administrador e o funcionário visualizem o 
histórico de um pagamento.
Regras relacionadas: Ao visualizar o histórico de um pagamento, o sistema deve exibir 
uma lista com as seguintes informações em ordem decrescente por data da alteração: 
data e hora da alteração, status do pagamento antes da alteração, status do 
pagamento após a alteração, nome do Administrador ou funcionário que realizou a 
alteração e o motivo da alteração.
Caso não existam alterações registradas para o pagamento, o sistema deve exibir uma 
mensagem informando isso.

RF09. O sistema deve permitir que o Administrador e o funcionário alterem o status do 
pagamento de um usuário.
Regras relacionadas: O status do pagamento pode ser alterado para uma das 
seguintes opções: "Pago", "Em atraso", "Estorno" ou "Cancelado"; O Administrador ou 
funcionário deve informar obrigatoriamente o motivo da alteração.
Deve haver um botão “Confirmar” e um “Cancelar”. Ao pressionar “Cancelar”, o sistema 
deve retornar à tela de listagem de pagamentos.
Ao pressionar “Confirmar”, o sistema deve:
Alterar e salvar o status do pagamento para o status selecionado;
Registrar o motivo da alteração;
Enviar ao usuário uma notificação contendo: data e hora da alteração, status anterior e 
status posterior do pagamento;
Armazenar as informações da notificação no histórico do pagamento, acrescentando o 
nome do Administrador ou funcionário que realizou a alteração e o motivo informado.
Caso a justificativa não seja preenchida, uma mensagem de erro deve ser exibida 
informando o motivo.





3.3 REQUISITOS FUNCIONAIS DO ATOR FUNCIONÁRIO
RF01.:O sistema deve permitir que um funcionário altere sua senha provisória.
Regras relacionadas: Quando o funcionário inserir sua senha provisória recebida por e-mail (RF01 ADMINISTRADOR), o sistema deve permitir que o funcionário cadastre uma nova senha. Os campos obrigatórios devem ser preenchidos:
Nova senha: Não pode ser igual a uma senha provisória recebida, é necessário haver pelo menos 8 caracteres, contendo pelo menos uma letra maiúscula, minúscula, número e caractere especial;
Confirme a senha: Deve ser exatamente igual a senha informada no campo “Nova senha”.

Após inserir a nova senha, o funcionário deve selecionar “Confirmar”, o sistema deve exibir uma mensagem de confirmação indicando que a senha foi atualizada com sucesso e retornar à tela de login.
Caso o campo “Nova senha” ou  “Confirme a senha” obrigatórios sejam preenchidos incorretamente ou não sejam preenchidos, o sistema deve exibir uma mensagem de erro 
informando o motivo.

//TODO: FALTA ACABAR
RF02.: O
