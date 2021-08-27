import { CreateUserDto } from './create.user.dto';
import { UpdateUserDto } from './update.user.dto';
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
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get('technicien')
  async getAllTechniciens(): Promise<User[]> {
    return await this.service.getAllTechnicien();
  }

  @Get('professionnel')
  async getAvailableProfessionnel(): Promise<User[]> {
    const result =await this.service.getAvailableProfessionnel();
    return result;
  }

  @Get()
  async getAll(): Promise<User[]> {
    return await this.service.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number): Promise<User> {
    return this.service.findById(id);
  }
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    console.log('user', user);
    return await this.service.create(user);
  }

  @Post('/signup')
  async register(@Body() user: CreateUserDto): Promise<User> {
    console.log('user', user);
    let createdUser = await this.service.create(user);
    return createdUser
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.service.update(id, user);
  }
 
  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    console.log(`User ${id} is deleted`);
    const resultdb = await this.service.delete(id);
    return resultdb;
  }
}
