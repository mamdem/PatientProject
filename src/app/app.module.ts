import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './menus/header/header.component';
import { FooterComponent } from './menus/footer/footer.component';
import { HomesectionComponent } from './pages/homesection/homesection.component';


@NgModule({
  declarations: [  
    AproposComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomesectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
