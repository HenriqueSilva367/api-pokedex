// src/category/categorias.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  async create(data: CategoryDto) {
    const categoriaExiste = await this.prisma.category.findFirst({
      where: {
        name: data.name,
      },
    });

    if (categoriaExiste) {
      throw new Error(`A categoria '${data.name}' já existe`);
    }

    const categoria = await this.prisma.category.create({
      data: {
        name: data.name,
      },
    });

    return categoria;
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: string) {
    const categoria = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!categoria) {
      throw new Error(`Categoria com ID ${id} não encontrada`);
    }

    return categoria.name;
  }

  async update(id: string, data: CategoryDto) {
    const categoria = await this.prisma.category.update({
      where: { id },
      data: {
        name: data.name,
      },
    });

    if (!categoria) {
      throw new Error(`Categoria com ID ${id} não encontrada`);
    }

    return categoria;
  }

  async delete(id: string) {
    try {
      const categoriaExiste = await this.prisma.category.findUnique({
        where: {
          id,
        },
      });

      if (!categoriaExiste) {
        throw new Error('Categoria does not exist!');
      }

      return await this.prisma.category.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error('Error deleting category:', error);
      throw new Error('Internal server error');
    }
  }

  async findByName(name: string) {
    const categoria = await this.prisma.category.findFirst({
      where: {
        name: {
          equals: name.toLowerCase(),
        },
      },
    });

    return categoria;
  }
}
