import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChronometerRoutingModule } from './chronometer-routing.module';
import { ChronometerComponent } from './chronometer.component';
import { Tab2PageRoutingModule } from '../../tab2/tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChronometerRoutingModule,
    Tab2PageRoutingModule,
  ],
  declarations: [ChronometerComponent],
})
export class ChronometerModule {}
