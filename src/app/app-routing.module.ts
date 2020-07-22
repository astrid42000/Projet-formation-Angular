import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageConnexionComponent} from './pages/page-connexion/page-connexion.component';
import {PageFicheVoitureComponent} from './pages/page-fiche-voiture/page-fiche-voiture.component';
import {PageAproposComponent} from './pages/page-apropos/page-apropos.component';
import {PageContactComponent} from './pages/page-contact/page-contact.component';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {FormulaireGarageComponent} from './components/formulaire-garage/formulaire-garage.component';
import {AnnoncesParGarageComponent} from './pages/annonces-par-garage/annonces-par-garage.component';
import {PageAjoutGarageComponent} from './pages/page-ajout-garage/page-ajout-garage.component';
import {UpdateGarageComponent} from './pages/update-garage/update-garage.component';




const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'connexion', component: PageConnexionComponent},
  {path: 'contact' , component: PageContactComponent},
  {path: 'apropos', component: PageAproposComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'monProfil', component: PageAjoutGarageComponent},
  {path: 'detail/:id', component: PageFicheVoitureComponent},
  {path: 'listeAnnonce/:id', component: AnnoncesParGarageComponent},
  {path: 'AjoutGarage', component: FormulaireGarageComponent},
  {path: 'edit/update/:id', component: UpdateGarageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
