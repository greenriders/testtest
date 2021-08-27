import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Marque } from './marque.entity';

@Injectable()
export class MarqueService {
  constructor(
    @InjectRepository(Marque)
    private repository: Repository<Marque>,
  ) {}

  getAll(): Promise<Marque[]> {
    return this.repository.find();
  }

  getById(id: number): Promise<Marque> {
    return this.repository.findOne(id);
  }

  create(marque: Partial<Marque>): Promise<Marque> {
    console.log('Marque', marque);
    return this.repository.save(marque);
  }

  update(id: number, marque: Partial<Marque>): Promise<UpdateResult> {
    console.log('marque', marque);
    return this.repository.update({id}, marque);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
