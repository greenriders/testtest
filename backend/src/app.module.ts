import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { MulterModule } from '@nestjs/platform-express';
import { TransporteurModule } from './transporteur/transporteur.module';
import { ImagesModule } from './images/images.module';
import { BillsModule } from './bill/bill.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './utils/mail.service';
import { join } from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      loggerLevel: "error", autoLoadEntities: true,
    }),
    MailerModule.forRoot({
      transport: {
        service:"hotmail",
        auth: {
          user: 'greenridersnewtest@outlook.com',
          pass: '123123123@@',
        },
      },
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
  exports: [MailService],
  providers: [AppService, MailService
    //   , {

    //   provide: APP_GUARD,   // to use global guards
    //   useClass: RolesGuard
    // }

  ],
})
export class AppModule { }
