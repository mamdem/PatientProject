import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { VariablesService } from 'src/app/global/variables.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tel=""
  mdp=""

  apiServiceUrl = environment.apiBaseUrl

  constructor(private toastr: ToastrManager,private http: HttpClient, private router: Router, private vari: VariablesService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.tel!="" && this.mdp!=""){
      this.http.post<any>(`${this.apiServiceUrl}/patient/login`, {
        "tel":this.tel,
        "mdp":this.mdp
      }).subscribe(
        (response: any)=>{
          if(response!=null){
            this.vari.personne=response
            sessionStorage.setItem("user", JSON.stringify(response))
            this.router.navigateByUrl("/patient_dashboard")
          }else{
            this.showError("Impossible", "Téléphone ou mot de passe incorrecte !")
          }
        },(error: HttpErrorResponse)=>{
          this.showError("Erreur", error.message)
        }
      )
    }else{
      this.showWarning("Impossible", "Veuillez renseigner les champs")
    }
    
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
