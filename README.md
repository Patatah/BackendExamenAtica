## Descripcion
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