import { Produit } from './produit.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProduitController } from './produit.controller';
import { ProduitService } from './produit.service';

@Module({
  imports:[TypeOrmModule.forFeature([Produit])],
  controllers: [ProduitController],
  providers: [ProduitService] , 
  exports : [ProduitService]
})
export class ProduitModule {}
