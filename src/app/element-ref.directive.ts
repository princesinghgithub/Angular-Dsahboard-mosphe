import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appElementRef]'
})
export class ElementRefDirective {

  constructor( el:ElementRef) { 
    el.nativeElement.style.color="red",
    el.nativeElement.style.background="yellow"
    el.nativeElement.style.padding="20px"
  }

}
