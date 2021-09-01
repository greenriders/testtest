import { Distributeur } from './../distributeur/distributeur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { Demande } from 'src/demande/demande.entity';



@Entity()
export class Client {
    // Client having a scooter 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    telephone: string;

    @Column()
    email: string;

    @Column()
    adresse: string;

    @Column()
    ville: string;

    @Column()
    codePostal: string;

    @Column()
    pays: string;

    @ManyToOne(type => Distributeur, distributeur => distributeur.clients)
    distributeur: Distributeur;

    @Column()
    distributeurId: number;

    @OneToMany(type => Demande, demandereparation => demandereparation.client)
    demandes: Demande[];

    // @Column()
    // distributeur : string


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