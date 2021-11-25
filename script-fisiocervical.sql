CREATE DATABASE fisiocervical;

USE fisiocervical;

CREATE TABLE fisioterapeuta (
	idFisioterapeuta INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
)auto_increment=100;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    celular VARCHAR(20),
    fkFisioterapeuta int,
    foreign key (fkFisioterapeuta) references fisioterapeuta(idFisioterapeuta)
    )auto_increment=1000;

CREATE TABLE pretreino (
	idPretreino INT PRIMARY KEY AUTO_INCREMENT,
	nivelDor1 int,
	descDor1 VARCHAR(1000),
    dtRegistro1 timestamp null default current_timestamp,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

select * from fisioterapeuta;
select * from usuario;
select * from pretreino;


drop table fisioterapeuta;
drop table usuario;
drop table pretreino;