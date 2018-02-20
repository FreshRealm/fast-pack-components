var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var AlertService = /** @class */ (function () {
    function AlertService(toastr) {
        this.toastr = toastr;
        this.keepAfterRouteChange = false;
    }
    AlertService.prototype.success = function (message, options) {
        this.toastr.success(message, undefined, options);
    };
    AlertService.prototype.error = function (message, options) {
        this.toastr.error(message, undefined, options);
    };
    AlertService.prototype.info = function (message, options) {
        this.toastr.info(message, undefined, options);
    };
    AlertService.prototype.warn = function (message, options) {
        this.toastr.warning(message, undefined, options);
    };
    AlertService.prototype.handleError = function (error) {
        if (error.error && error.error.message) {
            this.error(error.error.message);
        }
        else if (error.message) {
            this.error(error.message);
        }
        else {
            this.error(error);
        }
    };
    AlertService.prototype.hasErrors = function () {
        if (!this.toastr.toasts || !this.toastr.toasts.length) {
            return false;
        }
        var errors = this.toastr.toasts.filter(function (toast) {
            return toast
                && toast.portal
                && toast.portal.instance
                && toast.portal.instance.toastPackage
                && toast.portal.instance.toastPackage.toastType === 'toast-error';
        });
        return !!errors.length;
    };
    AlertService.prototype.clear = function () {
        this.toastr.clear();
    };
    AlertService = __decorate([
        Injectable()
    ], AlertService);
    return AlertService;
}());
export { AlertService };
//# sourceMappingURL=alert.service.js.map