import { NgModule } from '@angular/core'; 
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FlightComponent } from './flight/flight.component';
import {HotelComponent} from './hotel/hotel.component';
import {HotelbookingComponent} from './hotelbooking/hotelbooking.component';
import {HotelthankyouComponent} from './hotelthankyou/hotelthankyou.component';
import {FlightbookingComponent} from './flightbooking/flightbooking.component';
import {FlightthankyouComponent} from './flightthankyou/flightthankyou.component';
import {CarComponent} from './car/car.component';
import {CarbookingComponent} from './carbooking/carbooking.component';
import {CarthankyouComponent} from './carthankyou/carthankyou.component';

const routes: Routes = [
  { path: "" , redirectTo: "/home", pathMatch: "full" },
  { path:"home" , component:HomeComponent},
  { path:"signup" , component:SignupComponent },
  { path:"login" , component:LoginComponent },
  { path:"flight" , component:FlightComponent },
  { path:"hotel" , component:HotelComponent},
  { path:"hotelbooking/:id" , component:HotelbookingComponent},  
  { path:"hotelthankyou" , component:HotelthankyouComponent},
  { path:"flightbooking/:id" , component:FlightbookingComponent},
  { path:"flightthankyou" , component:FlightthankyouComponent},
  { path:"car" , component:CarComponent},
  { path:"carbooking/:id" , component:CarbookingComponent},
  { path:"carthankyou" , component:CarthankyouComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,SignupComponent,LoginComponent,FlightComponent,HotelComponent,HotelbookingComponent,HotelthankyouComponent,FlightbookingComponent,FlightthankyouComponent,CarComponent,CarbookingComponent,CarthankyouComponent]