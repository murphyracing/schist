"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shiplist_component_1 = require("./shiplist/shiplist.component");
var DashModule = (function () {
    function DashModule() {
    }
    return DashModule;
}());
DashModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            shiplist_component_1.ShipListComponent
        ],
        bootstrap: [shiplist_component_1.ShipListComponent]
    })
], DashModule);
exports.DashModule = DashModule;
//# sourceMappingURL=dash.module.js.map