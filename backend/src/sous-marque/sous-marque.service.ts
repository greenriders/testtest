import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SousMarque } from './sous-marque.entity';

@Injectable()
export class SousMarqueService {
  constructor(
    @InjectRepository(SousMarque)
    private repository: Repository<SousMarque>,
  ) {}

  getAll(): Promise<SousMarque[]> {
    return this.repository.find();
  }

  getByMarqueId(marqueId: number): Promise<SousMarque[]> {
    return  this.repository.find({
      where: {
        marqueId: marqueId,
      },
    });
  }

  create(marque: Partial<SousMarque>): Promise<SousMarque> {
    console.log('Marque', marque);
    return this.repository.save(marque);
  }

  update(id: number, marque: Partial<SousMarque>): Promise<UpdateResult> {
    console.log('marque', marque);
    return this.repository.update({id}, marque);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
