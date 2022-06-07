# Exercícios de aprofundamento em SQL

##### 1 - a) 
`ALTER TABLE Actor DROP COLUMN salary;`
Esse comando irá fazer uma alteração na tabela "Actor", deletando a coluna de "salary".

###### b) 
`ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`
Essa Query irá alterar o nome da coluna "gender" para "sex", e colocará um limite de 6 caracteres.

###### c)
`ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`
Essa Query diz que a coluna "gender" deve se mantr com o mesmo nome, 
e diz que ela será uma string de até 255 caracteres.

###### d)
`ALTER TABLE actor CHANGE gender gender VARCHAR(100);`

##### 2 - a)
```
UPDATE actor 
SET name = "Cláudia Raia", birth_date = "1987/05/20"
WHERE id = "0003";
```

###### b)
```
UPDATE actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

###### c)
```
UPDATE actor 
SET name = "Leonardo DiCaprio",
salary = 1000000000000,
birth_date = "1974/11/11",
gender = "male"
WHERE id = "0005";
```

###### d)
```
UPDATE actor
SET name = "Maria Eduarda"
WHERE name = "aaaa";
```
Não deu erro. :/

##### 3 - a)
`DELETE FROM actor WHERE name = "Fernanda Montenegro"; `

###### b) 
`DELETE FROM actor WHERE gender = "male" AND salary > 10000000;`

##### 4 - a)
`SELECT MAX(salary) FROM actor;`

###### b)
`SELECT MIN(salary) FROM actor WHERE gender="female";`

###### c)
`SELECT COUNT(*) FROM actor WHERE gender = "female";`

###### d)
`SELECT sum(salary) FROM actor;`

##### 5 - a)
```
SELECT COUNT(*), gender
FROM actor
GROUP BY gender;
```
Ele me retornou um 3, que é a quantidade de atrizes caracterizadas com gênero feminino na tabela.

###### b)
```
SELECT id, name
FROM actor ORDER BY name DESC;
```

###### c)
`SELECT * FROM actor WHERE gender = "male" ORDER BY salary ASC;`

###### d)
`SELECT * FROM actor ORDER BY salary ASC LIMIT 3;`

###### e)
```
SELECT AVG(salary), gender FROM actor
GROUP BY gender;
```

##### 6 - a)
`ALTER TABLE movie ADD playing_limit_date DATE DEFAULT "2022/07/20";`

###### b)
`ALTER TABLE movie CHANGE score score FLOAT;`

###### c)
`UPDATE movie SET playing_limit_date = "2022/07/21" WHERE id = "001";`

###### d)
`UPDATE movie SET playing_limit_date = "2022/05/10" WHERE id = "002";`

###### e) 
```
DELETE FROM movie WHERE id = "003";
UPDATE movie SET sinopse = "bla bla bla bla"
WHERE id = "003";
```
Não apareceu na tabela, mas também não me resultou um erro. :/

##### 7 - a)
`SELECT * FROM movie WHERE score > 7.5;`

###### b)
`SELECT AVG(score) from movie;`

###### c)
`SELECT COUNT(*) FROM movie;`

###### d)
`SELECT COUNT(*) FROM movie WHERE releaseDate > CURDATE();`

###### e)
`SELECT MAX(score) FROM movie;`

###### f)
`SELECT MIN(score) FROM movie;`

##### 8 - a)
`SELECT * FROM movie ORDER BY name ASC;`

###### b)
`SELECT * FROM movie ORDER BY name DESC LIMIT 2;`
###### c)
`SELECT * FROM movie ORDER BY DATEDIFF(CURDATE(), releaseDate) / 365 ASC LIMIT 3;`

###### d)
`SELECT * FROM movie ORDER BY score DESC LIMIT 2;`

