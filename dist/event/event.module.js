import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnvConfigService } from '../env-config/env-config.service';
var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule.forRoot = function (envConfig) {
        return {
            ngModule: EventModule,
            providers: [
                EnvConfigService, {
                    provide: 'envConfig',
                    useValue: envConfig
                }
            ]
        };
    };
    EventModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [EventService]
                },] },
    ];
    /** @nocollapse */
    EventModule.ctorParameters = function () { return []; };
    return EventModule;
}());
export { EventModule };
//# sourceMappingURL=event.module.js.map