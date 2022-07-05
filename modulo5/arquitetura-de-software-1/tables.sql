-- Active: 1656515652142@@35.226.146.116@3306@silveira-21814615-maria-meireles

CREATE TABLE taskList_user (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT 'normal'
);

