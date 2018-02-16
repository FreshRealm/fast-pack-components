import { ProductNumberPipe } from './product-number.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
var ProductNumberModule = /** @class */ (function () {
    function ProductNumberModule() {
    }
    ProductNumberModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    providers: [],
                    declarations: [ProductNumberPipe],
                    exports: [ProductNumberPipe]
                },] },
    ];
    /** @nocollapse */
    ProductNumberModule.ctorParameters = function () { return []; };
    return ProductNumberModule;
}());
export { ProductNumberModule };
//# sourceMappingURL=product-number.pipe.module.js.map