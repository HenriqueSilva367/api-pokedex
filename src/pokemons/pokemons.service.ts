import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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
      throw new ConflictException('Pokemon already exists');
    }

    const categoria = await this.prisma.category.findFirst({
      where: {
        name: data.categoriaName,
      },
    });

    if (!categoria) {
      throw new NotFoundException(`Category '${data.categoriaName}' not found`);
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
        velocidade: data.velocidade,
        category: {
          connect: { id: categoria.id },
        },
      },
      include: {
        category: true,
      },
    });

    return pokemon;
  }

  async findAll() {
    const pokemons = await this.prisma.pokemon.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return pokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      imgUrl: pokemon.imgUrl,
      peso: pokemon.peso,
      altura: pokemon.altura,
      hp: pokemon.hp,
      ataque: pokemon.ataque,
      defesa: pokemon.defesa,
      sp_ataque: pokemon.sp_ataque,
      sp_defesa: pokemon.sp_defesa,
      velocidade: pokemon.velocidade,
      categoria: pokemon.category.name,
    }));
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
      throw new NotFoundException('Pokemon does not exists!');
    }

    const categoria = await this.prisma.category.findFirst({
      where: {
        name: data.categoriaName,
      },
    });

    if (!categoria) {
      throw new NotFoundException(`Category '${data.categoriaName}' not found`);
    }

    return await this.prisma.pokemon.update({
      data: {
        ...data,
        categoryId: categoria.id,
      },
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
      throw new NotFoundException('Pokemon does not exists!');
    }

    return await this.prisma.pokemon.delete({
      where: {
        id,
      },
    });
  }
}
