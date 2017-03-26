import * as request from 'request';
import { Component } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";

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
  constructor (private http: Http) {}

  textInputValue: string;
  last_error: string = "";
  private ep = 'http://localhost:3000/api/v1';

  postItem(event) {
    event.preventDefault();

    const body = {text: this.textInputValue, complete: false};
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    this.http
        .post(this.ep, body, options)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    this.textInputValue = "";
  }
}
