CREATE DATABASE fisiocervical;

USE fisiocervical;

CREATE TABLE fisioterapeuta (
	idFisioterapeuta INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE exercicios (
	idExercicios INT PRIMARY KEY AUTO_INCREMENT,
	preTreino INT,
	posTreino INT
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50));
    -- fkFisioterapeuta INT,
	-- fkExercicios INT,
	-- FOREIGN KEY (fkFisioterapeuta) REFERENCES fisioterapeuta(idFisioterapeuta),
	-- FOREIGN KEY (fkExercicios) REFERENCES exercicios(idExercicios));



select * from usuario;

select * from fisioterapeuta;

-- alter user 'root'@'localhost' identified with mysql_netive_password by 'password';


delete from usuario where usuario.id in (1,2);
delete from fisioterapeuta where idFisioterapeuta in (1,2);


drop table fisioterapeuta;
drop table usuario;
