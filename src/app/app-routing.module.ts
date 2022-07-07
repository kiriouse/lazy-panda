import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {GoldenFlowerComponent} from './guides/exercises/golden-flower/golden-flower.component';
import {SixHealingSoundsComponent} from './guides/exercises/six-healing-sounds/six-healing-sounds.component';
import {AudioPlayerComponent} from './shared/modules/audio-player/audio-player.component';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dic/golden-flower',
    component: GoldenFlowerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./guides/exercises/golden-flower/golden-flower.module').then((m) => m.GoldenFlowerModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./login-page/login-page.module').then((m) => m.LoginPageModule),
      },
    ],
  },
  {
    path: 'dic/six-healing-sounds',
    component: SixHealingSoundsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./guides/exercises/six-healing-sounds/six-healing-sounds-routing.module')
          .then((m) => m.SixHealingSoundsRoutingModule),
      },
    ],
  },
  {
    path: 'audio-player',
    component: AudioPlayerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./shared/modules/audio-player/audio-player-routing.module')
          .then((m) => m.AudioPlayerRoutingModule),
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
