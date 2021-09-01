import { Modele } from '../modele/modele.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Marque } from '../marque/marque.entity';

@Entity()
export class SousMarque {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @OneToMany(type => Modele, modele => modele.sousMarqueId)
    modeles: Modele[];

    @Column()
    marqueId: number;

    @ManyToOne(type => Marque, marque => marque.sousMarque, { eager: true, cascade: true })
    marque: Marque;

}
