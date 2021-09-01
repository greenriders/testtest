import { Distributeur } from './../distributeur/distributeur.entity';
import { Client } from './client.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ClientService {
  // delete(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(Client)
    private repository: Repository<Client>,
  ) {}

  getAll(): Promise<Client[]> {
    console.log('get all clients', this.repository);
    return this.repository.find();
  }

  getById(id: number): Promise<Client> {
    return this.repository.findOne(id);
  }

  create(client: Partial<Client>): Promise<Client> {
    console.log('client', client)
    return this.repository.save(client);
  }

  update(id: number, client: Partial<Client>): Promise<UpdateResult> {
    console.log('client', client);
    return this.repository.update({ id }, client);
  }

  deleteClient(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  async findByEmail(email: string): Promise<Client> {
    return  this.repository.findOne({
      where: {
        email: email,
      },
    });
  }
}
