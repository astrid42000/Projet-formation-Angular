import {Voiture} from './voiture';

export class Marque {
  id: string;
  nom: string;
  voitures: Voiture[];


  constructor(id: string, nom: string, voitures: Voiture[]) {
    this.id = id;
    this.nom = nom;
    this.voitures = voitures;
  }
}
