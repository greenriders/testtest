
import { Demande } from "src/demande/demande.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Bill  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    path: string;

    @ManyToOne(type => Demande, demande => demande.bills, { eager: true, cascade: true })
    demande: Demande;
}