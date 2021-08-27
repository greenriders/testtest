import { Demande } from "src/demande/demande.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Transporteur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    urllink: string;

    @OneToMany(type => Demande, demande => demande.transporteur)
    demandes: Demande[];

}