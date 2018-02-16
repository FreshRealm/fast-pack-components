import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        if (this.authService.token) {
            authReq = req.clone({
                headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token })
            });
        }
        return next.handle(authReq);
    };
    AuthInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthInterceptor.ctorParameters = function () { return [
        { type: AuthService, },
    ]; };
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map