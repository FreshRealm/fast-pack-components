import { Directive, Input, ElementRef } from '@angular/core';
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
    AutoFocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appFPAutoFocus]'
                },] },
    ];
    /** @nocollapse */
    AutoFocusDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AutoFocusDirective.propDecorators = {
        "appAutoFocus": [{ type: Input },],
        "aafLoading": [{ type: Input },],
    };
    return AutoFocusDirective;
}());
export { AutoFocusDirective };
//# sourceMappingURL=autofocus.directive.js.map