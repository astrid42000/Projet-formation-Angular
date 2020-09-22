import {Garages} from './garages';

export class InfoPerso {
  id: number;
  nomPro: string,
  prenomPro: string;
  siretPro: string;
  email: string;
  password: string;
  garage: Garages;


  constructor(id: number, nomPro: string, prenomPro: string, siretPro: string, email: string, password: string, garage: Garages) {
    this.id = id;
    this.nomPro = nomPro;
    this.prenomPro = prenomPro;
    this.siretPro = siretPro;
    this.email = email;
    this.password = password;
    this.garage = garage;
  }
}
