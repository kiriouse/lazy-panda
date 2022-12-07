import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronometerComponent } from './chronometer.component';

const routes: Routes = [
  {
    path: '',
    component: ChronometerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChronometerRoutingModule {}
