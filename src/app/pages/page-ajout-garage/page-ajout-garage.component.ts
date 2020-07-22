import { Component, OnInit } from '@angular/core';
import {Garages} from '../../models/garages';
import {GarageService} from '../../services/garage.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-ajout-garage',
  templateUrl: './page-ajout-garage.component.html',
  styleUrls: ['./page-ajout-garage.component.css']
})
export class PageAjoutGarageComponent implements OnInit {
  listeGarage: Garages[];
  isLoading : boolean;
  constructor(private garageService: GarageService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.garageService.allGarages().subscribe((data: Garages[]) => {
      this.listeGarage = data;
      console.log(this.listeGarage);
    });
  }
supprimer(id:number):void {
  this.isLoading = true;
  this.garageService.deleteGarage(id).subscribe(then => {
    this.garageService.allGarages().subscribe((newdata: Garages[]) => {
      this.listeGarage = newdata;
      this.isLoading = false;
    });
  });
}
}

