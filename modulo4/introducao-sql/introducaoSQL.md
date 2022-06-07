# Exercícios de introdução ao MySQL WorkBench

```
CREATE TABLE actor (
id VARCHAR(255) PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
); 
```

###### 1-a)
-- id: VARCHAR(255) define que o id será um strind de no máximo 255 caracteres. NOT NULL especifica que esse valor
-- não pode deixar de ser fornecido, e PRIMARY KEY é a chave única que cada coluna da tabela deve ter, aqui definida
-- como sendo o id. name e gender: Assim como no id, VARCHAR(255) define que essas propriedades dserão strings de no 
-- máximo 255 caracteres para name, e no máximo 6 para gender, e NOT NULL define que estes parâmetros não podem estar
-- vazios. birth_date: DATE define que a propriedade receberá uma data, e NOT NULL especifica que ela não poderá 
-- estar vazia.

###### b)
`SHOW DATABASES; `
-- Esse comando me mostrou o nome do banco de dados que estou trabalhando.

`SHOW TABLES; `
-- Esse me mostra as tabelas criadas, que nesse caso, é apenas "actor".

###### c)
`DESCRIBE actor; `
-- Esse comando me mostra a estrutura da minha tabela, especificando o nome, tipo de valor, e restrições que cada
-- uma delas possui.

###### 2)
```
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES (
"0001",
"Tony Ramos",
400000,
"1948-09-25",
"male"
);
```

###### a)
```
INSERT INTO actor ()
VALUES (
"0002",
"Glória Pires",
1200000,
"1963/08/23",
"female"
);
```

###### b) 
```
INSERT INTO actor ()
VALUES (
"0002",
"Cléo",
120000,
"1986/07/12",
"female"
);
```
-- O erro que essa query me retornou foi: "ERROR CODE: 1062. Duplicate entry '0002' for key 'PRIMARY'".
-- Esse erro acontece porque essas chaves são únicas, e devem ter um valor diferente para cada elemento presente
-- na tabela.

###### c)
```
INSERT INTO actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
-- Já essa query me retornou o erro "ERROR CODE: 1136. Column count doens't match value count at row 1".
-- Esse erro aconteceu porque essa query tenta passar mais valores do que as colunas declaradas acima.

###### d)
```
INSERT INTO actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
-- Essa query me retornou o erro "ERROR CODE: 1364. Field "name" doens't have a default value.
-- Esse erro acontece porque quando criamos nossa tabela, especificamos que nenhum dos valores nela poderia
-- ser passado vazio.

###### e)
```
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
-- Essa query me retornou o erro "ERROR CODE: 1292. Incorrect value "1950" for column bitrh_fate at row 1.
-- Esse erro aconteceu porque a data de nascimento da atriz não estava envolta em uma string.

###### f)
```
INSERT INTO actor ()
VALUES (
"0003",
"Leopoldo Pacheco",
8000000,
"1960/09/21",
"male"
);
```

```
INSERT INTO actor ()
VALUES (
"0004",
"Marina Ruy Barbosa",
90000000,
"1995/06/30",
"female"
);
```

###### 3-a)
`SELECT * FROM actor WHERE gender = "female"; `

###### b) 
`SELECT salary FROM actor WHERE name = "Tony Ramos"; `

###### c)
`SELECT * FROM actor WHERE gender = "invalid"; `
-- Me retornou uma tabela de valores null, já que nenhum dos gêneros tem esse valor.

###### d)
`SELECT id, name, salary FROM actor WHERE salary <= 500000; ` 

###### e)
`SELECT id, name from actor WHERE id = "0002"; `
-- Ele tinha me retornado um erro porque a propriedade estava name estava com o nome "nome".

###### 4)
`SELECT * FROM actor WHERE (name LIKE "A%" OR name LIKE "j%") AND salary > 30000; ` 
###### a) A Query demonstrada acima vai buscar todos os dados de uma coluna na tabela que corresponda às seguintes
-- regras: Que seu nome comece com a letra "a" ou "j", e sey salário seja maior que 30.000.

###### b)
`SELECT * FROM actor WHERE (name <>"A%") AND salary > 35000000; `

###### c)
`SELECT * FROM actor WHERE name LIKE "%g%"; `

###### d) 
`SELECT * FROM actor WHERE (name LIKE "%A%" OR name LIKE "%G%") and salary BETWEEN 35000000 AND 90000000; `

###### 5 - a) 
```
CREATE TABLE movie (
id VARCHAR(255) PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
releaseDate DATE NOT NULL,
score INT NOT NULL
);
```
-- Essa query cria mais uma tabela, mas dessa vez de filmes. Ela define o id, que será a chave única de cada item,
-- o nome, a sinopse, a data de lançamento e a pontuação desse filme. Todos os valores estão marcados como NOT NULL
-- para que eles não possam ser enviados vazios.

###### b)
```
INSERT INTO movie ()
VALUES (
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006/01/06",
07
);
```

###### c)
```
INSERT INTO movie ()
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
 empregada e amiga de Dona Picucha, nuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);
```

###### d)
```
INSERT INTO movie ()
VALUES (
"003",
"Dona flor e seus dois maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
 "2017/11/02",
 08
);
```

###### e)
```
INSERT INTO movie ()
VALUES (
"004",
"Central do Brasil",
"Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, 
que ditam o que querem contar às suas famílias. Ela embolsa o dinheiro sem sequer postar as cartas. 
Um dia, Josué, o filho de nove anos de idade de uma de suas clientes, 
acaba sozinho quando a mãe é morta em um acidente de ônibus. 
Ela reluta em cuidar do menino, mas se junta a ele em uma viagem pelo interior do Nordeste em busca do pai de Josué,
 que ele nunca conheceu.",
 "1998/04/03",
 09
);
```

###### 6 - a)
`SELECT id, name, score FROM movie WHERE id = "001";`

###### b)
`SELECT * FROM movie WHERE name = "Central do Brasil";`

###### c)
`SELECT id, name, sinopse FROM movie WHERE score >= 7;`

###### 7 - a)
`SELECT * FROM movie WHERE name LIKE "%vida%";`

###### b)
`SELECT * FROM movie WHERE name LIKE "%vida%" OR sinopse LIKE "%vida%";`

###### c)
`SELECT * FROM movie WHERE releaseDate < "2008/06/06";`

###### d) 
`SELECT * FROM movie WHERE releaseDate < "2008/06/06" AND (name LIKE "%vida%" OR sinopse LIKE "%vida%") AND score >= 7;`


