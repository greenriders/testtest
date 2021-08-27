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
import { CreateMarqueDto } from './create.marque.dto';
import { Marque } from './marque.entity';
import { MarqueService } from './marque.service';
import { UpdateMarqueDto } from './update.marqe.dto';

@Controller('marque')
export class MarqueController {
  constructor(private service: MarqueService) {}

  @Get()
  async getAll(): Promise<Marque[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Marque> {
    return this.service.getById(id);
  }
  @Post()
  async create(@Body() marque: CreateMarqueDto): Promise<Marque> {
    return this.service.create(marque);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() marque: UpdateMarqueDto): Promise<UpdateResult> {
    return this.service.update(id, marque);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
