///<reference path="../../node_modules/@types/mathjax/index.d.ts"/>
import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appMathjax]'
})
export class MathjaxDirective {
  // @Input('appMathjax') fractionString: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    // console.log('>> ngOnChanges');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    // this.el.nativeElement.innerHTML = this.fractionString;
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
  }

}
