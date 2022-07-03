## Seja bem-vindo(a) ao projeto da API cookenu!

Esse projeto foi proposto pela Labenu para o exercício dos conteúdos aprendidos nas aulas de classes e Programação orientada à objetos(POO).
Você pode encontrar um descrição completa abaixo, e o link para a documentação da api no fim deste ReadME.
A API foi criada pensando na simulação de um site de receitas, possuindo funcionaliades para controlar os usuários e receitas.

<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/LzpKzp8/2.png" alt="2" border="0" align="center"></a>

<br>
<br>

## Funcionalidades :wrench:

### Usuários :woman: :man:

#### - Criar usuário: 
Registra um novo usuário no sistema. Possui controle para não permitir que um mesmo email seja cadastrado mais de uma vez.

#### - Login:
Faz o ogin de um usuário. Possui controle para verificar se um usuário é cadastrado no sistema e verificação de senha.

#### - Pegar o próprio perfil: 
Pega o perfil de um usuário. Possui verificação do token de acesso para saber se o usuário está logado.

#### - Pegar o perfil de outro usuário:
Pegar o perfil de outro usuário do site. Possui verificação do token de acesso para saber se o usuário está logado, e também verifica se aquele usuário existe no sistema.

#### - Seguir um usuário: 
Segue um usuário registrado no perfil. Possui verificação da existência de um usuário no sistema. Verifica se o usuário está logado através do token de acesso.

#### - Deixar de seguir um usuário:
Deixa de seguir um usuário. Verifica se o usuário está logado através do token de acesso. Também verifica se o usuário está sendo seguido.
