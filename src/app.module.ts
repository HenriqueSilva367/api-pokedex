import { Module } from '@nestjs/common';

import { PokemonsModule } from './pokemons/pokemons.module';
import { PrismaService } from './database/prisma.service';
@Module({
  imports: [PokemonsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
