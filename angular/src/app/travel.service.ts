import { Injectable } from '@angular/core';
import { travel } from '../app/travel';
import { PRODS } from '../app/mock_travel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  public getTravels():Observable<travel[]>{
    return of(PRODS);
  }

  public getTravel(id):travel{
    return PRODS.find(p => p.id == id);
  }
}
