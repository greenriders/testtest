// import { TraitementService } from './traitement.service';
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { Demande } from 'src/demande/demande.entity';
// import { DeleteResult } from 'typeorm';

// @Controller('traitement')
// export class TraitementController {
//   constructor(private service: TraitementService) {}

//   @Get()
//   async getAll(): Promise<Demande[]> {
//     return this.service.getAll();
//   }
//   @Get('/:id')
//   getById(@Param('id') id: number): Promise<Demande> {
//     return this.service.getById(id);
//   }
//   @Post()
//   async create(@Body() demande: Partial<Demande>): Promise<Demande> {
//     // TODO only admin can create demand
//     return this.service.create(demande);
//   }

//   @Put('/:id')
//   async update(
//     @Param('id') id: number,
//     @Body() demande: Partial<Demande>,
//   ): Promise<Demande> {
//     console.log('Demande has updated successfully');
//     return this.service.update(demande);
//   }

//   @Delete('/:id')
//   async delete(@Param('id') id: number): Promise<DeleteResult> {
//     console.log(`Demand ${id} is deleted`);
//     const resultdb = await this.service.delete(id);
//     return resultdb;
//   }
// }
