import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { VariablesService } from 'src/app/global/variables.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  apiServiceUrl = environment.apiBaseUrl

  allSlots: any[]=[]

  constructor(private toastr: ToastrManager,private http: HttpClient, private router: Router, private vari: VariablesService) { }

  ngOnInit(): void {
  }

  getAllSlots(){
    this.http.get<any>(`${this.apiServiceUrl}/rendezvous/all/`).subscribe(
      (response: any)=>{
        if(response!=null){
          this.allSlots=response
          console.log(this.allSlots)
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
