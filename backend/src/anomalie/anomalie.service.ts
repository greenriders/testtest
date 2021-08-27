import { Anomalie } from 'src/anomalie/anomalie.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class AnomalieService {
  constructor(
    @InjectRepository(Anomalie)
    private repository: Repository<Anomalie>,
  ) { }

  getAll(): Promise<Anomalie[]> {
    return this.repository.find();
  }

  getByIds(ids: number[]): Promise<Anomalie[]> {
    return this.repository.findByIds(ids);
  }

  getById(id: number): Promise<Anomalie> {
    return this.repository.findOne(id);
  }
  
  create(
    anomalie: Partial<Anomalie>
  ): Promise<Anomalie> {
    console.log("\n\nnewAnomalie", anomalie)
    return this.repository.save(anomalie)
  }

  update(
    id: number,
    anomalie: Partial<Anomalie>
  ): Promise<UpdateResult> {
    console.log("\n\nnewAnomalie", anomalie)
    return this.repository.update({id}, anomalie)
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
