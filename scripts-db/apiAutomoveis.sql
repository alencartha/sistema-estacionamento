create database dbApiVeiculos;

use dbApiVeiculos;

create table veiculos (
codigo int primary key auto_increment,
tipo varchar(20),
modelo varchar(30),
placa varchar(7),
cor varchar(20)
);

select * from veiculos