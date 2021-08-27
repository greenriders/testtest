import { JoinColumn, ManyToOne, OneToMany } from 'typeorm';
// import { Produit } from './produit.entity';
import { Marque } from './../marque/marque.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Modele } from 'src/modele/modele.entity';
import { Demande } from 'src/demande/demande.entity';

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

    // @OneToOne(() => Produit, (produit: Produit) => produit.marque)
    // public produit: Produit;

    @ManyToOne(type => Marque, marque => marque.produit, { eager: true })
    marque: Marque;

    @Column()
    marqueId: number;

    @ManyToOne(type => Modele, modele => modele.produit, { eager: true })
    modele: Modele;

    @Column()
    modeleId: number;


}
