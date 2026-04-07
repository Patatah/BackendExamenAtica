import { Injectable, Query } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from '../prisma.service';
import { ProductoModel } from 'generated/prisma/models/Producto';
import { PaginacionDto } from './dto/paginacion.dto';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async create(createProductoDto: CreateProductoDto): Promise<ProductoModel> {
    return this.prisma.producto.create({
      data: createProductoDto,
    });
  }

  async findActivo(
    @Query() paginacion: PaginacionDto,
  ): Promise<ProductoModel[]> {
    const pagina = paginacion.pagina || 1;
    const tamano = paginacion.tamano || 10;
    const saltar = (pagina - 1) * tamano;
    return this.prisma.producto.findMany({
      where: { activo: true },
      skip: saltar,
      take: tamano,
    });
  }

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<ProductoModel> {
    return this.prisma.producto.update({
      where: { idProducto: id },
      data: {
        ...updateProductoDto,
        ultimaActualizacion: new Date(),
      },
    });
  }

  async remove(id: number): Promise<ProductoModel> {
    return this.prisma.producto.update({
      where: { idProducto: id },
      data: { activo: false, ultimaActualizacion: new Date() },
    });
  }
}
