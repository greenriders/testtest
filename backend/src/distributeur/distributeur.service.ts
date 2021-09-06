import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Distributeur } from './distributeur.entity';

@Injectable()
export class DistributeurService {
  constructor(
    @InjectRepository(Distributeur)
    private repository: Repository<Distributeur>,
  ) {}

  getAll(): Promise<Distributeur[]> {
    console.log('get all distributeur', this.repository);
    return this.repository.find();
  }

  getById(id: number): Promise<Distributeur> {
    return this.repository.findOne(id);
  }

  getByEmail(email: string): Promise<Distributeur> {
    return this.repository.findOne({email:email});
  }

  create(distributeur: Partial<Distributeur>): Promise<Distributeur> {
    // TODO only admin can create distributeur
    console.log('distributeur', distributeur);
    return this.repository.save(distributeur);
  }

  update(
    id: number,
    distributeur: Partial<Distributeur>,
  ): Promise<UpdateResult> {
    return this.repository.update({ id }, distributeur);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
