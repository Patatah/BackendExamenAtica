import { Injectable, Query } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from '../prisma.service';
import { ProductoModel } from 'generated/prisma/models/Producto';
import { PaginacionDto } from './dto/paginacion.dto';
import { PaginacionResponseDto } from './dto/pagination-response.dto';

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
  ): Promise<PaginacionResponseDto> {
    const pagina = parseInt(paginacion.pagina || '1');
    const tamano = parseInt(paginacion.tamano || '10');
    const saltar = (pagina - 1) * tamano;

    //https://www.prisma.io/docs/orm/prisma-client/queries/crud#filter-records  
    const where = {
      activo: true,
      ...(paginacion.busqueda && {
        OR: [
          { nombre: { contains: paginacion.busqueda } },
          { descripcion: { contains: paginacion.busqueda } },
        ],
      }),
    };

    const [productos, total] = await Promise.all([
      this.prisma.producto.findMany({
        where,
        skip: saltar,
        take: tamano,
      }),
      this.prisma.producto.count({
        where,
      }),
    ]);

    const totalPaginas = Math.ceil(total / tamano);

    return {
      data: productos,
      total,
      pagina,
      tamano,
      totalPaginas,
    };
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
