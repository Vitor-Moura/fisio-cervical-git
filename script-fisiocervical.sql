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
    
CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL(10,2),
	umidade DECIMAL(10,2),
	momento DATETIME,
	fk_aquario INT
);



select * from usuario;

select * from fisioterapeuta;

-- alter user 'root'@'localhost' identified with mysql_netive_password by 'password';


delete from usuario where usuario.id in (1,2);
delete from fisioterapeuta where idFisioterapeuta in (1,2);


drop table fisioterapeuta;
drop table usuario;
