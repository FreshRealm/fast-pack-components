var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule_1 = EventModule;
    EventModule.forRoot = function (config) {
        return {
            ngModule: EventModule_1,
            providers: [
                {
                    provide: 'appConfig',
                    useValue: config
                }
            ]
        };
    };
    EventModule = EventModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule],
            providers: [EventService]
        })
    ], EventModule);
    return EventModule;
    var EventModule_1;
}());
export { EventModule };
//# sourceMappingURL=event.module.js.map