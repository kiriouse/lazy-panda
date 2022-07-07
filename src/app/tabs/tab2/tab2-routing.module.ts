import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tab2Page} from './tab2.page';
import {IconComponent} from '../../shared/components/icon/icon.component';
import {CommonModule} from '@angular/common';
import {TopComponent} from '../../shared/components/top/top.component';
import {AlarmComponent} from '../../shared/components/alarm/alarm.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  declarations: [
    IconComponent,
    TopComponent,
    AlarmComponent
  ],
  exports: [RouterModule, IconComponent, TopComponent, AlarmComponent]
})
export class Tab2PageRoutingModule {
}
