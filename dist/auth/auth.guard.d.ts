import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppConfigInterface } from '../config/config.interface';
export declare class AuthGuard implements CanActivate {
    private router;
    private auth;
    private appConfig;
    constructor(router: Router, auth: AuthService, appConfig: AppConfigInterface);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
