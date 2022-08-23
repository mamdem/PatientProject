import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { VariablesService } from 'src/app/global/variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private vari: VariablesService) { }

  ngOnInit(): void {
    Aos.init({duration: 800,})
  }

}
