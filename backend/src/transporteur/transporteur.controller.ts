import { Transporteur } from './transporteur.entity';
import { TransporteurService } from './transporteur.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('transporteur')
export class TransporteurController {
    constructor(private service: TransporteurService) {}

    @Get()
    async getAll(): Promise<Transporteur[]> {
      return this.service.getAll();
    }
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Transporteur> {
    return this.service.getById(id);
  }
  @Post()
  async create(@Body() transporteur: Transporteur): Promise<Transporteur> {
    return this.service.create(transporteur);
  }
  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() transporteur: Transporteur): Promise<UpdateResult> {
    return this.service.update(id, transporteur);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
