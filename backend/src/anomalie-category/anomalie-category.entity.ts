import { Anomalie } from 'src/anomalie/anomalie.entity';
import { Demande } from 'src/demande/demande.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnomalieCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany((type) => Anomalie, (anomalie) => anomalie.anomalieCategory)
  anomalies: Anomalie[];

  // @OneToMany(type => Demande, demande => demande.anomalieCategory)
  //   demandes: Demande[];

}
