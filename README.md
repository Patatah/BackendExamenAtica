<img width="374" height="214" alt="imagen" src="https://github.com/user-attachments/assets/2bcbc096-c69c-4f03-aceb-361001b80abc" />## Descripcion
Backend con NestJS (usando typescript y ORM prisma). Base de datos **Microsoft SQL Server**

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
## Tabla (generada con npx prisma migrate deploy)
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

## Endpoints
Hay 4 endpoints para este CRUD, el get paginado, el post para crear un nuevo prouducto, el patch para editar y delete que hace un borrado logico sobre una tupla.
<img width="374" height="214" alt="imagen" src="https://github.com/user-attachments/assets/c57fdffb-65b1-4968-b856-b70a84b4d979" />

GET http://localhost:3000/productos?pagina=1&tamano=10

POST http://localhost:3000/productos
  body: {"nombre": "Ejemplo de post","descripcion": "Esto es un ejemplo.","precio": 3.1416,"stock": 10,"categoria": "Ejemplos"}
  
PATCH http://localhost:3000/productos/1
  body: {"nombre": "Ejemplo de edicion", "precio": 456, "stock": 789}
  
DELETE http://localhost:3000/productos/1 
