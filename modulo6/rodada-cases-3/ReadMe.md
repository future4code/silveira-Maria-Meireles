### Rodada cases 3: Projeto Back-end da estante virtual

#### Sobre o projeto:
Esse é um projeto legado da estante virtual, que nos foi passado pela Labenu para treinar casos de empregabilidade
no mundo real. O projeto consiste em uma pequena api para cadastrar dados de duas competições olímpicas:
Lançamento de dardos e 100 metros rasos. Abiaxo encontra-se uma descrição de cada um dos endpoints e o link para sua documentação.

#### Register (http://localhost:3306/competition/register):
Endpoint para registrar uma nova competição no sistema. Possui controle de entradas para os 3 dados recebidos,
não podendo passar o mesmo nome de competição duas vezes, nem escolher um valor de tipo que esteja fora do estipulado, e o mesmo vale para os status de andamento. Recebe um body com as seguintes propriedades:

```
{
    "name": "",
    "type": "aceita os valores dardos ou cemm",
    "status": "aceita os status concluida e inconcluida"
}
```

#### RegisterResult (http://localhost:3306/result/register):
Endpoint para registrar uma pontuação para uma das duas competições olímpicas disponíveis.
O endpoint possui tratamento de dados para checar se o mesmo atleta já possui outra pontuação registrada, 
não permitindo que ele se registre mais de uma vez. Verifica também a validade das unidades de medida enviadas,
e se o valor enviado como resultado é um número. Recebe um body com as seguintes propriedades: 
```
{
    "competition": "",
    "athleteName": "",
    "result": "",
    "unity": "aceita os valores m ou s"
}
```

#### ChangeCompetitionStatus (http://localhost:3306/competition/end):
Endpoint para encerrar uma competição. Confere se aquela competição já não foi finalizada, e caso tenha sido, retorna apenas uma mensagem de aviso sem fazer nenhuma alteração. Depois que uma competição tem o seu status alterado para "concluida", não é mais possível adicionar pontuações pelo endpoint descrito anteriormente. Recebe um body com a seguinte propriedade:
```
{
    "competitionId": ""
}
```

#### GetCompetitionRanking (http://localhost:3306/result/ranking)
Endpoint para pegar os resultados de uma competição. Antes de retornar os resultados, esse endpoint verifica se a conpetição já foi encerrada, e caso ainda não tenha sido, retorna um ranking juntamente com uma mensagem de que se trata apenas de um ranking temporário. Recebe um body com o nome da competição:

``` 
{
    "name": ""
}
```


#### Link para a documentação:

https://documenter.getpostman.com/view/20359123/VUjPJ5xg


#### Tecnologias e bibliotecas utilizadas:
- Typescript;
- Node.js;
- MySQL;
- Express;
- Cors;
- Dotenv;
- uuid;
- Knex.

#### Tabelas sql:

```
CREATE TABLE olympic_Competition (
    id VARCHAR(255) PRIMARY KEY,
    competition_name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);
```

```
CREATE TABLE competition_result (
    id VARCHAR(255) PRIMARY KEY,
    competition VARCHAR(255) NOT NULL,
    athlete VARCHAR(255) NOT NULL,
    result_value FLOAT NOT NULL,
    unidade VARCHAR(2) NOT NULL
);
```