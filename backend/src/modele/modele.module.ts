import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeleController } from './modele.controller';
import { Modele } from './modele.entity';
import { ModeleService } from './modele.service';

@Module({
    imports:[TypeOrmModule.forFeature([Modele])],
    controllers: [ModeleController],
    providers: [ModeleService]
})
export class ModeleModule {}
