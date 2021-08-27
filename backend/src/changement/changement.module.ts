import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangementController } from './changement.controller';
import { Changement } from './changement.entity';
import { ChangementService } from './changement.service';

@Module({
  imports:[TypeOrmModule.forFeature([Changement])],
  controllers: [ChangementController],
  providers: [ChangementService]
})
export class ChangementModule {}
