import { Transporteur } from './../transporteur/transporteur.entity';
import { Etatproduit } from './../etatproduit/etatproduit.entity';
import { DemandeToAnomalie } from './demande-to-anomalie.entity';
import { Changement } from './../changement/changement.entity';
import { Intervention } from './../intervention/intervention.entity';
import { Distributeur } from '../distributeur/distributeur.entity';
import { Produit } from "src/produit/produit.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne,ManyToMany,JoinTable } from "typeorm";
import { Client } from 'src/client/client.entity';
import { User } from 'src/user/user.entity';
import { Anomalie } from 'src/anomalie/anomalie.entity';
import { Image } from 'src/images/images.entity';
import { Status } from 'src/enums/status.enum';
import { Bill } from 'src/bill/bill.entity';

@Entity()
export class Demande {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    numRMA: string;

    @Column()
    numeroSerie: string;

    @ManyToOne(type => Produit, produit => produit.demandes, { eager: true })
    produit: Produit;

    @Column({ nullable: true })
    produitId: number;


    @ManyToOne(type => Distributeur, distributeur => distributeur.demandes, { eager: true, onDelete: "CASCADE" })
    distributeur: Distributeur;

    @Column({ nullable: true })
    distributeurId: number; //magasin Professionnel 

    @ManyToOne(type => Client, client => client.demandes, { eager: true })
    client: Client;

    @Column({ nullable: true })
    clientId: number;

    @Column({ type: 'date' })
    dateDemande: Date;

    @Column({ type: 'date' })
    dateAchat: Date;

    @Column({ type: 'date', nullable: true, default: null })
    datePriseEnCharge: Date;

    @Column()
    panneClient: string;

    // Traitment 

     @ManyToMany(type => Anomalie)
     @JoinTable()
     anomalie: Anomalie[];


    // TODO make typologie relation 
    @Column({ nullable: true })
    typologie?: string;

    @Column({ nullable: true })
    typeGarantie?: boolean;


    @ManyToOne(type => Etatproduit, etatProduit => etatProduit.demandes, { eager: true })
    etatProduit: Etatproduit;

    @Column({ nullable: true })
    etatProduitId?: number;

    @Column({ nullable: true })
    accessoires?: string;

    @Column({ nullable: true })
    emballage?: boolean;

    // TODO is technecien role = 'technicien' 
    @ManyToOne(type => User, technicien => technicien.demandes)
    technicien?: User;


    @Column({ nullable: true })
    technicienId?: number;


    @Column({
        type: "enum",
        enum: Status,
        default: Status.Recu
    })
    status: Status;

    // fiche demande

    // @ManyToOne(type => AnomalieCategory, anomalieCategory => anomalieCategory.demandes, { eager: true })
    // anomalieCategory: AnomalieCategory;

    // @Column({ nullable: true })
    // anomalieCategoryId?: number;

    // to add a relationship between anomalie and demande
    @OneToMany(() => DemandeToAnomalie, demandeToAnomalie => demandeToAnomalie.demande)
    public demandeToAnomalie!: DemandeToAnomalie[];


    @ManyToOne(type => Intervention, intervention => intervention.demandes, { eager: true })
    intervention: Intervention;

    @Column({ nullable: true })
    interventionId?: number;

    @ManyToOne(type => Changement, changement => changement.demandes, { eager: true })
    changement: Changement;

    @Column({ nullable: true })
    changementId?: number;

    @Column({ nullable: true })
    note: string;

    @Column({ type: 'date', nullable: true, default: null })
    dateSortie: Date;

    // livraison
    @ManyToOne(type => Transporteur, transporteur => transporteur.demandes, { eager: true })
    transporteur: Transporteur;

    @Column({ nullable: true })
    transporteurId?: number;

    @Column({ nullable: true })
    dureeReparation: string;

    @Column({ nullable: true })
    numeroTracking: string;
    demande: Promise<DemandeToAnomalie[]>;

    @Column({ type: 'double', default: 0 })
    facture: number;


    @ManyToOne(type => User, user => user.createdDemandes)
    createdBy: User;

    @Column({ nullable: true, default: null })
    createdById: number;

    @Column({ default: '' })
    uploadFacture: string;

    @Column({ default: '' })
    clientNom: string;

    @Column({ default: '' })
    clientEmail: string;

    @OneToMany(() => Image, image => image.id)
    public images: Image[];

    @OneToMany(() => Bill, bill => bill.id)
    public bills: Bill[];

}





// me with r modification
// @Injectable()
// export class DemandsService {
//   constructor(
//     @InjectRepository(Demandereparation)
//     private demandRepository: DemandRepository,
//   ) {}


// r mod for repos
// @Injectable()
// export class DemandRepository extends Repository<Demandereparation>{
//     findByName(name:string){
//         return this.findOne({ where : { name : name}}); 
//     }
// }


//final step 
// @Put(':id')
// async update(@Param('id') id, @Body() demand: Demandereparation): Promise<any> {

//     return this.demandRepository.update( id ,  demand );
// }  

// @Put(':id/update')
// async update(@Param('id') id, @Body() demand: Demandereparation): Promise<any> {

//     console.log('Update #' + demand.id)

//     return this.demandRepository.update( id ,  demand );
// }  