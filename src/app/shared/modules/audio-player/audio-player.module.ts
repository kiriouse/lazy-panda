import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AudioPlayerComponent} from './audio-player.component';
import {SharedModule} from '../../shared.module';
import {Tab2PageRoutingModule} from '../../../tabs/tab2/tab2-routing.module';
import {SafePipe} from '../../pipes/save.pipe';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    Tab2PageRoutingModule
  ],
  declarations: [AudioPlayerComponent, SafePipe],
  exports: [SafePipe]
})
export class AudioPlayerModule {
}
