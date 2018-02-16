import { AlertService } from './alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AlertModule.ctorParameters = function () { return []; };
    return AlertModule;
}());
export { AlertModule };
//# sourceMappingURL=alert.module.js.map