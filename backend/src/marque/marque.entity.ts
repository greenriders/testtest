import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Modele } from 'src/modele/modele.entity';

@Entity()
export class Marque {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @OneToMany(() => Modele, modele => modele.id)
    public modele: Modele[];
}
