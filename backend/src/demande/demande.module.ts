import { DemandeToAnomalie } from './demande-to-anomalie.entity';
import { AnomalieModule } from './../anomalie/anomalie.module';
import { Module } from '@nestjs/common';
import { DemandeController } from './demande.controller';
import { DemandeService } from './demande.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demande } from './demande.entity'
import { UtilsModule } from 'src/utils/modele.module';
import { DistributeurModule } from 'src/distributeur/distributeur.module';
import { ProduitModule } from 'src/produit/produit.module';
import { ImagesModule } from 'src/images/images.module';
import { BillsModule } from 'src/bill/bill.module';

@Module({
  imports: [TypeOrmModule.forFeature([Demande, DemandeToAnomalie]), UtilsModule, ImagesModule, BillsModule, DistributeurModule, ProduitModule, AnomalieModule],
  controllers: [DemandeController],
  providers: [DemandeService]
})
export class DemandsModule { }
