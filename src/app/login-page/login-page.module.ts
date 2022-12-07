import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';

import { LoginPageRoutingModule } from './login-page.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {}
