import { Modele } from './modele.entity';
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
import { ModeleService } from './modele.service';
import { CreateModeleDto } from './create.modele.dto';
import { UpdateModeleDto } from './update.modele.dto';

@Controller('modele')
export class ModeleController {
  constructor(private service: ModeleService) {}

  @Get()
  async getAll(): Promise<Modele[]> {
    return await this.service.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<Modele> {
    return this.service.getById(id);
  }

  @Get('/marque/:marqueId')
  getByMarqueId(@Param('marqueId') marqueId: number): Promise<Modele[]> {
    return this.service.getByMarqueId(marqueId);
  }

  @Post()
  async create(@Body() modele: CreateModeleDto): Promise<Modele> {
    console.log(modele)
    return await this.service.create(modele);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() modele: UpdateModeleDto): Promise<UpdateResult> {
    return await this.service.update(id, modele);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
