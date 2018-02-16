import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EnvConfigService } from '../env-config/env-config.service';
export declare class AuthGuard implements CanActivate {
    private router;
    private auth;
    private envConfig;
    constructor(router: Router, auth: AuthService, envConfig: EnvConfigService);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
