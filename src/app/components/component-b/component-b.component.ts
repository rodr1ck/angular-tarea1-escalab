import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  arr: any[];

  constructor(private logger:ProviderService) { 
    this.arr = [{'frutas':['manzana', 'naranja', 'platano']}, {'verduras':['zapallo', 'choclo', 'cebolla']}]    
  }

  ngOnInit(): void {
    this.logger.log(this.arr)
  }

}
