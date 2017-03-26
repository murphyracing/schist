"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var ShippedSale = (function () {
    function ShippedSale() {
    }
    return ShippedSale;
}());
exports.ShippedSale = ShippedSale;
var ShipListComponent = (function () {
    function ShipListComponent(http) {
        this.http = http;
        this.last_error = "";
        this.ep = 'http://localhost:3000/api/v1';
    }
    ShipListComponent.prototype.postItem = function (event) {
        event.preventDefault();
        var body = { text: this.textInputValue, complete: false };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http
            .post(this.ep, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
        this.textInputValue = "";
    };
    return ShipListComponent;
}());
ShipListComponent = __decorate([
    core_1.Component({
        selector: 'ship-list',
        templateUrl: 'shiplist/shiplist.component.html',
        styleUrls: ['shiplist/shiplist.component.css'],
    })
], ShipListComponent);
exports.ShipListComponent = ShipListComponent;
//# sourceMappingURL=shiplist.component.js.map