import { Inject, Injectable } from '@angular/core';
var EnvConfigService = /** @class */ (function () {
    function EnvConfigService(config) {
        this.config = config;
    }
    EnvConfigService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EnvConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['envConfig',] },] },
    ]; };
    return EnvConfigService;
}());
export { EnvConfigService };
//# sourceMappingURL=env-config.service.js.map