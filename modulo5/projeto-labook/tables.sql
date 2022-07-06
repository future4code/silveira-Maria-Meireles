-- Active: 1656515652142@@35.226.146.116@3306@silveira-21814615-maria-meireles

CREATE TABLE labook_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT "normal" 
);

SELECT * FROM labook_users;

CREATE TABLE labook_posts(
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(255) NOT NULL DEFAULT "normal"
);