import { Module } from '@nestjs/common';
import { BillsController } from './bill.controller';
import { BillService } from './bill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './bill.entity'
import { UtilsModule } from 'src/utils/modele.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bill]), UtilsModule],
  controllers: [BillsController],
  providers: [BillService],
  exports: [BillService]
})
export class BillsModule { }
