"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch = require("fetch");
var core_1 = require("@angular/core");
var ShippedSale = (function () {
    function ShippedSale() {
    }
    return ShippedSale;
}());
exports.ShippedSale = ShippedSale;
var ShipListComponent = (function () {
    function ShipListComponent() {
        this.last_error = "";
    }
    ShipListComponent.prototype.postItem = function (event) {
        var _this = this;
        event.preventDefault();
        fetch('http://localhost:3000/api/v1', {
            method: 'POST',
            body: JSON.stringify({ text: this.textInputValue, complete: false }),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
        })
            .then(function () { _this.textInputValue = ""; });
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