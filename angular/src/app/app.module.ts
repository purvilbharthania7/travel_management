import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { FlightComponent } from './flight/flight.component';
import { DataComponent } from './data/data.component';
//import { CarbookingComponent } from './carbooking/carbooking.component';
//import { CarthankyouComponent } from './carthankyou/carthankyou.component';
//import { FlightthankyouComponent } from './flightthankyou/flightthankyou.component';
//import { CarComponent } from './car/car.component';
//import { HotelComponent } from './hotel/hotel.component';
//import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
//import { HotelthankyouComponent } from './hotelthankyou/hotelthankyou.component';
//import { FlightbookingComponent } from './flightbooking/flightbooking.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DataComponent,
    //CarbookingComponent,
    //CarthankyouComponent,
    //FlightthankyouComponent,
    //CarComponent,
    //HotelComponent,
    //HotelbookingComponent,
    //HotelthankyouComponent,
    //FlightbookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
