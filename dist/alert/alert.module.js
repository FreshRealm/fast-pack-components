var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AlertService } from './alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        NgModule({
            imports: [
                BrowserAnimationsModule,
                CommonModule,
                ToastrModule.forRoot({
                    positionClass: 'toast-top-center',
                    timeOut: 0,
                    extendedTimeOut: 0,
                    closeButton: true
                })
            ],
            providers: [AlertService]
        })
    ], AlertModule);
    return AlertModule;
}());
export { AlertModule };
//# sourceMappingURL=alert.module.js.map