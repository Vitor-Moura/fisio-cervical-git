CREATE DATABASE fisiocervical;

USE fisiocervical;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE fisioterapeuta (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


select * from usuario;

select * from fisioterapeuta;

--  insert into usuario values 
-- (null, 'Vitor', 'vitor@gmail.com', '1234567');