import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class ResponseProductoDto {
  @IsNotEmpty()
  @IsNumber()
  idProducto: number;

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
