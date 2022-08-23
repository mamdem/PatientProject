import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  idpers: number=0

  personne: any = null
  
  constructor() { }

  isConnected(){
    return this.personne!=null
  }
}
