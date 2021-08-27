import { Marque } from './marque.entity';
import { Module } from '@nestjs/common';
import { MarqueController } from './marque.controller';
import { MarqueService } from './marque.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Marque])],
    controllers: [MarqueController],
    providers: [MarqueService]
})
export class MarqueModule {}
