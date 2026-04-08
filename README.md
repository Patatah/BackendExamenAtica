## Descripcion
Backend con NestJS (Object-Relational Mapping con Prisma). Base de datos **Microsoft SQL Server**.

## Comandos para correr en local
```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm run start
```
## Seeder
Borra los datos de la tabla e inserta los datos de ejemplo.
```bash
npx prisma db seed
```
## Tabla (script en archivo CrearDbAtica.sql)
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
Despúes de crear la tabla se creó el esquema de prisma usando npx prisma migrate deploy.

## Endpoints
Hay 4 endpoints en productoController: 
- Un get paginado y con opción de busqueda
- Post para crear un nuevo prouducto
- Patch para editar
- Delete que hace un borrado logico sobre una tupla
<img width="374" height="214" alt="imagen" src="https://github.com/user-attachments/assets/c57fdffb-65b1-4968-b856-b70a84b4d979" />

## Ejemplos
GET http://localhost:3000/productos?pagina=1&tamano=10

POST http://localhost:3000/productos
  body: {"nombre": "Ejemplo de post","descripcion": "Esto es un ejemplo.","precio": 3.1416,"stock": 10,"categoria": "Ejemplos"}
  
PATCH http://localhost:3000/productos/1
  body: {"nombre": "Ejemplo de edicion", "precio": 456, "stock": 789}
  
DELETE http://localhost:3000/productos/1 
