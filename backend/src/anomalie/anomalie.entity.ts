import { DemandeToAnomalie } from './../demande/demande-to-anomalie.entity';
import { AnomalieCategory } from '../anomalie-category/anomalie-category.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anomalie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column({ type: 'double' })
    prix: number;

    @ManyToOne(type => AnomalieCategory, anomalieCategory => anomalieCategory.anomalies)
    anomalieCategory: AnomalieCategory;

    @Column()
    anomalieCategoryId: number;

    // to add a relationship between anomalie and demande
    @OneToMany(() => DemandeToAnomalie, demandeToAnomalie => demandeToAnomalie.anomalieId)
    public demandeToAnomalie!: DemandeToAnomalie[];


}
