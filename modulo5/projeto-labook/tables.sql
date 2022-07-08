-- Active: 1656515652142@@35.226.146.116@3306@silveira-21814615-maria-meireles

CREATE TABLE labook_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT = "normal" 
);

ALTER TABLE CHANGE COLUMN role role VARCHAR(255) NOT NULL DEFAULT "normal";
SELECT * FROM labook_users;

CREATE TABLE labook_posts(
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(255) NOT NULL DEFAULT "normal"
);

CREATE TABLE intermediate_friends (
    user_id VARCHAR(255) NOT NULL,
    friends_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id),
    FOREIGN KEY (friends_id) REFERENCES labook_users(id)
);

CREATE TABLE labook_posts(
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(255) NOT NULL DEFAULT "normal",
    creators_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (creators_id) REFERENCES labook_users(id)
);

SELECT * FROM labook_posts;

CREATE TABLE intermediate_likes (
    user_id VARCHAR(255) NOT NULL,
    posts_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id),
    FOREIGN KEY (posts_id) REFERENCES labook_posts(id)
);

SELECT * FROM intermediate_likes;