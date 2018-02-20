import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppConfigInterface } from '../config/config.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    @Inject('appConfig') private appConfig: AppConfigInterface,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.isAuthenticated().then((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        window.location.href = this.appConfig.parentURL;
        return false;
      }

      if (!next.data || !next.data.allowedRoles) {
        return true;
      }

      const hasRole = this.auth.hasRequiredRole(next.data.allowedRoles);
      if (!hasRole) {
        window.location.href = this.appConfig.parentURL
          + '/no-access?subAppAccess='
          + this.appConfig.serviceName;
        return false;
      }

      return true;
    });
  }
}
