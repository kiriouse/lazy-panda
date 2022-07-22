import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './registration-page.component';

import { RegistrationPageRoutingModule } from './registration-page.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RegistrationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrationPageComponent],
})
export class RegistrationPageModule {}
