-- ======DROP DATABASE=================
DROP DATABASE IF EXISTS goHome_db;
-- =======CREATE THE DATABASE============
CREATE DATABASE goHome_db;
-- ==============USE THE DATABASE==========
USE goHome_db;
-- =============CREATE A TABLE FOR USER INFORMATION=======
CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);