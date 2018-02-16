import { UserModel } from '../user/user.model';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { EnvConfigService } from '../env-config/env-config.service';
export declare class AuthService {
    private http;
    private envConfigService;
    private cookieService;
    user: UserModel;
    token: string;
    constructor(http: HttpClient, envConfigService: EnvConfigService, cookieService: CookieService);
    isAuthenticated(): Promise<boolean>;
    hasRequiredRole(roles: string | string[]): boolean;
    hasAllRoles(roles: string[]): boolean;
}
