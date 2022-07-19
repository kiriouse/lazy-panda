import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { Tab2PageRoutingModule } from '../../tab2/tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TimerRoutingModule,
    Tab2PageRoutingModule,
  ],
  declarations: [TimerComponent],
})
export class TimerModule {}
