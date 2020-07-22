import {Voiture} from './voiture';

export class Garages {
  id: number;
  nom: string;
  adresse: string;
  telephone: string;


  constructor(id: number= 0, nom: string = null, adresse: string= null, telephone: string = null) {
    this.id = id;
    this.nom = nom;
    this.adresse = adresse;
    this.telephone = telephone;
  }

}
