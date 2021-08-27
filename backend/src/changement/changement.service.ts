import { Demande } from 'src/demande/demande.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Changement } from './changement.entity';

@Injectable()
export class ChangementService {
  constructor(
    @InjectRepository(Changement)
    private repository: Repository<Changement>,
  ) {}

  getAllChangement(): Promise<Changement[]> {
    return this.repository.find();
  }

  getChangementById(id: number): Promise<Changement>{
    return this.repository.findOne(id);
  }
  createChangement(changement: Partial<Changement>): Promise<Changement> {
    return this.repository.save(changement);
  }

  updateChangement(
    id: number,
    changement: Partial<Changement>): Promise<UpdateResult> {
    return this.repository.update({id}, changement);
  }

  deleteChangement(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
