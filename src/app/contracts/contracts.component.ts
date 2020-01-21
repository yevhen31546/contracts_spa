import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private ApiService: ApiService) { }

  contracts = [];
  columnsToDisplay: string[] = ['name', 'address', 'price', 'agent', 'company', 'start', 'end'];

  ngOnInit() {
    this.ApiService.get().then((data: any[]) => { // Load contact data using service
      this.contracts = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
