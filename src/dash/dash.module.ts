import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShipListComponent }  from './shiplist.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ShipListComponent
  ],
  bootstrap: [ ShipListComponent ]
})
export class DashModule { }
