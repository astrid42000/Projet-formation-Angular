import { Component, OnInit } from '@angular/core';
import {Garages} from '../../models/garages';
import {GarageService} from '../../services/garage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-garage',
  templateUrl: './update-garage.component.html',
  styleUrls: ['./update-garage.component.css']
})
export class UpdateGarageComponent implements OnInit {
modifGarage: Garages;
isLoading:boolean;
  constructor(private garageService: GarageService, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    this.garageService.garageById(+ this.route.snapshot.paramMap.get('id')).subscribe((data:Garages)=>{
      this.modifGarage = data;
    });
  }

  update(){
    this.isLoading=true;
    this.garageService.updateGarage(this.modifGarage).subscribe(then=>{
      this.isLoading=false;
      this.router.navigate(['/monProfil']);
    });
  }
}
