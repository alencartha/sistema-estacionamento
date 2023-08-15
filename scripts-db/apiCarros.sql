create database dbApiCarros;

use dbApiCarros;

create table carros (
codigo int primary key auto_increment,
modelo varchar(30),
placa varchar(7),
cor varchar(20)
);

select * from carros