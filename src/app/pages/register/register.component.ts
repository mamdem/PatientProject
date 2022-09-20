import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VariablesService } from 'src/app/global/variables.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email=""
  prenom=""
  nom=""
  mdp=""
  confmdp=""
  tel=""

  personne: any

  step1=true
  step2=false

  apiServiceUrl = environment.apiBaseUrl

  modalRef?: BsModalRef;

  constructor(private vari: VariablesService ,private http: HttpClient, private modalService: BsModalService, private router: Router) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    this.decline()
    sessionStorage.setItem("idpers",this.personne.idpatient )
    this.vari.idpers=this.personne.idpersonne
    this.vari.personne=this.personne
    sessionStorage.setItem("user", JSON.stringify(this.personne))
    this.router.navigateByUrl("/patient_dashboard")
  }

  register(template: TemplateRef<any>){
    if(this.email!="" && this.prenom!="" && this.nom!="" && this.mdp!="" && this.tel!=""){
      if(this.mdp===this.confmdp){
        this.http.post<any>(`${this.apiServiceUrl}/personnes/add`, {
          "email":this.email,
          "mdp":this.mdp,
          "nom":this.nom,
          "prenom":this.prenom,
          "tel":this.tel,
        }).subscribe(
          (response: any)=>{
            if(response!=null){
              this.openModal(template)
              this.personne=response
            }else{
              // this.showError('toast-top-center', 'Une erreur s\'est produite !', "Impossible")
            }
          },(error: HttpErrorResponse)=>{
            // this.showError('toast-top-center', 'Une erreur s\'est produite !', "Impossible")
          }
        )
      }else{
        // this.showWarning('toast-top-center', 'Les mots de passe ne sont pas conforme !', "Erreur")
      }
    }else{
      // this.showWarning('toast-top-center', 'Veuillez renseigner tous les champs !', "Impossible")
    }
  }

  reverseSteps(){
    this.step1=!this.step1
    this.step2=!this.step2
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ class: 'modal-sm' });
  }

  decline(){
    this.modalRef?.hide()
  }

  
}
