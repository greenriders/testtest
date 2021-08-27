
import { ModifyLivraisonComponent } from './../components/livraison/modify-livraison/modify-livraison.component';
import { ModifyFichereparationComponent } from './../components/fichereparation/modify-fichereparation/modify-fichereparation.component';
import { ModifyInterventionComponent } from './../components/intervention/modify-intervention/modify-intervention.component';
import { AddInterventionComponent } from './../components/intervention/add-intervention/add-intervention.component';
import { ModifyDemandeReparationComponent } from './../components/demande-reparation/modify-demande-reparation/modify-demande-reparation.component';
import { ModifyAnomalieCategoryComponent } from './../components/anomalie-category/modify-anomalie-category/modify-anomalie-category.component';
import { ModifyUserComponent } from './../components/user/modify-user/modify-user.component';
import { AddUserComponent } from './../components/user/add-user/add-user.component';
import { UserComponent } from './../components/user/user.component';
import { ModifyProduitsComponent } from './../components/produits/modify-produits/modify-produits.component';
import { ModifyMarqueComponent } from './../components/marque/modify-marque/modify-marque.component';
import { ModifyEtatproduitComponent } from './../components/etatproduit/modify-etatproduit/modify-etatproduit.component';
import { ModifyDistributeurComponent } from './../components/distributeurs/modify-distributeur/modify-distributeur.component';
import { ModifyAnomalieComponent } from './../components/anomalie/modify-anomalie/modify-anomalie.component';
import { ModifyClientComponent } from './../components/clients/modify-client/modify-client.component';
import { AddModeleComponent } from './../components/modele/add-modele/add-modele.component';
import { AddMarqueComponent } from './../components/marque/add-marque/add-marque.component';
import { AddEtatproduitComponent } from './../components/etatproduit/add-etatproduit/add-etatproduit.component';
import { AddDistributeurComponent } from './../components/distributeurs/add-distributeur/add-distributeur.component';
import { AddDemandeComponent } from './../components/demande-reparation/add-demande/add-demande.component';
import { AddClientComponent } from './../components/clients/add-client/add-client.component';
import { AddChangementComponent } from './../components/changement/add-changement/add-changement.component';
import { AddAnomalieCategoryComponent } from './../components/anomalie-category/add-anomalie-category/add-anomalie-category.component';
import { EtatproduitComponent } from './../components/etatproduit/etatproduit.component';
import { AddProduitComponent } from './../components/produits/add-produit/add-produit.component';
import { ModifytraitementComponent } from './../components/traitement-reparation/modifytraitement/modifytraitement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../components/clients/clients.component';
import { DemandeReparationComponent } from '../components/demande-reparation/demande-reparation.component';
import { DistributeursComponent } from '../components/distributeurs/distributeurs.component';
import { DonneesComponent } from '../components/donnees/donnees.component';
import { HomeComponent } from '../components/home/home.component';
import { PartenairesComponent } from '../components/partenaires/partenaires.component';
import { ProduitsComponent } from '../components/produits/produits.component';
import { StatistiquesComponent } from '../components/statistiques/statistiques.component';
import { SuivireparationComponent } from '../components/suivireparation/suivireparation.component';
import { TraitementReparationComponent } from '../components/traitement-reparation/traitement-reparation.component';
import { MarqueComponent } from '../components/marque/marque.component';
import { ModeleComponent } from '../components/modele/modele.component';
import { AnomalieComponent } from '../components/anomalie/anomalie.component';
import { AddAnomalieComponent } from '../components/anomalie/add-anomalie/add-anomalie.component';
import { AnomalieCategoryComponent } from '../components/anomalie-category/anomalie-category.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { SuiviComponent } from '../components/suivi/suivi.component';
import { SuivinavComponent } from '../components/suivinav/suivinav.component';
import { ChangementComponent } from '../components/changement/changement.component';
import { ModifyChangementComponent } from '../components/changement/modify-changement/modify-changement.component';
import { ModifyModeleComponent } from '../components/modele/modify-modele/modify-modele.component';
import { InterventionComponent } from '../components/intervention/intervention.component';
import { FichereparationComponent } from '../components/fichereparation/fichereparation.component';
import { LivraisonComponent } from '../components/livraison/livraison.component';
import { UserRole } from '../entities/user';
import { AuthGuard } from '../guards/AuthGuard';
import { DetailsComponent } from '../components/details/details.component';
import { HomeProComponent } from '../components/home-pro/home-pro.component';
import { AddDemandproComponent } from '../components/home-pro/add-demandpro/add-demandpro.component';
import { AddTransporteurComponent } from '../components/transporteur/add-transporteur/add-transporteur.component';
import { ModifyTransporteurComponent } from '../components/transporteur/modify-transporteur/modify-transporteur.component';
import { TransporteurComponent } from '../components/transporteur/transporteur.component';
import { DemandProComponent } from '../components/demand-pro/demand-pro.component';


