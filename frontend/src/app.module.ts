import { DemandereparationService } from 'src/app/services/demandereparation.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/core/app-routing.module';
import { AppComponent } from './app/core/app.component';
import { DemandeReparationComponent } from './app/components/demande-reparation/demande-reparation.component';
import { HomeComponent } from './app/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app/core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartenairesComponent } from './app/components/partenaires/partenaires.component';
import { DonneesComponent } from './app/components/donnees/donnees.component';
import { StatistiquesComponent } from './app/components/statistiques/statistiques.component';
import { TraitementReparationComponent } from './app/components/traitement-reparation/traitement-reparation.component';
import { DistributeursComponent } from './app/components/distributeurs/distributeurs.component';
import { ClientsComponent } from './app/components/clients/clients.component';
import { ProduitsComponent } from './app/components/produits/produits.component';
import { SuivireparationComponent } from './app/components/suivireparation/suivireparation.component';
import { MarqueComponent } from './app/components/marque/marque.component';
import { ModeleComponent } from './app/components/modele/modele.component';
import { AnomalieComponent } from './app/components/anomalie/anomalie.component';
import { AnomalieCategoryComponent } from './app/components/anomalie-category/anomalie-category.component';
import { LoginComponent } from './app/components/auth/login/login.component';
import { RegisterComponent } from './app/components/auth/register/register.component';
import { SuiviComponent } from './app/components/suivi/suivi.component';
import { SuivinavComponent } from './app/components/suivinav/suivinav.component';
import { ChangementComponent } from './app/components/changement/changement.component';
import { ModifytraitementComponent } from './app/components/traitement-reparation/modifytraitement/modifytraitement.component';
import { AuthInterceptor } from './app/components/auth/_helpers/auth.interceptor';
import { AddProduitComponent } from './app/components/produits/add-produit/add-produit.component';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './app/components/user/user.component';
import { AddUserComponent } from './app/components/user/add-user/add-user.component';
import { EtatproduitComponent } from './app/components/etatproduit/etatproduit.component';
import { AddAnomalieComponent } from './app/components/anomalie/add-anomalie/add-anomalie.component';
import { AddAnomalieCategoryComponent } from './app/components/anomalie-category/add-anomalie-category/add-anomalie-category.component';
import { AddChangementComponent } from './app/components/changement/add-changement/add-changement.component';
import { AddClientComponent } from './app/components/clients/add-client/add-client.component';
import { AddDemandeComponent } from './app/components/demande-reparation/add-demande/add-demande.component';
import { AddDistributeurComponent } from './app/components/distributeurs/add-distributeur/add-distributeur.component';
import { AddEtatproduitComponent } from './app/components/etatproduit/add-etatproduit/add-etatproduit.component';
import { AddMarqueComponent } from './app/components/marque/add-marque/add-marque.component';
import { AddModeleComponent } from './app/components/modele/add-modele/add-modele.component';
import { ModifyAnomalieComponent } from './app/components/anomalie/modify-anomalie/modify-anomalie.component';
import { ModifyChangementComponent } from './app/components/changement/modify-changement/modify-changement.component';
import { ModifyClientComponent } from './app/components/clients/modify-client/modify-client.component';
import { ModifyDemandeReparationComponent } from './app/components/demande-reparation/modify-demande-reparation/modify-demande-reparation.component';
import { ModifyDistributeurComponent } from './app/components/distributeurs/modify-distributeur/modify-distributeur.component';
import { ModifyEtatproduitComponent } from './app/components/etatproduit/modify-etatproduit/modify-etatproduit.component';
import { ModifyMarqueComponent } from './app/components/marque/modify-marque/modify-marque.component';
import { ModifyModeleComponent } from './app/components/modele/modify-modele/modify-modele.component';
import { ModifyProduitsComponent } from './app/components/produits/modify-produits/modify-produits.component';
import { ModifyAnomalieCategoryComponent } from './app/components/anomalie-category/modify-anomalie-category/modify-anomalie-category.component';
import { ModifyUserComponent } from './app/components/user/modify-user/modify-user.component';
import { DialogComponent } from './app/components/dialog/dialog.component';
import { InterventionComponent } from './app/components/intervention/intervention.component';
import { AddInterventionComponent } from './app/components/intervention/add-intervention/add-intervention.component';
import { ModifyInterventionComponent } from './app/components/intervention/modify-intervention/modify-intervention.component';
import { FichereparationComponent } from './app/components/fichereparation/fichereparation.component';
import { ModifyFichereparationComponent } from './app/components/fichereparation/modify-fichereparation/modify-fichereparation.component';
import { ModifyLivraisonComponent } from './app/components/livraison/modify-livraison/modify-livraison.component';
import { LivraisonComponent } from './app/components/livraison/livraison.component';
import { NgxPrintModule } from 'ngx-print';
import { DetailsComponent } from './app/components/details/details.component';
import { HomeProComponent } from './app/components/home-pro/home-pro.component';
import { AddDemandproComponent } from './app/components/home-pro/add-demandpro/add-demandpro.component';
import { TransporteurComponent } from './app/components/transporteur/transporteur.component';
import { AddTransporteurComponent } from './app/components/transporteur/add-transporteur/add-transporteur.component';
import { ModifyTransporteurComponent } from './app/components/transporteur/modify-transporteur/modify-transporteur.component';
import { DemandProComponent } from './app/components/demand-pro/demand-pro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemandeReparationComponent,
    PartenairesComponent,
    DonneesComponent,
    StatistiquesComponent,
    TraitementReparationComponent,
    DistributeursComponent,
    ClientsComponent,
    ProduitsComponent,
    SuivireparationComponent,
    MarqueComponent,
    ModeleComponent,
    AnomalieComponent,
    AnomalieCategoryComponent,
    RegisterComponent,
    LoginComponent,
    SuiviComponent,
    SuivinavComponent,
    ChangementComponent,
    ModifytraitementComponent,
    AddProduitComponent,
    UserComponent,
    AddUserComponent,
    EtatproduitComponent,
    AddAnomalieComponent,
    AddAnomalieCategoryComponent,
    AddChangementComponent,
    AddClientComponent,
    AddDemandeComponent,
    AddDistributeurComponent,
    AddEtatproduitComponent,
    AddMarqueComponent,
    AddModeleComponent,
    ModifyAnomalieComponent,
    ModifyAnomalieCategoryComponent,
    ModifyChangementComponent,
    ModifyClientComponent,
    ModifyDemandeReparationComponent,
    ModifyDistributeurComponent,
    ModifyEtatproduitComponent,
    ModifyMarqueComponent,
    ModifyModeleComponent,
    ModifyProduitsComponent,
    ModifyUserComponent,
    DialogComponent,
    InterventionComponent,
    AddInterventionComponent,
    ModifyInterventionComponent,
    FichereparationComponent,
    ModifyFichereparationComponent,
    LivraisonComponent,
    ModifyLivraisonComponent,
    DetailsComponent,
    HomeProComponent,
    AddDemandproComponent,
    TransporteurComponent,
    AddTransporteurComponent,
    ModifyTransporteurComponent,
    DemandProComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    NgxPrintModule
  ],
  providers: [DemandereparationService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
