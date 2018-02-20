var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Input } from '@angular/core';
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    AutoFocusDirective.prototype.ngOnInit = function () {
        var element = this.elementRef.nativeElement;
        setTimeout(function () {
            element.focus();
        });
        if (this.appAutoFocus) {
            element.onblur = function (event) {
                setTimeout(function () {
                    var x = window.scrollX;
                    var y = window.scrollY;
                    element.focus();
                    window.scrollTo(x, y);
                });
            };
        }
    };
    AutoFocusDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.aafLoading && changes.aafLoading.previousValue === true && changes.aafLoading.currentValue === false) {
            setTimeout(function () {
                _this.elementRef.nativeElement.focus();
            });
        }
    };
    __decorate([
        Input()
    ], AutoFocusDirective.prototype, "appAutoFocus", void 0);
    __decorate([
        Input()
    ], AutoFocusDirective.prototype, "aafLoading", void 0);
    AutoFocusDirective = __decorate([
        Directive({
            selector: '[appFPAutoFocus]'
        })
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());
export { AutoFocusDirective };
//# sourceMappingURL=autofocus.directive.js.map