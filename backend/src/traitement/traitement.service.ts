// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Demande } from 'src/demande/demande.entity';
// import { Repository, DeleteResult } from 'typeorm';

// @Injectable()
// export class TraitementService {
//   constructor(
//     @InjectRepository(Demande)
//     private repository: Repository<Demande>,
//   ) {}

//   getAll(): Promise<Demande[]> {
//     return this.repository.find();
//   }

//   getById(id: number): Promise<Demande> {
//     return this.repository.findOne(id);
//   }

//   create(demande: Partial<Demande>): Promise<Demande> {
//     return this.repository.save(demande);
//   }

//   update(demande: Partial<Demande>): Promise<Demande> {
//     return this.repository.save(demande);
//   }

//   delete(id: number): Promise<DeleteResult> {
//     return this.repository.delete(id);
//   }
// }
