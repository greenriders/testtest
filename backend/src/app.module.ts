import { RolesGuard } from './utils/roles.guard';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemandsModule } from './demande/demande.module';
import { DistributeurModule } from './distributeur/distributeur.module';
import { ClientModule } from './client/client.module';
import { ProduitModule } from './produit/produit.module';
import { MarqueModule } from './marque/marque.module';
import { ModeleModule } from './modele/modele.module';
import { AnomalieCategoryModule } from './anomalie-category/anomalie-category.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ChangementModule } from './changement/changement.module';
import { InterventionModule } from './intervention/intervention.module';
import { EtatproduitModule } from './etatproduit/etatproduit.module';
import { AnomalieModule } from './anomalie/anomalie.module';
import { APP_GUARD } from '@nestjs/core';
import { MulterModule } from '@nestjs/platform-express';
import { TransporteurController } from './transporteur/transporteur.controller';
import { TransporteurModule } from './transporteur/transporteur.module';
import { ImagesModule } from './images/images.module';
import { BillsModule } from './bill/bill.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      loggerLevel: "error", autoLoadEntities: true,
    }),
    DemandsModule,
    DistributeurModule,
    ClientModule,
    ProduitModule,
    MarqueModule,
    ModeleModule,
    AnomalieCategoryModule,
    AnomalieModule,
    AuthModule,
    UserModule,
    ChangementModule,
    InterventionModule,
    EtatproduitModule,
    TransporteurModule,
    ImagesModule,
    BillsModule,
    MulterModule.register({
      dest: './files',
    }),

  ],
  controllers: [AppController],
  providers: [AppService
    //   , {

    //   provide: APP_GUARD,   // to use global guards
    //   useClass: RolesGuard
    // }

  ],
})
export class AppModule { }
