import { Component, OnInit } from '@angular/core';
// Import service
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private ApiService: ApiService) { }

  dataSource = [];
  displayedColumns = [];

  /**
   * Pre-defined columns list for contracts table
   */
  columnNames = [{
    id: "name",
    value: "Customer Name."

  }, {
    id: "address",
    value: "Customer Address"
  },
  {
    id: "price",
    value: "Total Price"
  },
  {
    id: "agent",
    value: "Broker Agent Name"
  },
  {
    id: "company",
    value: "Broker Company Name"
  },
  {
    id: "start",
    value: "Contract Start Date"
  },
  {
    id: "end",
    value: "Contract End Date"
  }];

  ngOnInit() {
    this.ApiService.get().then((data: any[]) => { // Load contact data using service
      this.displayedColumns = this.columnNames.map(x => x.id);
      this.dataSource = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
