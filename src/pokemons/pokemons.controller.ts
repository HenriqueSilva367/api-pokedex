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
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  async create(@Body() data: CreatePokemonDto) {
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
  update(@Param('id') id: string, @Body() data: UpdatePokemonDto) {
    return this.pokemonsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonsService.remove(+id);
  }
}
