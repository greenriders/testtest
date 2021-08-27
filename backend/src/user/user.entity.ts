import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique, ManyToOne, OneToMany, OneToOne } from "typeorm";
import Cipher from '../auth/cipher';
import { Demande } from "src/demande/demande.entity";
import { Role } from "../enums/role.enum";
import { Distributeur } from "src/distributeur/distributeur.entity";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  code: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ unique: true })
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = Cipher.digest(this.password);
  }

  @Column({ length: 128, nullable: false })
  password: string;


  @OneToMany(type => Demande, demande => demande.technicien)
  demandes: Demande[];


  // Demandes created by the user 
  @OneToMany(type => Demande, demande => demande.createdBy)
  createdDemandes:Demande[];

  @Column({
    type: "enum",
    enum: Role,
    default: Role.Invité
  })
  role: Role;


  @OneToOne(() => Distributeur, d => d.owner , {lazy : true }) 
  distributeur?: Distributeur;

   @Column({ default : false })
   isActivated: boolean;

}