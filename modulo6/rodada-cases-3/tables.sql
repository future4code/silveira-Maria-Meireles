-- Active: 1656515652142@@35.226.146.116@3306@silveira-21814615-maria-meireles

CREATE TABLE olympic_Competition (
    id VARCHAR(255) PRIMARY KEY,
    competition_name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);

SELECT * FROM olympic_Competition;

CREATE TABLE competition_result (
    id VARCHAR(255) PRIMARY KEY,
    competition VARCHAR(255) NOT NULL,
    athlete VARCHAR(255) NOT NULL,
    result_value FLOAT NOT NULL,
    unidade VARCHAR(2) NOT NULL
);

SELECT * FROM competition_result;