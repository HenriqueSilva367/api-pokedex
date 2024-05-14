import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonDto } from './dto/pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  async create(@Body() data: PokemonDto) {
    return this.pokemonsService.create(data);
  }

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: PokemonDto) {
    return this.pokemonsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.pokemonsService.delete(id);
  }
}
