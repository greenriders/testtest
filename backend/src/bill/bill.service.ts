import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Bill } from './bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private repository: Repository<Bill>,
  ) { } 

  
  getAll(where : any = {} ): Promise<Bill[]> {
    return this.repository.find({ where : where ,  relations : [ 'demandeToAnomalie' , 'demandeToAnomalie.anomalie']});
  }

  getById(id: number): Promise<Bill> {
    return this.repository.findOne(id , { relations : [ 'produit', 'produit.modele', 'demandeToAnomalie']});
  }
  
  create(bill: Partial<Bill>): Promise<Bill> {
    return this.repository.save(this.repository.create(bill));
  }

  update(id: number, bill: Partial<Bill>): Promise<UpdateResult> {
    return this.repository.update({ id }, bill);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  save(bill: Partial<Bill>): Promise<Bill> {
    return this.repository.save(bill);
  }

}
