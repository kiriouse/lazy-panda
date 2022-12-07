import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IonicAuthService } from '../services/ionic-auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: IonicAuthService, private router: Router) {}

  canActivateChild(): Observable<boolean> {
    return this.authService.isUserLoggedIn().pipe(
      map((value: boolean) => {
        if (value) {
          console.log(true);
          return true;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        console.log(false);
        return of(false);
      })
    );
  }
}
