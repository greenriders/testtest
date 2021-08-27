import { DemandeToAnomalie } from './demande-to-anomalie.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Demande } from './demande.entity';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class DemandeService {
  constructor(
    @InjectRepository(Demande)
    private repository: Repository<Demande>,

    @InjectRepository(DemandeToAnomalie)
    private demandeToAnomalieRepository: Repository<DemandeToAnomalie>,
  ) { }

  async findeOrCreateDemandeToAnomalie(demandeToAnomalie :Partial<DemandeToAnomalie>) : Promise<DemandeToAnomalie> {
    let result = await this.demandeToAnomalieRepository.findOne({ demandeId : demandeToAnomalie.demandeId, anomalieId: demandeToAnomalie.anomalieId});
    if (result) return result; //if it exist return it

    return this.demandeToAnomalieRepository.save(demandeToAnomalie); //if not exist, create new one
  }
  

  getAll(where : any = {} ): Promise<Demande[]> {
    console.log("get demande", this.repository)
    return this.repository.find({ where : where ,  relations : [ 'demandeToAnomalie' , 'demandeToAnomalie.anomalie']});
  }

  getById(id: number): Promise<Demande> {
    return this.repository.findOne(id , { relations : [ 'produit', 'produit.modele', 'demandeToAnomalie']});
  }
  
  create(demande: Partial<Demande>): Promise<Demande> {
    return this.repository.save(this.repository.create(demande));
  }

  update(id: number, demande: Partial<Demande>): Promise<UpdateResult> {
    return this.repository.update({ id }, demande);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  save(demande: Partial<Demande>): Promise<Demande> {
    return this.repository.save(demande);
  }

  // async pagination(options: IPaginationOptions): Promise<Pagination<Demande>> {
  //   return paginate<Demande>(this.repository, options)
  // }
  
}
