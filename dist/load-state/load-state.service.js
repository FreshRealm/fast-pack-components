var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
var LoadStateService = /** @class */ (function () {
    function LoadStateService(router) {
        var _this = this;
        this.router = router;
        this.loading = false;
        router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.loading = true;
            }
            else if (event instanceof NavigationEnd) {
                _this.loading = false;
            }
            else if (event instanceof NavigationCancel) {
                _this.loading = false;
            }
            else if (event instanceof NavigationError) {
                _this.loading = false;
            }
        });
    }
    LoadStateService = __decorate([
        Injectable()
    ], LoadStateService);
    return LoadStateService;
}());
export { LoadStateService };
//# sourceMappingURL=load-state.service.js.map