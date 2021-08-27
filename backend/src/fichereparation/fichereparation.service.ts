// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Demande } from 'src/demande/demande.entity';
// import { DeleteResult, Repository } from 'typeorm';

// @Injectable()
// export class FichereparationService {
//     constructor(
//         @InjectRepository(Demande)
//         private repository: Repository<Demande>,
//       ) {}

//       getAll(): Promise<Demande[]> {
//         return this.repository.find();
//       }
    
//       getById(id: number): Demande {
//         return null;
//       }
    
//       create(demande: Partial<Demande>): Promise<Demande> {
//         return this.repository.save(demande);
//       }
    
//       update(demande: Partial<Demande>): Promise<Demande> {
//         return this.repository.save(demande);
//       }
    
//       delete(id: number): Promise<DeleteResult> {
//         return this.repository.delete(id);
//       }
// }
