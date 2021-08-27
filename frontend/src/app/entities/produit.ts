import { Modele } from './modele';
import { Marque } from './marque';
export interface Produit{
  id: number,
  nom: string,
  marqueId: number,
  modeleId : number,
  codeEAN: string,
  longueur: string,
  largeur: string,
  hauteur: string,
  Poids: string,
}
