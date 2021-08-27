import { EtatproduitService } from './etatproduit.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Etatproduit } from './etatproduit.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateEtatproduitDto } from './create.etatproduit.dto';
import { UpdateEtatproduitDto } from './update.etatproduit.dto';

@Controller('etatproduit')
export class EtatproduitController {
  constructor(private service: EtatproduitService) {}

  @Get()
  async getAll(): Promise<Etatproduit[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Etatproduit> {
    return this.service.getById(id);
  }
  @Post()
  async create(
    @Body() etatproduit: CreateEtatproduitDto,
  ): Promise<Etatproduit> {
    return this.service.create(etatproduit);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() etatproduit: UpdateEtatproduitDto,
  ): Promise<UpdateResult> {
    return this.service.update(id, etatproduit);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
