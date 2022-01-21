import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  log(msg:any){
    console.log(msg)
  }
}
