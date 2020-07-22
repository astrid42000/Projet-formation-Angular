export class InfoPerso {
  id: number;
  nom: string,
  prenom: string;
  adresse: string;
  telephone: string;
  siret: string;


  constructor(id: number, nom: string, prenom: string, adresse: string, telephone: string, siret: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.telephone = telephone;
    this.siret = siret;
  }
}
