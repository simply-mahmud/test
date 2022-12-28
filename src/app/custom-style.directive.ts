import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective implements OnInit {

  @Input() color: string = "transparent";

  constructor(private el: ElementRef) {

  }

  changeColor() {
    if (this.el) {
      this.el.nativeElement.style.color = this.color ?? "transparent";
    }
  }

  ngOnInit(): void {

    this.changeColor()

  }

}
