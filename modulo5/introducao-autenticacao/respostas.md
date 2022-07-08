## Exercícios discursivos

#### 1)
##### a) 
Acredito que ambos sejam equivalentes, a depender apenas da maneira como esses id's são criados.
Quando se gera strings criptografadas ou números aleatórios, temos um sistema protegido, pois seria difícil 
encontrar um padrão entre essas codificações e fazer uma possível invasão ao sistema. O problema estaria em criarmos
esses valores manualmente, já que isso facilitaria a identificação de um padrão.

#### 2)
##### a)
O código mostrado no exercício começa atribuindo o nome da tabela que será usada nos endpoints à uma variável,
para facilitar a troca caso haja alguma mudança no nome da tabela. Após isso, o código se divide em duas funções:
"connection" e "createUser". A função connection é a responsável por estabelecer uma conexão com o banco de dados,
passando todos os dados necessários para isso.
A função createUser é a responsável por criar um novo usuário no banco de dados. Ela vai receber um body com "id",
"email" e "senha" e inserirá esses valores na tabela de usuários.

##### b)
```
CREATE TABLE usuarios (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
```

#### 3)
##### a)
O argumento "as" seguido do tipo serve como uma maneira de dar certeza à linguagem de programação qual o valor
que aquele dado terá. No exemplo do exercício, o "as string" está ali para evitar possíveis erros de tipagem feitos
pelo Typescript.

#### 7)
###### a)
O argumento "as any" no fim da função, significa que o retorno dos dados pegados pelo token podem ser de qualquer tipo
(array, objeto, boolean...).