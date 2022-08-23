import { Component, OnInit } from '@angular/core';
import { VariablesService } from './global/variables.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private vari: VariablesService) { }

  ngOnInit(): void {
    this.vari.idpers = Number(sessionStorage.getItem("idpers"))
    var user = sessionStorage.getItem("user")
    if(user!=null)
      this.vari.personne = JSON.parse(user)
  }

}
