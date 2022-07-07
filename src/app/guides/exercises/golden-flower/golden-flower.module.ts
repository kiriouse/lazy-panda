import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoldenFlowerComponent } from './golden-flower.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [GoldenFlowerComponent]
})
export class GoldenFlowerModule {}