const routes: Routes = [
  /*{
    path: '', children: [
      { path: 'home', component: HomeComponent },
      { path: 'partenaires', component: PartenairesComponent },
      { path: 'donnees', component: DonneesComponent },
    ],
    canActivateChild: [

    ]
    , data: { roles: [UserRole.Admin] }
  },*/

  { path: 'home', component: HomeComponent },
  { path: 'homepro', component: HomeProComponent},
  { path: 'add-demandepro', component: AddDemandproComponent },

  { path: 'partenaires', component: PartenairesComponent },
  { path: 'donnees', component: DonneesComponent },
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'suivireparation', component: SuivireparationComponent },

  { path: 'demandereparation', component: DemandeReparationComponent, canActivate: [AuthGuard], data: { roles: [UserRole.Admin ] } },
  { path: 'add-demande', component: AddDemandeComponent },
  { path: 'demande/:id/modify', component: ModifyDemandeReparationComponent },

  // { path: 'demandePro', component: DemandProComponent },

  { path: 'traitementreparation', component: TraitementReparationComponent },
  { path: 'traitement/:id/modify', component: ModifytraitementComponent },

  { path: 'fichereparation', component: FichereparationComponent, canActivate: [AuthGuard], data: { roles: [UserRole.Technicien] } },
  { path: 'fichereparation/:id/modify', component: ModifyFichereparationComponent },

  { path: 'livraison', component: LivraisonComponent },
  { path: 'livraison/:id/modify', component: ModifyLivraisonComponent },

  { path: 'distributeurs', component: DistributeursComponent },
  { path: 'add-distributeur', component: AddDistributeurComponent },
  { path: 'distributeur/:id/modify', component: ModifyDistributeurComponent },

  { path: 'clients', component: ClientsComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'client/:id/modify', component: ModifyClientComponent },

  { path: 'transporteur', component: TransporteurComponent },
  { path: 'add-transporteur', component: AddTransporteurComponent },
  { path: 'transporteur/:id/modify', component: ModifyTransporteurComponent},

  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'produit/:id/modify', component: ModifyProduitsComponent },

  { path: 'marque', component: MarqueComponent },
  { path: 'add-marque', component: AddMarqueComponent },
  { path: 'marque/:id/modify', component: ModifyMarqueComponent },

  { path: 'modele', component: ModeleComponent },
  { path: 'add-modele', component: AddModeleComponent },
  { path: 'modele/:id/modify', component: ModifyModeleComponent },

  { path: 'anomalie', component: AnomalieComponent },
  { path: 'add-anomalie', component: AddAnomalieComponent },
  { path: 'anomalie/:id/modify', component: ModifyAnomalieComponent },

  { path: 'anomalie-categorty', component: AnomalieCategoryComponent },
  { path: 'add-anomalie-categorty', component: AddAnomalieCategoryComponent },
  { path: 'anomalie-categorty/:id/modify', component: ModifyAnomalieCategoryComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'suivi', component: SuiviComponent },
  { path: 'suivinav', component: SuivinavComponent },

  { path: 'changement', component: ChangementComponent },
  { path: 'add-changement', component: AddChangementComponent },
  { path: 'changement/:id/modify', component: ModifyChangementComponent },

  { path: 'etatproduit', component: EtatproduitComponent },
  { path: 'add-etatproduit', component: AddEtatproduitComponent },
  { path: 'etatproduit/:id/modify', component: ModifyEtatproduitComponent },

  { path: 'intervention', component: InterventionComponent },
  { path: 'add-intervention', component: AddInterventionComponent },
  { path: 'intervention/:id/modify', component: ModifyInterventionComponent },

  { path: 'user', component: UserComponent  },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user/:id/modify', component: ModifyUserComponent },

  { path: 'details/:id', component: DetailsComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
