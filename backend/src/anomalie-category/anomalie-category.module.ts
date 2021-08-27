import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnomalieCategoryController } from './anomalie-category.controller';
import { AnomalieCategory } from './anomalie-category.entity';
import { AnomalieCategoryService } from './anomalie-category.service';

@Module({
  controllers: [AnomalieCategoryController],
  imports: [TypeOrmModule.forFeature([AnomalieCategory])],
  providers: [AnomalieCategoryService]
})
export class AnomalieCategoryModule {}
