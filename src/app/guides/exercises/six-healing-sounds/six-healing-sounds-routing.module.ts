import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixHealingSoundsComponent } from './six-healing-sounds.component';

const routes: Routes = [
  {
    path: '',
    component: SixHealingSoundsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SixHealingSoundsRoutingModule {}
