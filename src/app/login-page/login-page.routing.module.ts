import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {
}
