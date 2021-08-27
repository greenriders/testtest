import { Demande } from "src/demande/demande.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etatproduit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    etat: string;

    @OneToMany(type => Demande, demande => demande.changement)
    demandes: Demande[];

}