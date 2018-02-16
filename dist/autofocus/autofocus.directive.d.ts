import { OnChanges, OnInit, ElementRef, SimpleChanges } from '@angular/core';
export declare class AutoFocusDirective implements OnInit, OnChanges {
    private elementRef;
    appAutoFocus: boolean;
    aafLoading: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
