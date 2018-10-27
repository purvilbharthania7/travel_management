import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';
import { travel } from '../travel';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  public prods:travel[];
  constructor(private travelService:TravelService) { }

  ngOnInit() {
    this.getTravels();
  }

  getTravels():void{
    this.travelService.getTravels()
     .subscribe(pr=>this.prods=pr);
  }

}
