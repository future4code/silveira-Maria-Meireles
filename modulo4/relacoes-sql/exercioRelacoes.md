# Exercícios de relações em MySQL

##### 1 - a)
A "foreign key" é um comando sql que permite estabelecer uma relação entre duas tabelas.
Ele determina que a propriedade x só poderá receber os valores contidos nas colunas 
com a PRIMARY KEY da tabela de referência.

###### b)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO Rating() VALUES 
(
"jkgdjk", 
"Um filme nacional que entrou para história do cinema brasileiro. Com muito carisma e com atores consagrados da tv brasileira. Essa troca de sexo é engraçadíssima e voce não pode perder a melhor atuação de Tony Ramos. 
Hilariante e com piadas e cenas perfeitas, um dos clássicos nacionais com certeza. 
Não posso esquecer de parabenizar Daniel Filho por mais este grande filme",
4.2,
"001"
),
(
"ryryr",
"Que filme querido! Talvez eu esteja viajando, mas achei que o filme trata de um assunto profundo sendo mostrado de um jeito leve, 
até engraçadinho. É agradável rs",
4.5,
"002"
),
(
"rtdd",
"Na minha opinião é o melhor filme que o cinema brasileiro já fez. 
Retrata de maneira muito profunda a identidade da grande massa brasileira, mostra suas dificuldades, 
suas lutas, seus sonhos, retrata um povo pobre, humilde mais com uma imensa esperança de dias melhores.",
5,
"004"
),
(
"jfjkd",
"Esse filme foi lançado 4 anos antes de eu nascer, e digo que é o melhor filme que retrata o cenário de vida dos nossos avós e antepassados. 
Nunca vou encontrar em obra alguma, tanta riqueza como nesse tesouro.",
5,
"005"
),
(
"kjgdljdl",
"Filme lindo, divertido, com uma história que prende a gente de tal forma que fica difícil 
sair de frente da tela quando acaba! Pra quem gosta de drama romance e comédia, trem os três.",
4.4,
"006"
),
(
"jigjdm",
"Filme maravilhoso, um dos melhores filmes que eu já vi, é tudo muito bem feito, gravado,
 escrito e as atuações são incríveis, acredito que o filme bem feito seja o filme que quando
 assistimos esquecemos que estamos vendo um filme.",
 5,
 "007"
);
```

###### c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
(`silveira-21814615-maria-meireles`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))
```
Esse erro acontece porque os valores inseridos como id do filme precisam estar na tabela "movie", 
caso contrário, não haveria como estabelecer a relaçõ entre as duas.

###### d)
```
ALTER TABLE movie DROP COLUMN score;
```

###### e)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814615-maria-meireles`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))
```
O exercício resultou nesse erro porque o id do filmes está sendo referenciado na tabela de "Rating",
e como sua exclusão afetaria na outra tabela, a FOREIGN KEY bloqueia a deleção. 

##### 2 - a)
As tabelas de junção servem para auxiliar as relações de vários valores para vários, porque nessa relação
vários valores são passados para uma única coluna, e esse tipo de operação não é possível.
A tablea de junção irá armazenar essa informação de quem pertence à qual coluna de qual tabela.

###### b)
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movie(id),
    FOREIGN KEY (actor_id) REFERENCES actor(id)
);

INSERT INTO MovieCast VALUES 
("005", "003"),
("002", "003"),
("004", "003"),
("001", "0001"),
("007", "0002"),
("001", "0002");
```

###### c) 
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814615-maria-meireles`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`))
```
Ele me retornou esse erro porque não há como fazer a relação entre tabelas com valores inexistentes,
eles precisam estar definidos antes de realizarmos este tipo de operação.

###### d)
```
DELETE FROM actor WHERE id = "0002";

MENSAGEM DE ERRO: 
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814615-maria-meireles`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`id`))
```
Ele me retorna essa mensagem de erro pois não é possível deletar colunas que estejam relacionadas e 
que afetem outras tabelas.


##### 3 - a)
O operador "ON" representa uma operação condicional quando estamos usando o "JOIN", já que o comportamento
natural dele é buscar colunas que estejam presentes em ambas as tabelas e retornar todas as conexões possíveis
entre eles, quando usamos o "ON" estamos dizendo para ele unir apenas os dados que correspondam á condição imposta.

###### b)
```
SELECT name, movie.id, rate FROM movie JOIN Rating 
ON movie.id = Rating.movie_id;
```

##### 4 - a)
```
SELECT name, movie.id, rate, comment FROM movie LEFT JOIN Rating
ON movie.id = Rating.movie_id;
```

###### b)
```
SELECT movie.id, name, actor_id FROM movie RIGHT JOIN MovieCast 
ON movie.id = MovieCast.movie_id;
```

###### c) 
```
SELECT AVG(rate), movie.id, name FROM movie 
LEFT JOIN Rating ON movie.id = Rating.movie_id
GROUP BY (movie.id);
```