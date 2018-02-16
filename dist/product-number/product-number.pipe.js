import { Pipe } from '@angular/core';
var ProductNumberPipe = /** @class */ (function () {
    function ProductNumberPipe() {
    }
    ProductNumberPipe.prototype.transform = function (input) {
        if (input) {
            if (input.length !== 12) {
                return 'Unrecognized UPC: ' + input;
            }
            return input.substr(6, 5);
        }
        else {
            return 'Missing UPC';
        }
    };
    ProductNumberPipe.decorators = [
        { type: Pipe, args: [{ name: 'fpProductNumber' },] },
    ];
    /** @nocollapse */
    ProductNumberPipe.ctorParameters = function () { return []; };
    return ProductNumberPipe;
}());
export { ProductNumberPipe };
//# sourceMappingURL=product-number.pipe.js.map