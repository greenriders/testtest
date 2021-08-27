// import { Distributeur } from './distributeur.entity';
import { Module } from '@nestjs/common';
import { DistributeurController } from './distributeur.controller';
import { DistributeurService } from './distributeur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distributeur } from './distributeur.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Distributeur])],
  controllers: [DistributeurController],
  providers: [DistributeurService], 
  exports : [DistributeurService]
})
export class DistributeurModule {}
