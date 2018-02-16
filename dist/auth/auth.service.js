import { UserModel } from '../user/user.model';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import { EnvConfigService } from '../env-config/env-config.service';
var AuthService = /** @class */ (function () {
    function AuthService(http, envConfigService, cookieService) {
        this.http = http;
        this.envConfigService = envConfigService;
        this.cookieService = cookieService;
        this.token = this.cookieService.get('fr-jwt');
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.envConfigService.config.environmentConfig.userServiceAPI + "/api/v1/current-user").subscribe(function (data) {
                if (!data || !data.roles) {
                    resolve(false);
                }
                _this.user = new UserModel(data);
                resolve(true);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    AuthService.prototype.hasRequiredRole = function (roles) {
        if (typeof roles === 'string') {
            roles = [roles];
        }
        if (!roles.length) {
            return true;
        }
        var _loop_1 = function (roleSlug) {
            if (this_1.user) {
                return { value: !!(this_1.user.roles.find(function (role) {
                        return role.slug === roleSlug;
                    })) };
            }
            return { value: false };
        };
        var this_1 = this;
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var roleSlug = roles_1[_i];
            var state_1 = _loop_1(roleSlug);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return true;
    };
    AuthService.prototype.hasAllRoles = function (roles) {
        if (this.user) {
            var fail_1 = false;
            for (var _i = 0, roles_2 = roles; _i < roles_2.length; _i++) {
                var roleSlug = roles_2[_i];
                fail_1 = !this.hasRequiredRole(roleSlug);
                if (fail_1) {
                    console.error('User did not have role: ' + roleSlug);
                    console.error('User: ', this.user);
                    return false;
                }
            }
        }
        return true;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: HttpClient, },
        { type: EnvConfigService, },
        { type: CookieService, },
    ]; };
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map