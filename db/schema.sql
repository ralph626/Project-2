-- ======DROP DATABASE=================
DROP DATABASE IF EXISTS goHome_db;
-- =======CREATE THE DATABASE============
CREATE DATABASE goHome_db;
-- ==============USE THE DATABASE==========
USE goHome_db;
-- =============CREATE A TABLE FOR USER INFORMATION=======
CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    pass_word VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);