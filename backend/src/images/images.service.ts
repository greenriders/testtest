import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Image } from './images.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private repository: Repository<Image>,
  ) { }

  getByDemandeId(demandeId: number): Promise<Image[]> {
    return this.repository.find( { where:
      { demande: demandeId }
  });
  }

  create(image: Partial<Image>): Promise<Image> {
    return this.repository.save(this.repository.create(image));
  }

  update(id: number, image: Partial<Image>): Promise<UpdateResult> {
    return this.repository.update({ id }, image);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  save(image: Partial<Image>): Promise<Image> {
    return this.repository.save(image);
  }

}
