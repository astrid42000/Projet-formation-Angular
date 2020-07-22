import {Marque} from './marque';
import {Image} from './image';
import {Garages} from './garages';

export class Voiture {
  id: number;
  nom: string;
  marque: Marque;
  modele: string;
  carburant: string;
  nbrPortes: number;
  description: string;
  prix: number;
  anneeCirc: number;
  nbrKm: number;
  img: Image;
  garage: Garages;


  constructor(id: number= 0, nom: string= null, marque: Marque= null, modele: string= null, carburant: string= null, nbrPortes: number= 0, description: string= null, prix: number= 0, anneeCirc: number= 0, nbrKm: number= 0, img: Image= null, garage: Garages= null) {
    this.id = id;
    this.nom = nom;
    this.marque = marque;
    this.modele = modele;
    this.carburant = carburant;
    this.nbrPortes = nbrPortes;
    this.description = description;
    this.prix = prix;
    this.anneeCirc = anneeCirc;
    this.nbrKm = nbrKm;
    this.img = img;
    this.garage = garage;
  }
}


