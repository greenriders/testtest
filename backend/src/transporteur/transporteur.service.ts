import { Transporteur } from './transporteur.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TransporteurService {
    constructor(
        @InjectRepository(Transporteur)
        private repository: Repository<Transporteur>,
      ) {}

      getAll(): Promise<Transporteur[]> {
        return this.repository.find();
      }

      getById(id: number): Promise<Transporteur> {
        return this.repository.findOne(id);
      }

      create(transporteur: Partial<Transporteur>): Promise<Transporteur> {
        return this.repository.save(transporteur);
      }

      update(id: number, transporteur: Partial<Transporteur>): Promise<UpdateResult> {
        console.log('marque', transporteur);
        return this.repository.update({id}, transporteur);
      }

      delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
      }
}
