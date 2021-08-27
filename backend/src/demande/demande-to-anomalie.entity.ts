import { Anomalie } from "src/anomalie/anomalie.entity";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Demande } from "./demande.entity";

@Entity()
export class DemandeToAnomalie {
    @PrimaryGeneratedColumn()
    public demandeToAnomalieId!: number;

    @Column({nullable : true})
    public demandeId!: number;

    @Column()
    public anomalieId!: number;

    @Column({ type: 'decimal', precision: 4 })
    prix: number;

    @ManyToOne(() => Demande, demande => demande.demandeToAnomalie,{onDelete: "CASCADE"})
    public demande!: Demande;

    @ManyToOne(() => Anomalie, anomalie => anomalie.demandeToAnomalie)
    public anomalie!: Anomalie;
}