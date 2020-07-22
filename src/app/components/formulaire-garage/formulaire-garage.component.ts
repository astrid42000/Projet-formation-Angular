import { Component, OnInit } from '@angular/core';
import {Garages} from '../../models/garages';
import {GarageService} from '../../services/garage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Voiture} from '../../models/voiture';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Component({
  selector: 'app-formulaire-garage',
  templateUrl: './formulaire-garage.component.html',
  styleUrls: ['./formulaire-garage.component.css']
})
export class FormulaireGarageComponent implements OnInit {
  garage = new Garages();
  listeGarage: Garages[];
  isLoading: boolean;

  constructor(private garageService: GarageService, private route: Router) { }

  ngOnInit(): void {
    this.garageService.allGarages().subscribe((data: Garages[]) => {
      this.listeGarage = data;
      console.log(this.listeGarage);
    });
  }
 ajout(){
   this.garageService.ajoutGarage(this.garage).subscribe(then => this.route.navigate(['/monProfil']));
   console.log(this.garage);
   }
}
