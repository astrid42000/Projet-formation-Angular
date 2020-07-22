import {Component, OnInit, Output} from '@angular/core';
import {VoitureService} from '../../services/voiture.service';
import {Voiture} from '../../models/voiture';
import{Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Component({
  selector: 'app-resume-fiche',
  templateUrl: './resume-fiche.component.html',
  styleUrls: ['./resume-fiche.component.css']
})
export class ResumeFicheComponent implements OnInit {
isLoading:boolean;
  @Input() voiture: Voiture;


  constructor(private voitureService: VoitureService, private route:ActivatedRoute, ) { }

  ngOnInit(): void {
    this.isLoading = true;
}


}

