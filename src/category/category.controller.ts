// src/category/category.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { CategoryDto } from './dto/category.dto';
import { CategoriasService } from './category.service';

@Controller('categorias')
export class CategoryController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  async create(@Body() createCategoryDto: CategoryDto) {
    return this.categoriasService.create(createCategoryDto);
  }

  @Get()
  async findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: CategoryDto,
  ) {
    return this.categoriasService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.categoriasService.delete(id);
  }
}
