import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './menus/header/header.component';
import { FooterComponent } from './menus/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SidenavComponent } from './menus/sidenav/sidenav.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { HistoriesComponent } from './pages/histories/histories.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { DoctorProfileComponent } from './pages/doctor-profile/doctor-profile.component';
import { DatePipe } from '@angular/common';
// import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [  
    AproposComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    AppointmentComponent,
    FavouritesComponent,
    HistoriesComponent,
    PatientDashboardComponent,
    DoctorProfileComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    ToastrModule.forRoot()
    // MatDialogModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
