import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AudioPlayerComponent } from './shared/modules/audio-player/audio-player.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TimerComponent } from './tabs/tab3/timer/timer.component';
import { AuthGuard } from './shared/auth-guard/auth.guard';
import { ChronometerComponent } from './tabs/tab3/chronometer/chronometer.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    component: LoginPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
    ],
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./registration-page/registration-page.module').then(
            (m) => m.RegistrationPageModule
          ),
      },
    ],
  },
  {
    path: 'audio-player',
    component: AudioPlayerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './shared/modules/audio-player/audio-player-routing.module'
          ).then((m) => m.AudioPlayerRoutingModule),
      },
    ],
  },
  {
    path: 'timer',
    component: TimerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./tabs/tab3/timer/timer-routing.module').then(
            (m) => m.TimerRoutingModule
          ),
      },
    ],
  },
  {
    path: 'chronometer',
    component: ChronometerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./tabs/tab3/chronometer/chronometer-routing.module').then(
            (m) => m.ChronometerRoutingModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
