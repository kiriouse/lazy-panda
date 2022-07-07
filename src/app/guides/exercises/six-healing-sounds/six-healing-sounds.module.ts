import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SixHealingSoundsComponent } from './six-healing-sounds.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [SixHealingSoundsComponent]
})
export class SixHealingSoundsModule {}
