import { Intervention } from './intervention.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class InterventionService {
  constructor(
    @InjectRepository(Intervention)
    private repository: Repository<Intervention>,
  ) {}

  getAll(): Promise<Intervention[]> {
    return this.repository.find();
  }

  getById(id: number): Promise<Intervention> {
    return this.repository.findOne(id);
  }
  create(intervention: Partial<Intervention>): Promise<Intervention> {
    // TODO only admin can create demand
    console.log('intervention', Intervention);
    return this.repository.save(intervention);
  }

  update(
    id: number,
    intervention: Partial<Intervention>,
  ): Promise<UpdateResult> {
    return this.repository.update({ id }, intervention);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
