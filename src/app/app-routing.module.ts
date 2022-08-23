import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { HistoriesComponent } from './pages/histories/histories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '',   redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'appointments', component: AppointmentComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'histories', component: HistoriesComponent},
  {path: 'patient_dashboard', component: PatientDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
