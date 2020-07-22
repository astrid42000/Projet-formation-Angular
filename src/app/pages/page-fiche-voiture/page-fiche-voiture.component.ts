import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VoitureService} from '../../services/voiture.service';
import {Voiture} from '../../models/voiture';

@Component({
  selector: 'app-page-fiche-voiture',
  templateUrl: './page-fiche-voiture.component.html',
  styleUrls: ['./page-fiche-voiture.component.css']
})
export class PageFicheVoitureComponent implements OnInit {
  voiture: Voiture;
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private voitureService: VoitureService) { }

  ngOnInit(): void {

    this.voitureService.voitureById(+ this.route.snapshot.paramMap.get('id')).subscribe((data: Voiture) => {
      this.voiture = data;});
  }

}
