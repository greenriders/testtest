import { ProduitService } from './produit.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Produit } from './produit.entity';
import { CreateProduitDto } from './create.produit.dto';
import { UpdateProduitDto } from './update.produit.dto';

@Controller('produit')
export class ProduitController {
  constructor(private service: ProduitService) { }

  @Get()
  async getAll(): Promise<Produit[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Produit> {
    return this.service.getById(id);
  }
  @Post()
  async create(@Body() produit: CreateProduitDto): Promise<Produit> {
    return this.service.create(produit);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() produit: UpdateProduitDto
  ): Promise<UpdateResult> {
    return this.service.update(id, produit);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    console.log(`Demand ${id} is deleted`);
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
