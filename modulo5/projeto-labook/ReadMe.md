## Seja bem-vindo(a) à API Labook!

Esse foi projeto proposto pela Labenu para o exercício dos conteúdos aprendidos na semana de arquietura limpa e boas práticas na escrita de código.
Abaixo você encontra uma descrição completa dos endpoints, junto com o link para a documentação ao final.
Esse projeto simula um sistema parecido com o Facebook, onde podemos criar o nosso perfil e adicionar amigos.

<br>

## Tecnologias utilizadas :computer: 

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>


## Bibliotecas utilizadas :books:
- Express
- Cors
- Dotenv
- Knex
- UUID
- JsonWebToken
- Bycript

## Funcionalidades :wrench:

### Usuários :woman: :man:

#### - Criar usuário: 
Registra um novo usuário no sistema. Verifica se o email enviado já está cadastrado no sistema. Retorna um token de autenticação. 

#### - Login:
Faz o login de um usuário. Possui controle para verificar se um usuário é cadastrado no sistema e verificação de senhas.
Retorna um token de autenticação.

#### - Fazer amizade: 
Adiciona um usuário ao seus amigos. Verifica se o usuário está logado através do token de acesso; e verifica a existência do usuário a ser adicionado como amigo no sistema.

#### - Desfazer amizade:
Verifica se o usuário está logado através do token de acesso. Também verifica se o usuário está na sua lista de amigos antes de deletá-lo.

<br>

### Posts :computer: :speech_balloon:

#### - Criar post:
Adiciona um novo post ao perfil do usuário. Possui verificação de login com o token de acesso. Esse endpoint também verifica se o post já foi publicado por aquela pessoa antes de enviá-lo. 

#### - Pegar um post:
Pega um post pelo id dele. Possui verificação da existência desse post no sistema. Também verifica se o usuário está logado através do token de acesso.