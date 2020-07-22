import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnnonceRapideComponent } from './components/annonce-rapide/annonce-rapide.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AvisComponent } from './components/avis/avis.component';
import { ResumeFicheComponent } from './components/resume-fiche/resume-fiche.component';
import { PopupInscriptionComponent } from './components/popup-inscription/popup-inscription.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageFicheVoitureComponent } from './pages/page-fiche-voiture/page-fiche-voiture.component';
import { PageAproposComponent } from './pages/page-apropos/page-apropos.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { InfosPersoComponent } from './components/infos-perso/infos-perso.component';
import { ListeGaragesComponent } from './components/liste-garages/liste-garages.component';
import { AnnoncesParGarageComponent } from './pages/annonces-par-garage/annonces-par-garage.component';
import { FormulaireGarageComponent } from './components/formulaire-garage/formulaire-garage.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { PageAjoutGarageComponent } from './pages/page-ajout-garage/page-ajout-garage.component';
import { UpdateGarageComponent } from './pages/update-garage/update-garage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    AnnonceRapideComponent,
    ConnexionComponent,
    InscriptionComponent,
    ContactComponent,
    NavbarComponent,
    LogoComponent,
    AProposComponent,
    AvisComponent,
    ResumeFicheComponent,
    PopupInscriptionComponent,
    PageConnexionComponent,
    PageFicheVoitureComponent,
    PageAproposComponent,
    PageContactComponent,
    AccueilComponent,
    InfosPersoComponent,
    ListeGaragesComponent,
    AnnoncesParGarageComponent,
    FormulaireGarageComponent,
    PageAjoutGarageComponent,
    UpdateGarageComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
