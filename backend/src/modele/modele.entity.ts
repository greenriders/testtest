import { Produit } from '../produit/produit.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Marque } from '../marque/marque.entity';

@Entity()
export class Modele {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @OneToMany(type => Produit, produit => produit.modele)
    produits: Produit[];

    @Column()
    marqueId: number;

    @ManyToOne(type => Marque, marque => marque.id, { eager: true, cascade: true })
    marque: Marque;

}
