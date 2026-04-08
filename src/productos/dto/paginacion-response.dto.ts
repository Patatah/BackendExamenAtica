import { ProductoModel } from 'generated/prisma/models/Producto';

export class PaginacionResponseDto {
  data: ProductoModel[];
  total: number;
  pagina: number;
  tamano: number;
  totalPaginas: number;
}
