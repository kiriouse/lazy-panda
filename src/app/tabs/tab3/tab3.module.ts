import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { Tab2PageRoutingModule } from '../tab2/tab2-routing.module';
import { Tab2PageModule } from '../tab2/tab2.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    Tab2PageRoutingModule,
    Tab2PageModule,
  ],
  declarations: [Tab3Page],
})
export class Tab3PageModule {}
