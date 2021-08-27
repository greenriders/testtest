import { Module } from '@nestjs/common';
import { EtatproduitController } from './etatproduit.controller';
import { EtatproduitService } from './etatproduit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etatproduit } from './etatproduit.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Etatproduit])],
  controllers: [EtatproduitController],
  providers: [EtatproduitService]
})
export class EtatproduitModule {}
