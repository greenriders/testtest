import { RolesGuard } from '../utils/roles.guard';
import { ImagesService } from './images.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Request,
  UseGuards,
  Res
} from '@nestjs/common';
import { Image } from './images.entity';

@Controller('images')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ImagesController {
  constructor(
    private service: ImagesService,
  ) { }

  @Post()
  //@Roles(Role.Admin)
  async create(
    @Body() payload: Partial<Image>,
    @Request() req,
  ): Promise<Image> {

    console.log(payload)
    let image = await this.service.create(payload);
    return image;
  }
}