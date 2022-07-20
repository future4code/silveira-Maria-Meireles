-- Active: 1656515652142@@35.226.146.116@3306@silveira-21814615-maria-meireles
CREATE TABLE amaro_sellers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE amaro_products (
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    type VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL
);

ALTER TABLE amaro_products ADD COLUMN gender VARCHAR(255) NOT NULL;

SELECT * FROM amaro_products;