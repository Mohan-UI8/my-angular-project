import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedComponent } from './shared/shared.component';
import { OfferstagComponent } from './offerstag/offerstag.component';
import { TopFlightsComponent } from './top-flights/top-flights.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { ParasectionComponent } from './parasection/parasection.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SharedComponent,
    OfferstagComponent,
    TopFlightsComponent,
    HomeComponent,
    BannerComponent,
    ParasectionComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
