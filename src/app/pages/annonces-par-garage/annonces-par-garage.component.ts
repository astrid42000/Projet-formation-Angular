import { Component, OnInit } from '@angular/core';
import {GarageService} from '../../services/garage.service';
import {VoitureService} from '../../services/voiture.service';
import {Garages} from '../../models/garages';
import {ActivatedRoute, Router} from '@angular/router';
import {Voiture} from '../../models/voiture';
import {ModelesService} from '../../services/modeles.service';
import {Modeles} from '../../models/modeles';
import {Marque} from '../../models/marque';
import {MarqueService} from '../../services/marque.service';

@Component({
  selector: 'app-annonces-par-garage',
  templateUrl: './annonces-par-garage.component.html',
  styleUrls: ['./annonces-par-garage.component.css']
})
export class AnnoncesParGarageComponent implements OnInit {
garage: Garages;
isLoading: boolean;
annonce: Voiture[];
newAnnonce = new Voiture();
mesModeles: Modeles[];
mesmarques: Marque[];

constructor(private garageService: GarageService, private voitureService: VoitureService, private router: Router, private route: ActivatedRoute, private modelesService: ModelesService, private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.garageService.garageById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Garages) => {
      this.isLoading = false;
      this.garage = data;
    });

    this.voitureService.getVoitureByGarage(this.garage.id).subscribe((data2: Voiture[]) => {this.annonce = data2 ; });

    this.modelesService.getAllModele().subscribe((newdata: Modeles[]) => {
      this.mesModeles = newdata;
    });

    this.marqueService.getAll().subscribe((newdata2: Marque[]) => {
      this.mesmarques = newdata2;
    })
  }

ajoutVoiture(){
    this.isLoading = true;
    this.voitureService.AjoutVoiture(this.newAnnonce).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/listeAnnonce', this.garage.id]);
    });
}
}
