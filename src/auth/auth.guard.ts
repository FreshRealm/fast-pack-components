import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EnvConfigService } from '../env-config/env-config.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private envConfig: EnvConfigService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.isAuthenticated().then((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        window.location.href = this.envConfig.config.environmentConfig.parentURL;
        return false;
      }

      if (!next.data || !next.data.allowedRoles) {
        return true;
      }

      const hasRole = this.auth.hasRequiredRole(next.data.allowedRoles);
      if (!hasRole) {
        window.location.href = this.envConfig.config.environmentConfig.parentURL
          + '/no-access?subAppAccess='
          + this.envConfig.config.environmentConfig.serviceName;
        return false;
      }

      return true;
    });
  }
}
