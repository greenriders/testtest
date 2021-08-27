import { AnomalieCategory } from './anomalie-category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class AnomalieCategoryService {
  constructor(
    @InjectRepository(AnomalieCategory)
    private Repository: Repository<AnomalieCategory>,
  ) { }

  getAll(): Promise<AnomalieCategory[]> {
    return this.Repository.find();
  }

  getById(id: number): Promise<AnomalieCategory>{
    return this.Repository.findOne(id);
  }

  create(
    anomalieCategory: Partial<AnomalieCategory>
  ): Promise<AnomalieCategory> {
    console.log("\n\nnewAnomalie", anomalieCategory)
    return this.Repository.save(anomalieCategory)
  }

  update(
    id: number,
    anomalieCategory: Partial<AnomalieCategory>
  ): Promise<UpdateResult> {
    console.log("\n\nanomalieCategory", anomalieCategory)
    return this.Repository.update({id}, anomalieCategory)
  }

  delete(id: number): Promise<DeleteResult> {
    return this.Repository.delete(id);
  }
}
