import { CookieModule } from 'ngx-cookie';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnvConfigService } from '../env-config/env-config.service';
import { HttpClientModule } from '@angular/common/http';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.forRoot = function (envConfig) {
        return {
            ngModule: AuthModule,
            providers: [
                EnvConfigService, {
                    provide: 'envConfig',
                    useValue: envConfig
                }
            ]
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = function () { return []; };
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=auth.module.js.map