CREATE DATABASE fisiocervical;

USE fisiocervical;

CREATE TABLE fisioterapeuta (
	id				 	INT PRIMARY KEY AUTO_INCREMENT,
	nome 				VARCHAR(50),
	email 				VARCHAR(50),
	senha 				VARCHAR(50)
)AUTO_INCREMENT=100;

CREATE TABLE usuario (
	id 					INT PRIMARY KEY AUTO_INCREMENT,
	nome 				VARCHAR(50),
	email 				VARCHAR(50),
	senha 				VARCHAR(50),
    celular 			VARCHAR(20),
    fkFisioterapeuta 	INT,
    FOREIGN KEY (fkFisioterapeuta) REFERENCES fisioterapeuta(id)
    )AUTO_INCREMENT=1000;

CREATE TABLE pretreino (
	idPretreino 		INT PRIMARY KEY AUTO_INCREMENT,
	nivelDor1 			INT,
	descDor1 			VARCHAR(1000),
    dtRegistro1 		TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	fkUsuario 			INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

SELECT * FROM fisioterapeuta;
SELECT * FROM usuario;
SELECT * FROM pretreino;



delete from fisioterapeuta where id = 102;
delete from pretreino where idPretreino in (5,6);









truncate table fisioterapeuta;
truncate table usuario;
truncate table pretreino;
