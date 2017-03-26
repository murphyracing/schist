import { Component } from '@angular/core';

export class ShippedSale {
  saleNo: number;
  customer: string;
  lbs: number;
}

@Component({
  selector: 'ship-list',
  templateUrl: 'shiplist.component.html',
  styleUrls: ['shiplist.component.css'],
})
export class ShipListComponent {
  sale: ShippedSale = {
    saleNo: 28374,
    customer: "April L.",
    lbs: 0
  };
}
