import { Module } from '@nestjs/common';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PrismaService } from './database/prisma.service';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [PokemonsModule, CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
