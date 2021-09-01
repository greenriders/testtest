import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produit } from 'src/produit/produit.entity';
import { SousMarque } from 'src/sous-marque/sous-marque.entity';

@Entity()
export class Marque {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @OneToMany(() => Produit, produit => produit.marqueId)
    produit: Produit[];

    @OneToMany(() => SousMarque, sousMarque => sousMarque.id)
    public sousMarque: SousMarque[];
}
