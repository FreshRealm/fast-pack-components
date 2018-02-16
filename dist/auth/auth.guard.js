import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EnvConfigService } from '../env-config/env-config.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth, envConfig) {
        this.router = router;
        this.auth = auth;
        this.envConfig = envConfig;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated().then(function (isAuthenticated) {
            if (!isAuthenticated) {
                window.location.href = _this.envConfig.config.environmentConfig.parentURL;
                return false;
            }
            if (!next.data || !next.data.allowedRoles) {
                return true;
            }
            var hasRole = _this.auth.hasRequiredRole(next.data.allowedRoles);
            if (!hasRole) {
                window.location.href = _this.envConfig.config.environmentConfig.parentURL
                    + '/no-access?subAppAccess='
                    + _this.envConfig.config.environmentConfig.serviceName;
                return false;
            }
            return true;
        });
    };
    AuthGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: Router, },
        { type: AuthService, },
        { type: EnvConfigService, },
    ]; };
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map