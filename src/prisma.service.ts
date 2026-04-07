
import { Injectable } from '@nestjs/common';
import { PrismaClient } from "../generated/prisma/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

// Snippet de https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMssql(process.env.DATABASE_URL!);
    super({ adapter });
  }
}
