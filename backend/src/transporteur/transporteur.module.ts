import { TransporteurController } from './transporteur.controller';
import { Transporteur } from './transporteur.entity';
import { Module } from '@nestjs/common';
import { TransporteurService } from './transporteur.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Transporteur])],
  controllers: [TransporteurController],
  providers: [TransporteurService]
})
export class TransporteurModule {}
