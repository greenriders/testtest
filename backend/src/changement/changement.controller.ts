import { Changement } from './changement.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChangementService } from './changement.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateChangementDto } from './create.changement.dto';
import { UpdateChangementDto } from './update.changement.dto';

@Controller('changement')
export class ChangementController {
    constructor( private changementService: ChangementService){}

    @Get()
    async getAllClient(): Promise<Changement[]> {
        return this.changementService.getAllChangement()
    }

    @Get('/:id')
    getClientById(@Param('id') id: number): Promise<Changement>{
        return this.changementService.getChangementById(id);
    }

    @Post()
    async createClient(
        @Body() changement : CreateChangementDto
    ): Promise<Changement>{
        // TODO only admin can create new changement
        return this.changementService.createChangement(
           changement
        );
    }

    @Put('/:id')
    async updateClient(
        @Param('id') id: number,
        @Body() changement : UpdateChangementDto
        ): Promise<UpdateResult> {
        return this.changementService.updateChangement(
          id, changement    
        );
    }

    @Delete('/:id')
    async deleteClient(@Param('id') id:number
    
    ): Promise<DeleteResult>{
        const resultdb = await this.changementService.deleteChangement(id);
        return resultdb
    }
}
