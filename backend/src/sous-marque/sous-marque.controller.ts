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
import { CreateSousMarqueDto } from './create.sous-marque.dto';
import { SousMarque } from './sous-marque.entity';
import { SousMarqueService } from './sous-marque.service';
import { UpdateSousMarqueDto } from './update.sous-marqe.dto';

@Controller('sousMarque')
export class SousMarqueController {
  constructor(private service: SousMarqueService) {}

  @Get()
  async getAll(): Promise<SousMarque[]> {
    return this.service.getAll();
  }

  @Get('/:marqueId')
  getById(@Param('marqueId') marqueId: number): Promise<SousMarque[]> {
    return this.service.getByMarqueId(marqueId);
  }


  @Post()
  async create(@Body() marque: CreateSousMarqueDto): Promise<SousMarque> {
    return this.service.create(marque);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() marque: UpdateSousMarqueDto): Promise<UpdateResult> {
    return this.service.update(id, marque);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
