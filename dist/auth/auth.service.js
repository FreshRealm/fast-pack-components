var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { UserModel } from '../user/user.model';
import { Injectable, Inject } from '@angular/core';
var AuthService = /** @class */ (function () {
    function AuthService(http, appConfig, cookieService) {
        this.http = http;
        this.appConfig = appConfig;
        this.cookieService = cookieService;
        this.token = this.cookieService.get('fr-jwt');
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.appConfig.userServiceAPI + "/api/v1/current-user").subscribe(function (data) {
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
    AuthService = __decorate([
        Injectable(),
        __param(1, Inject('appConfig'))
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map