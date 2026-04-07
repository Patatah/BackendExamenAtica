import "dotenv/config";
import { PrismaMssql } from "@prisma/adapter-mssql";
import { PrismaClient } from "../generated/prisma/client";

// datos de prueba https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

const adapter = new PrismaMssql(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function rawSqlSeed() {
	await prisma.$transaction(async (t) => {
		await t.$executeRaw`DELETE FROM [productos]`;

		await t.$executeRaw`
			INSERT INTO [productos] (
				[nombre],
				[urlFoto],
				[descripcion],
				[precio],
				[stock],
				[categoria],
				[activo]
			) VALUES (
				${"Black Country New Road - Ants From Up There"},
				${"https://upload.wikimedia.org/wikipedia/en/d/d7/Ants_from_Up_There_-_Black_Country%2C_New_Road.jpg"},
				${"Segundo album de la banda inglesa de post rock."},
				${348.06},
				${5},
				${"Post rock"},
				${true}
			),
            (
				${"Candelabro - Deseo, carne y voluntad"},
				${"https://images.genius.com/720bd7120f40e59e69041028c8464f59.1000x1000x1.png"},
				${"Album de la banda chilena candelabro. Idioma español."},
				${120.18},
				${18},
				${"Art rock"},
				${true}
			),
            (
				${"Candelabro - Deseo, carne y voluntad"},
				${"https://images.genius.com/720bd7120f40e59e69041028c8464f59.1000x1000x1.png"},
				${"Album de la banda chilena candelabro. Idioma español."},
				${120.18},
				${18},
				${"Art rock"},
				${true}
			)`;
	});
}

rawSqlSeed()
	.catch((error) => {
		console.error(error);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
