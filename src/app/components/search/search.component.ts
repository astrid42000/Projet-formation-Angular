import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../../services/voiture.service';
import {MarqueService} from '../../services/marque.service';
import {Voiture} from '../../models/voiture';
import {Marque} from '../../models/marque';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
voitures: Voiture[] ;
marques: Marque[] ;
marque: Marque = null;
searchVoiture: Voiture = new Voiture() ;

  constructor(private route: ActivatedRoute, private voitureService: VoitureService, private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.voitureService.allVoitures().subscribe((data: Voiture[]) => {this.voitures = data; } );
    this.marqueService.getAll().subscribe((newData: Marque[]) => {this.marques = newData; } );
    this.voitureService.getVoitureByMarque( '').subscribe((data2: Voiture[]) => {this.voitures = data2});
  }

  triData() {
    console.log('todo');
  }


  filtreMarque() {
console.log (this.searchVoiture.marque);

    if (this.searchVoiture.marque.nom === null) {
      this.voitureService.allVoitures().subscribe((data: Voiture[]) => {this.voitures = data; } );
    } else {
      this.voitureService.getVoitureByMarque(this.searchVoiture.marque.nom).subscribe((data2: Voiture[]) => {this.voitures = data2});
    }
  }

}
