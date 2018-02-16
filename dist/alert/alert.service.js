import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    AlertService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AlertService.ctorParameters = function () { return [
        { type: ToastrService, },
    ]; };
    return AlertService;
}());
export { AlertService };
//# sourceMappingURL=alert.service.js.map