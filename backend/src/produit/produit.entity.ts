import { ManyToOne, OneToMany } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Demande } from 'src/demande/demande.entity';
import { Modele } from './../modele/modele.entity';

@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    codeEAN: string;

    @Column()
    longueur: string;

    @Column()
    largeur: string;

    @Column()
    hauteur: string;

    @Column()
    poids: string;

    @OneToMany(type => Demande, demande => demande.produit)
    demandes: Demande[];

    @Column()
    modeleId: number;

    @ManyToOne(type => Modele, modele => modele.id, { eager: true, cascade: true })
    modele: Modele;

}
