var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CookieModule } from 'ngx-cookie';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function (config) {
        return {
            ngModule: AuthModule_1,
            providers: [
                {
                    provide: 'appConfig',
                    useValue: config
                }
            ]
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CookieModule.forChild(),
                HttpClientModule
            ],
            providers: [
                AuthGuard,
                AuthInterceptor,
                AuthService
            ],
            declarations: [],
            exports: []
        })
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());
export { AuthModule };
//# sourceMappingURL=auth.module.js.map