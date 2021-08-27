import { Demande } from "src/demande/demande.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Changement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @OneToMany(type => Demande, demande => demande.changement)
    demandes: Demande[];

}
