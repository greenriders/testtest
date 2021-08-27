import { RolesGuard } from '../utils/roles.guard';
import { BillService } from './bill.service';
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
import { Bill } from './bill.entity';

@Controller('bills')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillsController {
  constructor(
    private service: BillService,
  ) { }

  @Post()
  //@Roles(Role.Admin)
  async create(
    @Body() payload: Partial<Bill>,
    @Request() req,
  ): Promise<Bill> {

    console.log(payload)
    let image = await this.service.create(payload);
    return image;
  }
}