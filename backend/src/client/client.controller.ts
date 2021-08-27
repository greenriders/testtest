import { ClientService } from './client.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Client } from './client.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateClientDto } from './create.client.dto';
import { UpdateClientDto } from './update.client.dto';

@Controller('client')
export class ClientController {
  constructor(private service: ClientService) {}

  @Get()
  async getAll(): Promise<Client[]> {
    return this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<Client> {
    return this.service.getById(id);
  }

  @Post()
  async createClient(@Body() client: CreateClientDto): Promise<Client> {
    return await this.service.create(client);
  }

  @Put('/:id')
  async updateClient(
    @Param('id') id: number,
    @Body() client: UpdateClientDto,
  ): Promise<UpdateResult> {
    return this.service.update(id, client);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: number): Promise<DeleteResult> {
    const resultdb = await this.service.deleteClient(id);
    return resultdb;
  }
}
