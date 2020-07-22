import { Component, OnInit } from '@angular/core';
import {Voiture} from '../../models/voiture';
import {VoitureService} from '../../services/voiture.service';

@Component({
  selector: 'app-annonce-rapide',
  templateUrl: './annonce-rapide.component.html',
  styleUrls: ['./annonce-rapide.component.css']
})
export class AnnonceRapideComponent implements OnInit {
  myVoitures: Voiture[];

  constructor(private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.voitureService.allVoitures().subscribe((data: Voiture[]) => {
      this.myVoitures = data;
    });

  }
}
