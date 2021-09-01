import { SousMarque } from './../sous-marque/sous-marque.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Produit } from 'src/produit/produit.entity';

@Entity()
export class Modele {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @ManyToOne(type => SousMarque, sousMarque => sousMarque.modeles, { eager: true, cascade: true })
    sousMarque: SousMarque;

    @Column()
    sousMarqueId: number;

    @OneToMany(type => Produit, produit => produit.modele)
    produit: Produit[];


}
