import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-homesection',
  templateUrl: './homesection.component.html',
  styleUrls: ['./homesection.component.scss']
})
export class HomesectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    AOS.init({duration: 800,})



  }

}
