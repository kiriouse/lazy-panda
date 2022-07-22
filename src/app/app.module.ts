import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SixHealingSoundsModule } from './guides/exercises/six-healing-sounds/six-healing-sounds.module';
import { GoldenFlowerModule } from './guides/exercises/golden-flower/golden-flower.module';
import { SharedModule } from './shared/shared.module';
import { AudioPlayerModule } from './shared/modules/audio-player/audio-player.module';
import { IonicStorageModule } from '@ionic/storage';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerModule } from './tabs/tab3/timer/timer.module';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Tab2PageModule } from './tabs/tab2/tab2.module';
import { CrudService } from './shared/services/crud.service';

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
    TimerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    Tab2PageModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeAudio,
    Insomnia,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
