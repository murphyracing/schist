import * as fetch from 'fetch';
import { Component } from '@angular/core';

export class ShippedSale {
  saleNo: number;
  customer: string;
  lbs: number;
}

@Component({
  selector: 'ship-list',
  templateUrl: 'shiplist/shiplist.component.html',
  styleUrls: ['shiplist/shiplist.component.css'],
})
export class ShipListComponent {
  textInputValue: string;
  last_error: string = "";

  postItem(event) {
    event.preventDefault();
    fetch(
        'http://localhost:3000/api/v1',
        {
          method: 'POST',
          body: JSON.stringify({text: this.textInputValue, complete: false}),
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        })
    .then(() => { this.textInputValue = "" });
  }
}
