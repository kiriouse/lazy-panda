import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationPageComponent} from './registration-page.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class RegistrationPageRoutingModule {
}
