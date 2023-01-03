import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProdut } from './dto/createProdut.dto';
import { ProdutosRepository } from './produtos.repository';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosRepository: ProdutosRepository) {}

  @Post()
  async create(@Body() body: CreateProdut) {
    this.produtosRepository.save(body);
    return body;
  }

  @Get()
  async getAll() {
    return this.produtosRepository.get();
  }
}
