import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SixHealingSoundsModule} from './guides/exercises/six-healing-sounds/six-healing-sounds.module';
import {GoldenFlowerModule} from './guides/exercises/golden-flower/golden-flower.module';
import {SharedModule} from './shared/shared.module';
import {AudioPlayerModule} from './shared/modules/audio-player/audio-player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    SixHealingSoundsModule,
    GoldenFlowerModule,
    AudioPlayerModule,
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],

})
export class AppModule {
}
