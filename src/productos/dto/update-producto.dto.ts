import { IsOptional, IsString, MaxLength, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  nombre?: string;

  @IsOptional()
  @IsString()
  urlFoto?: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  precio?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  stock?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  categoria?: string;
}
