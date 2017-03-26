import {Component, Input} from '@angular/core';
import {ShipListData} from "./ShipListData";

export class ShippedSale {
  saleNo: number;
  customer: string;
  lbs: number;
}

@Component({
  selector: 'ship-list',
  templateUrl: 'shiplist/shiplist.component.html',
  styleUrls: ['shiplist/shiplist.component.css'],
  providers: [ShipListData]
})
export class ShipListComponent {
  constructor (private shipData: ShipListData) {}

  itemTitle: string;
  itemIsComplete: boolean;


  postItem(event) {
    event.preventDefault();
    this.shipData.postItem(this.itemTitle, this.itemIsComplete).subscribe(
        result => this.itemTitle = JSON.stringify(result),
        error => { console.error(error); this.itemTitle = error }
    );
  }
}
