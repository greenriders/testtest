import { Modele } from './../modele/modele.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produit } from 'src/produit/produit.entity';

@Entity()
export class Marque {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @OneToMany(type => Modele, modele => modele.marque)
    modeles: Modele[];

    @OneToMany(type => Produit, produit => produit.marque)
    produit: Produit[];

}
