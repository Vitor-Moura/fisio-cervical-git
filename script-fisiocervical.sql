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
    fkFisioterapeuta int,
    foreign key (fkFisioterapeuta) references fisioterapeuta(idFisioterapeuta)
    );

CREATE TABLE pretreino (
	idPretreino INT PRIMARY KEY AUTO_INCREMENT,
	nivelDor1 int,
	descDor1 VARCHAR(1000),
    dtRegistro1 timestamp null default current_timestamp,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);




CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

alter table pretreino rename column fk_usuario to fkUsuario;  

update usuario set fkFisioterapeuta = 1 where usuario.id = 3;
update pretreino set fkUsuario = 1 where idPretreino = 1;


select * from usuario;
select * from pretreino;
select * from fisioterapeuta;

delete from pretreino where idPretreino = 2;


CREATE TABLE exercicios (
	idExercicios INT PRIMARY KEY AUTO_INCREMENT,
	preTreino INT,
	posTreino INT
);

   SELECT 
    usuario.nome as 'paciente_nome',
    nivelDor1,
    descDor1,
    DATE_FORMAT(dtRegistro1, '%d/%m/%Y - %H:%i hrs') as 'data1'
    FROM
    pretreino 
    JOIN usuario
        on fkUsuario=usuario.id
    JOIN fisioterapeuta
        on fkFisioterapeuta = idFisioterapeuta
	order by usuario.nome asc;


CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL(10,2),
	umidade DECIMAL(10,2),
	momento DATETIME,
	fk_aquario INT
);


-- alter user 'root'@'localhost' identified with mysql_netive_password by 'password';


delete from usuario where usuario.id = 2;
delete from fisioterapeuta where idFisioterapeuta in (1,2);


drop table fisioterapeuta;
drop table usuario;
drop table pretreino;