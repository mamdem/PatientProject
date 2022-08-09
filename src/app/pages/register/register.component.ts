import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  step1=true
  step2=false

  apiServiceUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  register(){
    if(this.email!="" && this.prenom!="" && this.nom!="" && this.mdp!="" && this.tel!=""){
      if(this.mdp===this.confmdp){
        this.http.post<any>(`${this.apiServiceUrl}/personnes/add`, {
          "email":this.email,
          "mdp":this.mdp,
          "nom":this.nom,
          "prenom":this.prenom,
          "tel":this.tel,
          "type":"patient"
        }).subscribe(
          (response: any)=>{
            if(response!=null){
              //inscription reussie
            }else{
    
            }
          },(error: HttpErrorResponse)=>{
    
          }
        )
      }else{
        //Mots de passe non identiques
      }
    }else{
      //Veuillez renseigner tous les champs
    }
  }

  reverseSteps(){
    this.step1=!this.step1
    this.step2=!this.step2
  }

}
