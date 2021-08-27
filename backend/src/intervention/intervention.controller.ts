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
import { CreateInterventionDto } from './create.intervention.dto';
import { Intervention } from './intervention.entity';
import { InterventionService } from './intervention.service';
import { UpdateInterventionDto } from './update.intervention.dto';

@Controller('intervention')
export class InterventionController {
  constructor(private service: InterventionService) {}

  @Get()
  async getAllt(): Promise<Intervention[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Intervention> {
    return this.service.getById(id);
  }
  @Post()
  async create(
    @Body() intervention: CreateInterventionDto,
  ): Promise<Intervention> {
    return this.service.create(intervention);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() intervention: UpdateInterventionDto,
  ): Promise<UpdateResult> {
    return await this.service.update(id, intervention);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
