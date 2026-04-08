use master;
go
create database atica;
go
use atica;
go
create table productos (
    idProducto int identity(1,1) primary key,
    nombre nvarchar(255) not null,
    urlFoto nvarchar(1000) null,
    descripcion nvarchar(4000) null,
    precio decimal(10,2) not null,
    stock int not null default 0,
    categoria nvarchar(100) null,
    activo bit not null default 1,
    creado datetime default getdate(),
    ultimaActualizacion datetime default getdate()
);

select * from productos;