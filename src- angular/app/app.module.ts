import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { MenuComponent } from './comps/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './comps/log-in/log-in.component';
import { OurTripsComponent } from './comps/our-trips/our-trips.component';
import { PersonalAreaComponent } from './comps/personal-area/personal-area.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsTripComponent } from './comps/details-trip/details-trip.component';
import { InvatesUserComponent } from './comps/invates-user/invates-user.component';
import { UsUsersComponent } from './comps/us-users/us-users.component';
import { AboutComponent } from './comps/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MenuComponent,
    LogInComponent,
    OurTripsComponent,
    PersonalAreaComponent,
    DetailsTripComponent,
    InvatesUserComponent,
    UsUsersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
