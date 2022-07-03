## Seja bem-vindo(a) ao projeto da API cookenu!

Esse projeto foi proposto pela Labenu para o exercício dos conteúdos aprendidos nas aulas de classes e Programação orientada à objetos(POO).
Você pode encontrar um descrição completa abaixo, e o link para a documentação da api no fim deste ReadME.
A API foi criada pensando na simulação de um site de receitas, possuindo funcionalidades para controlar os usuários e receitas.

<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/LzpKzp8/2.png" alt="2" border="0" align="center"></a>

<br>
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
Registra um novo usuário no sistema. Possui controle para não permitir que um mesmo email seja cadastrado mais de uma vez.

#### - Login:
Faz o login de um usuário. Possui controle para verificar se um usuário é cadastrado no sistema e verificação de senha.

#### - Pegar o próprio perfil: 
Pega o perfil de um usuário. Possui verificação do token de acesso para saber se o usuário está logado.

#### - Pegar o perfil de outro usuário:
Pegar o perfil de outro usuário do site. Possui verificação do token de acesso para saber se o usuário está logado, e também verifica se aquele usuário existe no sistema.

#### - Seguir um usuário: 
Segue um usuário. Possui verificação da existência do usuário no sistema. Verifica se o usuário está logado através do token de acesso.

#### - Deixar de seguir um usuário:
Deixa de seguir um usuário. Verifica se o usuário está logado através do token de acesso. Também verifica se o usuário está sendo seguido.

#### - pegar o feed:
Pega o feed de receitas criadas pelos usuários que você segue. Possui verificação de login com o token de acesso. E também verifica se existe alguma postagem.

#### Deletar um usuário:
Deleta o perfil de um usuário do sistema. Verifica se o usuário tentando deletar o perfil é um administrador, já que essa funcionalidade é isolada apenas para eles.

<br>

### Receitas :spaghetti: :fork_and_knife:

#### - Criar receita:
Registra uma nova receita no sistema. Possui verificação do token de acesso.

#### - Pegar uma receita:
Pega uma receita pelo id dela. Possui verificação da existência dessa receita no sistema. Também verifica se o usuário está logado através do token.

#### - Deletar receita:
Endpoint para deletar uma receita do sistema. Possui verificação de autorização por parte dos usuários. O usuário registrado como "normal" só pode excluir uma receita que seja dele mesmo, e um usuário registrado como "admin" pode excluir quaisquer receitas no sistema.

#### - Editar receita:
Atualiza os dados de uma receita. Possui verificação do tipo de usuário (somente usuários normais podem editar receitas), e também verifica se o usuário é o criador daquela receita, já que só ele está apto a editar receitas de autoria própria. Verifica login através do token de acesso.

Todos os endpoints descritos acima possuem uma verificação que checa se algum dos campos está vazio antes de enviar a requisição ao banco de dados.

<br> 

### Link para a documentação :bookmark_tabs: : 
https://documenter.getpostman.com/view/20359123/UzJFuxmZ#3332b0fe-8dfa-45aa-b69d-4e9f50e3a792
