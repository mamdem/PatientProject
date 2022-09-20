import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { VariablesService } from 'src/app/global/variables.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  apiServiceUrl = environment.apiBaseUrl

  allSlots: any[]

  constructor(private toastr: ToastrManager,private http: HttpClient, private router: Router, public vari: VariablesService) { }

  ngOnInit(): void {
    this.getAllAvailableSlots()
  }

  getAllAvailableSlots(){
    this.http.get<any>(`${this.apiServiceUrl}/rendezvous/all/patient/`+this.vari.personne.idpatient+`/`+this.vari.firstdate+`/`+this.vari.lastdate).subscribe(
      (response: any)=>{
        if(response!=null){
          this.allSlots=response
        }else{
          this.showError('Erreur serveur', "Veuillez réessayer !")
        }
      },(error: HttpErrorResponse)=>{
        this.showError("Erreur serveur", error.message)
      }
    )
  }

  addReservation(idrdv: number){
    this.http.get<any>(`${this.apiServiceUrl}/reservation/add/`+idrdv+`/`+this.vari.personne.idpatient).subscribe(
      (response: any)=>{
        if(response!=null){
         this.getAllAvailableSlots()
          this.showSuccess("Succés", "Rendez-vous réservé avec succés")
        }else{
          this.showError('Erreur serveur', "Veuillez réessayer !")
        }
      },(error: HttpErrorResponse)=>{
        this.showError("Erreur serveur", error.message)
      }
    )
  }

  reserver(idpatient: number, idrv: number){
    this.http.put<any>(`${this.apiServiceUrl}/rendezvous/reserver/`+idrv+`/`+idpatient, {}).subscribe(
      (response: any)=>{
        if(response!=null){
          this.allSlots=response
          this.showSuccess("Succés", "Rendez-vous réservé avec succés")
        }else{
          this.showError('Erreur serveur', "Veuillez réessayer !")
        }
      },(error: HttpErrorResponse)=>{
        this.showError("Erreur serveur", error.message)
      }
    )
  }


  showSuccess(title: string, desc: string){
    this.toastr.successToastr(desc, title, {
      position: 'top-center'
    });
  }

  showWarning(title: string, desc: string){
    this.toastr.warningToastr(desc, title, {
      position: 'top-center'
    });
  }

  showError(title: string, desc: string){
    this.toastr.errorToastr(desc, title, {
      position: 'top-center'
    });
  }

}
