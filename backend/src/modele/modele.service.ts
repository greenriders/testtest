import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marque } from 'src/marque/marque.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Modele } from './modele.entity';

@Injectable()
export class ModeleService {
  constructor(
    @InjectRepository(Modele)
    private repository: Repository<Modele>,
  ) {}

  getAll(): Promise<Modele[]> {
    return this.repository.find();
  }

  getById(id: number): Promise<Modele> {
    return this.repository.findOne(id);
  }

  getByMarqueId(marqueId: number): Promise<Modele[]> {
    return this.repository.find({
      where: {
        marqueId: marqueId,
      },
    });
  }

  create(modele: Partial<Modele>): Promise<Modele> {
    console.log('modele', modele);
    return this.repository.save(modele);
  }

  update(id: number, modele: Partial<Modele>): Promise<UpdateResult> {
    console.log('modele', modele);
    return this.repository.update({id}, modele);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
