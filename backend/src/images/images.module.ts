import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './images.entity'
import { UtilsModule } from 'src/utils/modele.module';

@Module({
  imports: [TypeOrmModule.forFeature([Image]), UtilsModule],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [ImagesService]
})
export class ImagesModule { }
