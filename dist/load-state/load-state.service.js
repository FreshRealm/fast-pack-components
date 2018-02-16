import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    LoadStateService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoadStateService.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    return LoadStateService;
}());
export { LoadStateService };
//# sourceMappingURL=load-state.service.js.map