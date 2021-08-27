import { CreateAnomalieDto } from './create.anomalie.dto';
import { UpdateAnomalieDto } from './update.anomalie.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Anomalie } from './anomalie.entity';
import { AnomalieService } from './anomalie.service';

@Controller('anomalie')
export class AnomalieController {
    constructor(private anomalieService: AnomalieService) { }

    @Get()
    async getAll(): Promise<Anomalie[]> {
        return this.anomalieService.getAll()
    }
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Anomalie>{
        return this.anomalieService.getById(id);
    }
    @Post()
    async create(
    @Body() anomalie: CreateAnomalieDto
    ): Promise<Anomalie> {
        return this.anomalieService.create(anomalie);
    }

    @Put('/:id')
    async update(
        @Param('id') id: number,
        @Body() anomalie: UpdateAnomalieDto
    ): Promise<UpdateResult> {
        console.log("Anomalie has updated successfully")
        return this.anomalieService.update(id, anomalie);
    }

    @Delete('/:id')
    async delete(@Param('id') id:number): Promise<DeleteResult>{
        console.log(`Anomalie ${id} is deleted`)
        const resultdb = await this.anomalieService.delete(id);
        return resultdb
    }

}
