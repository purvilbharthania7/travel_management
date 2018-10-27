import { Component, OnInit } from '@angular/core';
import { travel } from '../travel';
import { TravelService } from '../travel.service';
import * as $ from 'jquery';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carbooking',
  templateUrl: './carbooking.component.html',
  styleUrls: ['./carbooking.component.css']
})
export class CarbookingComponent implements OnInit {

  public id:number;

  constructor(private route:ActivatedRoute,private travelService:TravelService) { 
    this.route.paramMap
    .subscribe(params =>{
      this.id = +params.get('id');
      //console.log(id);
    })
  }

  ngOnInit() {
    this.getDetails(this.id);
  }

  public p:travel;
  getDetails(id):void{
    this.p = this.travelService.getTravel(id)
  }

}
