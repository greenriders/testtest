import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Etatproduit } from './etatproduit.entity';

@Injectable()
export class EtatproduitService {
  constructor(
    @InjectRepository(Etatproduit)
    private repository: Repository<Etatproduit>,
  ) {}

  getAll(): Promise<Etatproduit[]> {
    return this.repository.find();
  }

  getById(id: number): Promise<Etatproduit> {
    return this.repository.findOne(id);
  }
  create(etatProduit: Partial<Etatproduit>): Promise<Etatproduit> {
    // TODO only admin can create demand
    console.log('Etatproduit', etatProduit);
    return this.repository.save(etatProduit);
  }

  update(id: number, etatProduit: Partial<Etatproduit>): Promise<UpdateResult> {
    return this.repository.update({id}, etatProduit);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
