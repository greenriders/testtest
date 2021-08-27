import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnomalieController } from './anomalie.controller';
import { Anomalie } from './anomalie.entity';
import { AnomalieService } from './anomalie.service';

@Module({
  controllers: [AnomalieController],
  imports: [TypeOrmModule.forFeature([Anomalie])],
  providers: [AnomalieService],
  exports: [AnomalieService]
})
export class AnomalieModule {}
