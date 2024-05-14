import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';
import { PokemonDto } from './dto/pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService) {}

  async create(data: PokemonDto) {
    const pokemonExists = await this.prisma.pokemon.findFirst({
      where: {
        name: data.name,
      },
    });

    if (pokemonExists) {
      throw new Error('Pokemon already exists');
    }

    const pokemon = await this.prisma.pokemon.create({
      data: {
        name: data.name,
        imgUrl: data.imgUrl,
        peso: data.peso,
        altura: data.altura,
        hp: data.hp,
        ataque: data.ataque,
        defesa: data.defesa,
        sp_ataque: data.sp_ataque,
        sp_defesa: data.sp_defesa,
        velocitade: data.velocitade,
      },
    });
    return pokemon;
  }

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} pokemon`;
  }

  async update(id: string, data: PokemonDto) {
    const pokemonExists = await this.prisma.pokemon.findUnique({
      where: {
        id,
      },
    });

    if (!pokemonExists) {
      throw new Error('Pokemon does not exists!');
    }

    return await this.prisma.pokemon.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const pokemonExists = await this.prisma.pokemon.findUnique({
      where: {
        id,
      },
    });
    if (!pokemonExists) {
      throw new Error('Pokemon does not exists!');
    }
    return await this.prisma.pokemon.delete({
      where: {
        id,
      },
    });
  }
}
