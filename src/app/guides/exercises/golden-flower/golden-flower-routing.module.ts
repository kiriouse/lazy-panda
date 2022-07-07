import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldenFlowerComponent } from './golden-flower.component';

const routes: Routes = [
  {
    path: '',
    component: GoldenFlowerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldenFlowerRoutingModule {}
