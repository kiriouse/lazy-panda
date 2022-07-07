import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RegistrationPageComponent} from './registration-page.component';

import {RegistrationPageRoutingModule} from './registration-page.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPageComponent]
})
export class RegistrationPageModule {
}
