import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective implements OnInit {

  constructor(private el: ElementRef) {
    (<HTMLElement>this.el.nativeElement).style.color = "red";
  }

  ngOnInit(): void {

  }

}
