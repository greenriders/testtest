import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/enums/role.enum';
import { DeleteResult, getConnection, getRepository, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
// import {getConnection, Connection} from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) { }

  getAllTechnicien(): Promise<User[]> {
    return this.repository.find({ where : { role : Role.Technicien}});
  }

  getAvailableProfessionnel(): Promise<User[]> {
    return getRepository(User)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.distributeur', 'distributeur')
    .where('user.role = :role', { role: 'professionnel' })
    .andWhere('distributeur.ownerId is null').getMany();
    // return getConnection()
    // .createQueryBuilder(User)
    // .leftJoinAndSelect('user.distributer', 'distributer')
    // .where('user.role = :role', { role: 'professionnel' })
    // .andWhere('user.distributer.ownerId is null').execute();
    // return this.repository
    // .find({ where : { role : Role.Professionnel}});

  }

  getAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<User> {
    return await this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: {
        email: email,
      },
    });
  }

  create(user: Partial<User>): Promise<User> {
    return this.repository.save(this.repository.create(user));
  }

  update(id: number, user: Partial<User>): Promise<UpdateResult> {
    console.log('user', user);
    return this.repository.update({id}, user);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
