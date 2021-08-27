import { Produit } from './produit.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private repository: Repository<Produit>,
  ) {}

  getAll(): Promise<Produit[]> {
    return this.repository.find();
  }

  getById(id: number): Promise<Produit> {
    return this.repository.findOne(id);
  }

  create(produit: Partial<Produit>): Promise<Produit> {
    console.log('produit', produit);
    return this.repository.save(produit);
  }

  update(id: number, produit: Partial<Produit>): Promise<UpdateResult> {
    console.log('produit', produit);
    return this.repository.update({id}, produit);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
