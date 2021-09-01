import { SousMarque } from './sous-marque.entity';
import { Module } from '@nestjs/common';
import { SousMarqueController } from './sous-marque.controller';
import { SousMarqueService } from './sous-marque.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([SousMarque])],
    controllers: [SousMarqueController],
    providers: [SousMarqueService]
})
export class SousMarqueModule {}
