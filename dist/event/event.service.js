import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvConfigService } from '../env-config/env-config.service';
var EventService = /** @class */ (function () {
    function EventService(http, envConfigService) {
        this.http = http;
        this.envConfigService = envConfigService;
    }
    EventService.prototype.createEvent = function (name, eventData) {
        var event = {
            name: name,
            type: 'fast-pack',
            warehouseCode: this.envConfigService.config.environmentConfig.warehouseCode,
            data: eventData
        };
        this.http.post(this.envConfigService.config.environmentConfig.eventServiceAPI + "/api/v1/events", event).toPromise().catch(function (err) {
            // do nothing with rejection
        });
    };
    EventService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EventService.ctorParameters = function () { return [
        { type: HttpClient, },
        { type: EnvConfigService, },
    ]; };
    return EventService;
}());
export { EventService };
//# sourceMappingURL=event.service.js.map