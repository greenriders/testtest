import { Modele } from 'src/app/entities/modele';
import { Marque } from 'src/app/entities/marque';
import { Anomalie } from './anomalie';
import { Produit } from './produit';
import { Changement } from './changement';
import { Intervention } from './intervention';
import { Client } from './client';
import { Distributeur } from './distributeur';
export interface demandeReparations {
  id: number,
  numRMA: string,
  numeroSerie: string,
  produitId: number,
  distributeurId: number,
  clientId: number,
  dateDemande: Date,
  dateAchat: Date,
  panneClient: string,

  datePriseEnCharge?: Date,
  typologie?: string,
  typeGarantie?: boolean,
  marqueId?: number,
  modeleId?: number,
  technicienName?: string,
  etatProduitId?: number,
  accessoires?: string,
  emballage?: boolean,
  ficheReparation?: boolean,

  interventionId?: number,
  changementId?: number,
  note?: string,
  dateSortie?: Date,
  facture?: number,

  transporteurId: string,
  dureeReparation: string,
  numeroTracking: string,

  demandeToAnomalie: any[],
  uploadFacture: string,

  clientNom: string,
  clientEmail: string,

  distributeur?: Distributeur,
  client: Client,
  intervention?: Intervention,
  changement?: Changement,
  produit?: Produit,
  modele?: Modele,
  marque?: Marque,
  anomalie?: Anomalie,
  images: File[],
  bill: File[]
}
