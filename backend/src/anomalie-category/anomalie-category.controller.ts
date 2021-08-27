import { AnomalieCategory } from './anomalie-category.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AnomalieCategoryService } from './anomalie-category.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateAnomalieCategoryDto } from './create.anomalie.category.dto';
import { UpdateAnomalieCategoryDto } from './update.anomalie.category.dto';

@Controller('anomalie-category')
export class AnomalieCategoryController {
  constructor(private service: AnomalieCategoryService) {}

  @Get()
  async getAll(): Promise<AnomalieCategory[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<AnomalieCategory> {
    return this.service.getById(id);
  }
  @Post()
  async create(
    @Body() anomalieCategory: CreateAnomalieCategoryDto,
  ): Promise<AnomalieCategory> {
    return this.service.create(anomalieCategory);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() anomalieCategory: UpdateAnomalieCategoryDto,
  ): Promise<UpdateResult> {
    return this.service.update(id, anomalieCategory);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    console.log(`AnomalieCategory ${id} is deleted`);
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
