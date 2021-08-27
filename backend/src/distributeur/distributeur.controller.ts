import { DistributeurService } from './distributeur.service';
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
import { Distributeur } from './distributeur.entity';
import { CreateDistributeurDto } from './create.distributeur.dto';
import { UpdateDistributeurDto } from './update.distributeur.dto';

@Controller('distributeur')
export class DistributeurController {
  constructor(private service: DistributeurService) {}
  
  @Get()
  async getAll(): Promise<Distributeur[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Distributeur> {
    return this.service.getById(id);
  }
  @Post()
  async create(
    @Body() distributeur: CreateDistributeurDto
  ): Promise<Distributeur> {
    console.log(distributeur)
    return this.service.create(distributeur);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() distributeur: UpdateDistributeurDto
  ): Promise<UpdateResult> {
    return this.service.update(id, distributeur);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    console.log(`Demand ${id} is deleted`);
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
