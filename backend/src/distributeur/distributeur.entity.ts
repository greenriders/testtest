import { Client } from './../client/client.entity';
// import { DistributeurModule } from './distributeur.module';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Demande } from 'src/demande/demande.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Distributeur{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    adresse: string;

    @Column()
    ville: string;

    @Column()
    codePostal: string;

    @Column()
    telephone: string; 

    @Column()
    email: string;

    @Column()
    pays: string;

    @OneToMany(type => Client, client => client.distributeur)
    clients: Client[];

    @OneToMany(type => Demande, demande => demande.distributeur , {lazy : true })
    demandes: Demande[];

    

    @OneToOne(() => User, owner => owner.distributeur) // specify inverse side as a second parameter
    @JoinColumn()
    owner?: User;

    @Column({ nullable: true })
    ownerId?: number;

   
}
