import { Body, Controller, Post } from '@nestjs/common';

@Controller('/usuarios')
export class UsuarioController {
  @Post()
  async createUsuario(@Body() dadosDoUsuario) {
    return dadosDoUsuario;
  }
}
