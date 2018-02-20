var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LocalStorageService } from './local-storage.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
var LocalStorageModule = /** @class */ (function () {
    function LocalStorageModule() {
    }
    LocalStorageModule_1 = LocalStorageModule;
    LocalStorageModule.forRoot = function (config) {
        return {
            ngModule: LocalStorageModule_1,
            providers: [{
                    provide: 'localStorageConfig',
                    useValue: config
                }]
        };
    };
    LocalStorageModule = LocalStorageModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            providers: [
                LocalStorageService
            ],
            declarations: [],
            exports: []
        })
    ], LocalStorageModule);
    return LocalStorageModule;
    var LocalStorageModule_1;
}());
export { LocalStorageModule };
//# sourceMappingURL=local-storage.module.js.map