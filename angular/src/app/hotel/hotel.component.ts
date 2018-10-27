import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';
import { travel } from '../travel';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

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
