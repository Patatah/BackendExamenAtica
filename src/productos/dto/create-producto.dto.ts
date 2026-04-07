import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

// https://github.com/typestack/class-validator#validation-decorators
// https://github.com/typestack/class-transformer/blob/develop/sample/sample1-simple-usage/Photo.ts

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    urlFoto: string;

    @IsOptional()
    @IsString()
    @MaxLength(4000)
    descripcion?: string;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    precio: number;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    stock?: number;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    categoria?: string;
}
