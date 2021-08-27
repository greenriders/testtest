import { Demande } from "src/demande/demande.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Intervention {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @OneToMany(type => Demande, demande => demande.intervention)
    demandes: Demande[];

}