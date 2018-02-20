import { UserModel } from '../user/user.model';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { AppConfigInterface } from '../config/config.interface';
export declare class AuthService {
    private http;
    private appConfig;
    private cookieService;
    user: UserModel;
    token: string;
    constructor(http: HttpClient, appConfig: AppConfigInterface, cookieService: CookieService);
    isAuthenticated(): Promise<boolean>;
    hasRequiredRole(roles: string | string[]): boolean;
    hasAllRoles(roles: string[]): boolean;
}
