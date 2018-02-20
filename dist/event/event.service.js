var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
var EventService = /** @class */ (function () {
    function EventService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    EventService.prototype.createEvent = function (name, eventData) {
        var event = {
            name: name,
            type: 'fast-pack',
            warehouseCode: this.appConfig.warehouseCode,
            data: eventData
        };
        this.http.post(this.appConfig.eventServiceAPI + "/api/v1/events", event).toPromise().catch(function (err) {
            // do nothing with rejection
        });
    };
    EventService = __decorate([
        Injectable(),
        __param(1, Inject('appConfig'))
    ], EventService);
    return EventService;
}());
export { EventService };
//# sourceMappingURL=event.service.js.map