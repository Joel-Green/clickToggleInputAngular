import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

  @Input() public appAutoFocus: boolean;
  
  constructor(private el: ElementRef ) { }
 
  public ngAfterContentInit() {
    this.el.nativeElement.focus();
}
}
