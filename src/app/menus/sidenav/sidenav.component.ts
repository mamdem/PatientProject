import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { VariablesService } from 'src/app/global/variables.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private toastr: ToastrManager,private http: HttpClient, private router: Router, public vari: VariablesService) { }

  ngOnInit(): void {
  }

}
