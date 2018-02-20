var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth, appConfig) {
        this.router = router;
        this.auth = auth;
        this.appConfig = appConfig;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated().then(function (isAuthenticated) {
            if (!isAuthenticated) {
                window.location.href = _this.appConfig.parentURL;
                return false;
            }
            if (!next.data || !next.data.allowedRoles) {
                return true;
            }
            var hasRole = _this.auth.hasRequiredRole(next.data.allowedRoles);
            if (!hasRole) {
                window.location.href = _this.appConfig.parentURL
                    + '/no-access?subAppAccess='
                    + _this.appConfig.serviceName;
                return false;
            }
            return true;
        });
    };
    AuthGuard = __decorate([
        Injectable(),
        __param(2, Inject('appConfig'))
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map