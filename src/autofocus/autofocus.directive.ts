import { Directive, OnChanges, OnInit, Input, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFPAutoFocus]'
})
export class AutoFocusDirective implements OnInit, OnChanges {
  @Input() public appAutoFocus: boolean;
  @Input() public aafLoading: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    setTimeout(() => {
      element.focus();
    });

    if (this.appAutoFocus) {
      element.onblur = (event: any) => {
        setTimeout(() => {
          const x = window.scrollX;
          const y = window.scrollY;
          element.focus();
          window.scrollTo(x, y);
        });
      };
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.aafLoading && changes.aafLoading.previousValue === true && changes.aafLoading.currentValue === false) {
      setTimeout(() => {
        this.elementRef.nativeElement.focus();
      });
    }
  }
}
