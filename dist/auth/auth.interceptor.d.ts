import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
export declare class AuthInterceptor implements HttpInterceptor {
    private authService;
    constructor(authService: AuthService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
