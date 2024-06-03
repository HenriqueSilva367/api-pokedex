import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { PrismaService } from '../database/prisma.service';
import { CategoriasService } from './category.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoriasService, PrismaService],
  exports: [CategoriasService],
})
export class CategoryModule {}
