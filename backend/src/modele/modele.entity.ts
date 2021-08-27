import { Marque } from './../marque/marque.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Produit } from 'src/produit/produit.entity';

@Entity()
export class Modele {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @ManyToOne(type => Marque, marque => marque.modeles)
    marque: Marque;

    @Column()
    marqueId: number;

    @OneToMany(type => Produit, produit => produit.modele)
    produit: Produit[];


}
