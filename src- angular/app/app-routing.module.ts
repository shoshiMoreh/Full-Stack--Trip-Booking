import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { LogInComponent } from './comps/log-in/log-in.component';
import { OurTripsComponent } from './comps/our-trips/our-trips.component';
import { PersonalAreaComponent } from './comps/personal-area/personal-area.component';
import { DetailsTripComponent } from './comps/details-trip/details-trip.component';
import { UsUsersComponent } from './comps/us-users/us-users.component';
import { InvatesUserComponent } from './comps/invates-user/invates-user.component';
import { AboutComponent } from './comps/about/about.component';

const routes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'ourTrips', component: OurTripsComponent},
  {path: 'personalArea', component: PersonalAreaComponent},
  {path: 'detailsTrip', component: DetailsTripComponent},
  {path: 'usUsers', component: UsUsersComponent},
  {path: 'updateDetails', component: LogInComponent},
  {path: 'invatesUser', component: InvatesUserComponent},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
